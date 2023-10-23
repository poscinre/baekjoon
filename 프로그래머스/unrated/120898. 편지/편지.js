function solution(message) {
    const letterWidth = 2;
    const spaceWidth = 2;

    let messageLength = 0;

    for (let i = 0; i < message.length; i++) {
        if (message[i] === ' ') {
            messageLength += spaceWidth;
        } else {
            messageLength += letterWidth;
        }
    }

    return messageLength;
}