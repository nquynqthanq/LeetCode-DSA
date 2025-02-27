var minLength = function (s) {
    s = s.split("");

    let i = 0;
    while (i < s.length - 1) {
        if (s[i] + s[i + 1] === "AB" || s[i] + s[i + 1] === "CD") {
            s.splice(i, 2);
            i = Math.max(0, i - 1);
        } else {
            i++;
        }
    }

    return s.length;
};

module.exports = minLength;