import { generateMenu } from "./src/lib/nutrition";
import { forwardChain } from "./src/lib/predicates";

const menu = generateMenu(2);
const report = forwardChain(menu);
console.log("Actual conclusion value:", JSON.stringify(report.conclusion));
console.log("Balanced:", report.balanced);
