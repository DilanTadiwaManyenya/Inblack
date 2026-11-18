import test from "node:test";
import assert from "node:assert/strict";
import { getInitialService, getLocalDate } from "../src/lib/booking.js";

const services = [
  { slug: "hair-styling" },
  { slug: "gel-nails" },
];

test("getInitialService accepts a catalogue service", () => {
  assert.equal(getInitialService("gel-nails", services), "gel-nails");
});

test("getInitialService rejects unknown and empty services", () => {
  assert.equal(getInitialService("unknown", services), "");
  assert.equal(getInitialService("", services), "");
});

test("getLocalDate returns the visitor's local calendar date", () => {
  const harareMidnight = {
    getTime: () => Date.UTC(2026, 10, 17, 22, 30),
    getTimezoneOffset: () => -120,
  };

  assert.equal(getLocalDate(harareMidnight), "2026-11-18");
});

test("getLocalDate handles time zones behind UTC", () => {
  const newYorkEvening = {
    getTime: () => Date.UTC(2026, 10, 19, 2, 30),
    getTimezoneOffset: () => 300,
  };

  assert.equal(getLocalDate(newYorkEvening), "2026-11-18");
});
