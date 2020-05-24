import { serve } from "https://deno.land/std@0.52.0/http/server.ts";
const s = serve({ port: 4200 });
console.log("http://localhost:4200/");
for await (const req of s) {
    req.respond({ body: "<h1 style=color:blue> Hello World, This is my first Deno App :)\n" });
}