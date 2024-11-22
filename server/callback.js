// Function that simulates a delayed task and uses a callback
function fetchData(success, callback) {
    setTimeout(() => {
      if (success) {
        callback(null, "Data fetched successfully!");
      } else {
        callback("Error: Failed to fetch data!", null);
      }
    }, 2000); // Simulate a 2-second delay
  }
  
  // Callback function to handle the result
  function handleResult(error, data) {
    if (error) {
      console.error(error); // Handle error
    } else {
      console.log(data); // Handle success
    }
  }
  
  // Call fetchData with success set to true and pass the callback function
  fetchData(false, handleResult); // Change to 'false' to simulate an error
  