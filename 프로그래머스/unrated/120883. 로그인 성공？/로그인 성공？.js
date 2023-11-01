function solution(id_pw, db) {
    const [inputId, inputPw] = id_pw;
    for (const [userId, userPw] of db) {
        if (inputId === userId) {
            if (inputPw === userPw) {
                return "login";
            }
            else {
                return "wrong pw";
            }
        }
    }
    return "fail";
}
