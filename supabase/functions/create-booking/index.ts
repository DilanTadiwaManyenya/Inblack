import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const text = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

const calendarDateInHarare = () => {
  const parts = new Intl.DateTimeFormat("en", {
    timeZone: "Africa/Harare",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const value = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return `${value.year}-${value.month}-${value.day}`;
};

const isValidDate = (value: string) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
};

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "POST") return json({ error: "Method not allowed." }, 405);

  try {
    const body: Record<string, unknown> = await request.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return json({ error: "Invalid request." }, 400);
    }
    if (text(body.website, 200)) return json({ error: "Invalid request." }, 400); // Honeypot

    const serviceSlug = text(body.serviceSlug, 80);
    const customerName = text(body.name, 120);
    const phone = text(body.phone, 30);
    const email = text(body.email, 254).toLowerCase();
    const preferredDate = text(body.date, 10);
    const preferredTime = text(body.time, 5);
    const message = text(body.message, 2000) || null;

    if (!serviceSlug || customerName.length < 2 || phone.length < 6 || !/^\S+@\S+\.\S+$/.test(email)) {
      return json({ error: "Please complete all required fields with valid details." }, 422);
    }
    if (!isValidDate(preferredDate) || !/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(preferredTime)) {
      return json({ error: "Please select a valid date and time." }, 422);
    }
    if (preferredDate < calendarDateInHarare()) {
      return json({ error: "Appointments cannot be requested for a past date." }, 422);
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    );
    if (!Deno.env.get("SUPABASE_URL") || !Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")) {
      console.error("create-booking: missing Supabase server configuration");
      return json({ error: "Booking is temporarily unavailable. Please contact INBLACK directly." }, 503);
    }
    const { data: service, error: serviceError } = await supabase
      .from("services").select("id").eq("slug", serviceSlug).eq("is_active", true).maybeSingle();
    if (serviceError || !service) return json({ error: "That service is unavailable. Please choose another." }, 422);

    const { data, error } = await supabase.from("appointments").insert({
      service_id: service.id, customer_name: customerName, phone, email,
      preferred_date: preferredDate, preferred_time: preferredTime, message,
    }).select("id").single();
    if (error) throw error;
    return json({ appointmentId: data.id }, 201);
  } catch (error) {
    console.error("create-booking", error);
    return json({ error: "We could not submit your request. Please try again." }, 500);
  }
});
