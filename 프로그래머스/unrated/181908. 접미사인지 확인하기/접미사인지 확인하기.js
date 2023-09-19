function solution(my_string, is_suffix) {
    const myStringLength = my_string.length;
    const suffixLength = is_suffix.length;

    if (suffixLength > myStringLength) {
        return 0;
    }

    const mySuffix = my_string.substring(myStringLength - suffixLength);

    if (mySuffix === is_suffix) {
        return 1;
    } else {
        return 0;
    }
}
