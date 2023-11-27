import { exec } from "child_process";
import { writeFileSync } from "fs";

exec("pandoc TASKS.md", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }

  writeFileSync("tasks/src/TASKS.html", stdout);

  writeFileSync(
    "tasks/src/TASKS.ts",
    `const TASKS = \`${stdout}\`;export default TASKS;`
  );
});
