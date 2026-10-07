import { NUTRIENTS } from "./lib/nutrition.js";
console.log("NUTRIENTS length:", NUTRIENTS.length);
console.log(
  "First few items:",
  NUTRIENTS.slice(0, 5).map((n) => n.name),
);
console.log(
  "Last few items:",
  NUTRIENTS.slice(-5).map((n) => n.name),
);
