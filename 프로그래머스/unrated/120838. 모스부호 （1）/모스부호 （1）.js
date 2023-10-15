function solution(letter) {
    var answer = '';
    var morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    };

    var words = letter.split(' ');

    for (var i = 0; i < words.length; i++) {
        if (morse[words[i]]) {
            answer += morse[words[i]];
        } else {
            answer += ' ';
        }
    }

    return answer;
}