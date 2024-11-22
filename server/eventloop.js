console.log("Start of the script"); // Step 1

setTimeout(() => {
    console.log("This is from setTimeout"); // Step 4
  }, 0);
  
process.nextTick(() => {
  console.log("This is from process.nextTick"); // Step 3
});

console.log("End of the script"); // Step 2
