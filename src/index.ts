import * as readline from "node:readline/promises";


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

(async () => {
  const response = await rl.question("What is your name? ");
  await new Promise(resolve => {
    console.log("Machine is thinking....");
    return setTimeout(resolve, 1000);
  });
  console.log(`Hello ${response}!`);

})();
