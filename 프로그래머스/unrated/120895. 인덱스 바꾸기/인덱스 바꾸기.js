function solution(my_string, num1, num2) {
    const strArray = my_string.split('');

    const temp = strArray[num1];
    strArray[num1] = strArray[num2];
    strArray[num2] = temp;

    return strArray.join('');
}
