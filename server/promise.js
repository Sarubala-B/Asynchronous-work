// // Simulate a delay function that resolves or rejects a Promise
// function fetchData(success) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (success) {
//           resolve("Data fetched successfully!");
//         } else {
//           reject("Error: Failed to fetch data!");
//         }
//       }, 2000); 
//     });
//   }
  
//   // Call the fetchData function and handle the Promise
//   fetchData(false) 
//     .then((data) => {
//       console.log(data); 
//     })
//     .catch((error) => {
//       console.error(error); 
//     });
  


function fetchDataSuccess() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched successfully!");
      }, 1000); 
    });
  }
  
  function fetchDataError() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject("Error: Failed to fetch data!");
      }, 2000); 
    });
  }
  Promise.all([fetchDataSuccess(), fetchDataError()])
    .then((results) => {
      console.log("Promise.all results:", results);
    })
    .catch((error) => {
      console.error("Promise.all error:", error); 
    });

  Promise.allSettled([fetchDataSuccess(), fetchDataError()])
    .then((results) => {
      console.log("Promise.allSettled results:", results);
    });
  
  Promise.race([fetchDataSuccess(), fetchDataError()])
    .then((result) => {
      console.log("Promise.race result:", result);
    })
    .catch((error) => {
      console.error("Promise.race error:", error);
    });
  