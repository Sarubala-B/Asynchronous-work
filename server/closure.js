// Outer function
function functions() {
    let outerVariable = "I'm from the outer function";
  
    // Inner function (closure)
    function innerFunction() {
      console.log(outerVariable); 
    }
    return innerFunction; 
  }
  const closureExample = functions();
  closureExample(); 
  