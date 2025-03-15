//Write a JavaScript function named reverseString that takes a string as an argument and returns the reversed string

function reverse(s) {
    return s.split("").reverse().join("");
    }
    
    console.log(reverse("hello world"));