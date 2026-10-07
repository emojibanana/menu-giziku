import { generateMenu } from "./src/lib/nutrition";
import { forwardChain, RANGES } from "./src/lib/predicates";
import { macroShares } from "./src/lib/nutrition";

console.log("Ranges:", JSON.stringify(RANGES));

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
    `Shares: K=${shares.karbo}% P=${shares.protein}% L=${shares.lemak}%`,
  );
  console.log(
    `Check K: ${shares.karbo >= RANGES.karbo.lo && shares.karbo <= RANGES.karbo.hi} (${RANGES.karbo.lo}-${RANGES.karbo.hi})`,
  );
  console.log(
    `Check P: ${shares.protein >= RANGES.protein.lo && shares.protein <= RANGES.protein.hi} (${RANGES.protein.lo}-${RANGES.protein.hi})`,
  );
  console.log(
    `Check L: ${shares.lemak >= RANGES.lemak.lo && shares.lemak <= RANGES.lemak.hi} (${RANGES.lemak.lo}-${RANGES.lemak.hi})`,
  );

  const report = forwardChain(menu);
  console.log(`Conclusion: ${report.conclusion}`);
  console.log(`Balanced: ${report.balanced}`);

  // Show which facts are false
  const falseFacts = Object.entries(report.facts).filter(([k, v]) => !v);
  if (falseFacts.length > 0) {
    console.log("False Facts:", falseFacts.map(([k]) => k).join(", "));
  }
}
