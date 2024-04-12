//entry point function
function getValues() {
    let inputString = document.getElementById('inputString').value;
    let newString = inputString.replace(/\s/g, '').toLowerCase();

    if (newString.length < 2) {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Please enter a string with 2 or more characters.',
            backdrop: false,
        });
    } 
    else {
        
        let reversedString = reverseString(newString);
        let isPalindrome = checkForPalindrome(newString, reversedString);
        displayResult(reversedString, isPalindrome);
    }
}

// Function to reverse a string
function reverseString(newString) {
    let result = '';

    for (let i = newString.length - 1; i >= 0; i--) {

        result += newString[i];

    }
    return result;
}

// function with an if else that determines if original string is a palindrome by equating it with the first
function checkForPalindrome(originalString, reversedString) {

    if (originalString == reversedString) {

        return true; 
    } 

    else 
    {
        return false; 
    }
}

// function displays the result
function displayResult(reversedString, isPalindrome) {

    let alert = document.getElementById('alert');
    let message = document.getElementById('msg');

    alert.classList.remove('invisible','alert-success','alert-danger');
    message.innerHTML = reversedString;

    if (isPalindrome == true) {
        Swal.fire({
            icon: 'success',
            title: 'Nice!',
            text: 'This is a palindrome.',
            backdrop: false,
        });

        alert.classList.add('alert-success');
    } 
    else {

        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Not a palindrome.',
            backdrop: false,
        });

        alert.classList.add('alert-danger');
    }
}




// function reverseString2(inputString) {

//     let inputArray = inputString.split('');
//     let reverseArray = inputArray.reverse();
//     let reverseString = reverseArray.join('');


//     return reverseString;
// }

