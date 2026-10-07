import { generateMenu } from "./src/lib/nutrition";
import { forwardChain, RANGES, KAL_RANGE } from "./src/lib/predicates";
import { macroShares } from "./src/lib/nutrition";

console.log("Ranges:", JSON.stringify(RANGES));
console.log("KAL_RANGE:", JSON.stringify(KAL_RANGE));

for (let r = 0; r < 4; r++) {
  const menu = generateMenu(r);
  console.log(`\n=== Menu for ${r} orang ===`);
  console.log(`Total kcal: ${menu.totals.kcal}`);
  console.log(
    `Macros: K=${menu.totals.karbo}g P=${menu.totals.protein}g L=${menu.totals.lemak}g`,
  );

  // Get percentages using macroShares
  const shares = macroShares(menu.totals);
  console.log(
    `Shares: K=${shares.karbo.toFixed(1)}% P=${shares.protein.toFixed(1)}% L=${shares.lemak.toFixed(1)}%`,
  );

  const report = forwardChain(menu);
  console.log(`Conclusion: ${report.conclusion}`);
  console.log(`Balanced: ${report.balanced}`);

  // Show which facts are false
  const falseFacts = Object.entries(report.facts).filter(([k, v]) => !v);
  if (falseFacts.length > 0) {
    console.log("False Facts:", falseFacts.map(([k]) => k).join(", "));
  } else {
    console.log("All facts true");
  }
}
