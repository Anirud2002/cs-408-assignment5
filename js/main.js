window.onload = loaded;

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
    // Assign to a variable so we can set a breakpoint in the debugger!
    const hello = sayHello();
    console.log(hello);
}

/**
 * This function returns the string 'hello'
 * @return {string} the string hello
 */
 function sayHello() {
    return 'hello';
}

/**
 * This function pops up alert with current radio button selected value
 * @return {string} the string hello
 */
function showAlert() {
    // Get the currently checked radio button
    const selectedRadio = document.querySelector('input[name="sameValue"]:checked');
    selectedRadio && alert(selectedRadio.value);
  }
