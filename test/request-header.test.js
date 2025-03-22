import request from "supertest";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  const type = req.get("Accept");
  res.send(`Hello: ${type}`);
});

describe("Test Header", () => {
  it("should return request header", async () => {
    const response = await request(app).get("/").set("Accept", "text/plain");

    // Memeriksa status kode HTTP
    expect(response.status).toBe(200);

    // Memeriksa isi dari respons
    expect(response.text).toEqual("Hello: text/plain");
    console.log("\n", response.text);
  });
});
