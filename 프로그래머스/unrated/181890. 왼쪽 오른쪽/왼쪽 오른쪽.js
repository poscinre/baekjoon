function solution(str_list) {
    var answer = [];
    
    var firstLIndex = str_list.indexOf("l");
    var firstRIndex = str_list.indexOf("r");

    if (firstLIndex === -1 && firstRIndex === -1) {
        return answer;
    }

    if ((firstLIndex < firstRIndex && firstLIndex !== -1) || firstRIndex === -1) {
        answer = str_list.slice(0, firstLIndex);
    }
    else if ((firstRIndex < firstLIndex && firstRIndex !== -1) || firstLIndex === -1) {
        answer = str_list.slice(firstRIndex + 1);
    }

    return answer;
}
