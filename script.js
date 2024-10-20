let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerHTML;
    
    if (value === '=') {
      // Evaluate the expression and update the input field
      try {
        string = eval(string);
        document.querySelector('input').value = string;
      } catch (error) {
        document.querySelector('input').value = 'Error';
        string = '';
      }
    } else if (value === 'AC') {
      // Clear the string and the input field
      string = '';
      document.querySelector('input').value = '';
    } else {
      // Append button value to string and update the input field
      string = string + value;
      document.querySelector('input').value = string;
    }
  });
});
