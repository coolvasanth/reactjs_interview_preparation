// Explain call, bind & apply

/**
 * Imagine you're the CEO of a powerful company (a function), 
 * but you need to control who gets to make decisions (change 
 * the function's this keyword). That's where call, apply, and 
 * bind come in – your executive assistants!
*/

/************** Call **************/ 
/**
 * call is your direct and assertive assistant. You tell 
 * them who's in charge (this) and what arguments to present (other arguments), 
 * and they call the function immediately.
 */
// example
const car = {
    make: "Tesla",
    model: "Model S",
  };
  
const motorcycle = {
    make: "Ducati",
    model: "Panigale V4",
    startEngine() {
      console.log(`The ${this.make} ${this.model} engine roars to life!`);
    },
};
motorcycle.startEngine.call(car);



/************** Apply **************/ 
/**
 *  Is more formal. You provide a list of arguments for your 
 *  assistant to distribute during the meeting (function call).
*/

const button = document.getElementById("clickMe");
const user = { name: "Vasanth", updateName: function(newName) { this.name = newName; } };

button.addEventListener("click", user.updateName.bind(user, "CareerWithVasanth")); // Pre-bind 'user' as context and 'Super Vasanth' as the argument

// When button is clicked, user.name becomes "CareerWithVasanth"


/************** Bind **************/ 
/**
 *  bind is the most strategic. They create a whole new function with a pre-assigned 
 *  boss (this) and optional arguments already set. You can then call this new function
 *  whenever you need that specific context..
*/
// Partial Function Application (Currying):
function calculateArea(width, height) {
    return width * height;
  }
  
const calculateAreaWithWidth10 = calculateArea.bind(null, 10); // Set width to 10 permanently
const area = calculateAreaWithWidth10(5); // Now only provide height (area = 50)

