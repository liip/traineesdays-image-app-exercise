import { exec } from "child_process";
import { writeFileSync, readFileSync } from "fs";

exec("pandoc TASKS.md", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }

  const app = readFileSync("src/App.svelte")

  writeFileSync(
    "tasks/src/TASKS.ts",
    `const TASKS = \`${stdout}\`;export default TASKS;`,
  );

  writeFileSync(
    "tasks/src/APP.ts",
    `const APP = \`${app}\`;export default APP;`,
  );
});
