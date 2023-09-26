function solution(my_string, alp) {
    var regex = new RegExp(alp, 'g');
    var result = my_string.replace(regex, alp.toUpperCase());
    return result;
}