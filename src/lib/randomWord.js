function randomWord(base = 1) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()"
    const {random, floor} = Math;

    const piece = _ => chars[floor(base + chars.length * random()) % chars.length];

    return piece() + piece() + piece() + piece() + piece() + piece();
}

export default randomWord;