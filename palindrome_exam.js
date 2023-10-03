// prompt a user input
var userInput = prompt("Enter a string: ")
// A function for checking if the user input is a palindrome or not and if it is a string or integer
function isPalindrome(str) 
{
    // Check if the user input contains only numbers
    if(/^\d+$/.test(str))
    {
        return alert("The given value: '"+ userInput +"' is not a string! The expected data type of the value is string.")
    }
    else
    {
        cleanedWord = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        reversedWord = cleanedWord.split('').reverse().join('');
        
        if (cleanedWord === reversedWord)
        {
            return alert("The given string: '" + userInput + "' is an example of a palindrome, the reverse value is: " + reversedWord + ".");
        }
        else
        {
            return alert("The given string: '" + userInput + "' is not an example of a palindrome.");
        }
    }
}

// Call the function and pass user input as an argument.
isPalindrome(userInput);