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

const subjects = new Set(["appointment", "services", "boutique", "general"]);

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "POST") return json({ error: "Method not allowed." }, 405);

  try {
    const body: Record<string, unknown> = await request.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return json({ error: "Invalid request." }, 400);
    }
    if (text(body.website, 200)) return json({ error: "Invalid request." }, 400);

    const customerName = text(body.name, 120);
    const email = text(body.email, 254).toLowerCase();
    const phone = text(body.phone, 30) || null;
    const subject = text(body.subject, 40);
    const message = text(body.message, 2000);

    if (customerName.length < 2 || !/^\S+@\S+\.\S+$/.test(email)) {
      return json({ error: "Please enter a valid name and email address." }, 422);
    }
    if ((phone && phone.length < 6) || !subjects.has(subject) || message.length < 2) {
      return json({ error: "Please complete the enquiry with valid details." }, 422);
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    if (!supabaseUrl || !serviceRoleKey) {
      console.error("create-contact: missing Supabase server configuration");
      return json({ error: "Messaging is temporarily unavailable. Please contact INBLACK directly." }, 503);
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey);
    const { data, error } = await supabase.from("contact_messages").insert({
      customer_name: customerName,
      email,
      phone,
      subject,
      message,
    }).select("id").single();

    if (error) throw error;
    return json({ messageId: data.id }, 201);
  } catch (error) {
    console.error("create-contact", error);
    return json({ error: "We could not send your message. Please try again." }, 500);
  }
});
