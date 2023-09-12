function solution(my_string, overwrite_string, s) {
    const myArray = my_string.split('');

    for (let i = 0; i < overwrite_string.length; i++) {
        myArray[s + i] = overwrite_string[i];
    }

    return myArray.join('');
}

const my_string = "Hello, World!";
const overwrite_string = "OpenAI";
const s = 7;
const result = solution(my_string, overwrite_string, s);
console.log(result);
