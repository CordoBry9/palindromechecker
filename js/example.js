function checkForPalindrom(userString) {

    userString = userString.replace(regex, '');

    const regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, '');

    let  revString = '';

    //the object\

    let returnObj = {msg, '', reversed: ''};

    revString = reverseString(userString);

    if (userString === revString) {

        returnObj.msg = 'Well done! You have a palindrome'
    }
    else {
        returnObj.msg = 'Sorry! You do not have a palindrome'
    }


    returnObj.reversed = revString
    return returnObj;

    }

