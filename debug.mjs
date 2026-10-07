import { generateMenu } from "./lib/nutrition.js";
import { forwardChain } from "./lib/predicates.js";

for (let r = 0; r < 4; r++) {
  const menu = generateMenu(r);
  console.log(`\n=== Menu for ${r} orang ===`);
  console.log(`Total kcal: ${menu.totals.kcal}`);
  console.log(`Meals:`);
  menu.meals.forEach((m, idx) => {
    console.log(`  ${m.slot}: ${m.items.join(", ")} (${m.kcal} kcal)`);
  });
  const report = forwardChain(menu);
  console.log(`\nFacts:`);
  for (const [k, v] of Object.entries(report.facts)) {
    console.log(`  ${k}: ${v}`);
  }
  console.log(`\nConclusion: ${report.conclusion}`);
  console.log(`Balanced: ${report.balanced}`);
}
