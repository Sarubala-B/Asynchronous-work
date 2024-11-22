// Function that returns a Promise that resolves after a specified delay
function wait(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Waited for ${ms} milliseconds`);
      }, ms);
    });
  }
  
  // Async function to use the wait function
  async function runTimer() {
    console.log("Timer started...");
    
    // Wait for 2000 milliseconds (2 seconds)
    const result = await wait(200);
    
    console.log(result); // Handle the resolved value
    console.log("Timer finished!");
  }
  
  // Call the async function
  runTimer();
  

