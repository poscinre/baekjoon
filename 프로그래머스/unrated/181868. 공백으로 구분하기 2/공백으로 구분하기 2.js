function solution(my_string) {
    const wordsArray = my_string.split(/\s+/).filter(word => word.length > 0);
    
    return wordsArray;
}