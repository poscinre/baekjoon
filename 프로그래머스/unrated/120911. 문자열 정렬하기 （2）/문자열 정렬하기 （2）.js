function solution(my_string) {
    my_string = my_string.toLowerCase();
    my_string = my_string.split('').sort().join('');

    return my_string;
}