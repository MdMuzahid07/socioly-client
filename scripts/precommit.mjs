import chalk from "chalk";
import { execSync } from "child_process";
import { performance } from "perf_hooks";

console.log(chalk.cyan.bold("\n🚀 Starting Pre-commit Checks..."));
console.log(chalk.gray("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"));

const steps = [
  {
    name: "Linting & Formatting",
    cmd: "yarn lint-staged",
  },
  {
    name: "Type Checking",
    cmd: "yarn type-check",
  },
  // Add more steps here as needed (e.g. tests)
];

const startTime = performance.now();

for (const step of steps) {
  const stepStart = performance.now();
  console.log(chalk.blue.bold(`\n👉 Running: ${step.name}`));

  try {
    // Execute command, inheriting stdio to show tool output (eslint, tsc, etc.)
    execSync(step.cmd, { stdio: "inherit" });
    
    const stepEnd = performance.now();
    const duration = ((stepEnd - stepStart) / 1000).toFixed(2);
    console.log(chalk.green(`✅ Passed (${duration}s)`));
  } catch (error) {
    console.error(chalk.red.bold(`\n❌ Failed: ${step.name}`));
    console.error(chalk.red("The commit has been blocked. Please fix the errors above."));
    process.exit(1);
  }
}

const endTime = performance.now();
const totalDuration = ((endTime - startTime) / 1000).toFixed(2);

console.log(chalk.gray("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"));
console.log(chalk.green.bold(`🎉 All checks passed successfully in ${totalDuration}s!`));
console.log(chalk.cyan("Ready to commit.\n"));



