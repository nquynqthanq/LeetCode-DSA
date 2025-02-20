const ZigZagConversion = function (s, numRows) {
    if (numRows === 1 || numRows >= s.length) return s;

    let rows = Array.from({ length: numRows }, () => "");

    let index = 0, step = 1;

    for (let char of s) {
        rows[index] += char;
        if (index === 0) step = 1;
        else if (index === numRows - 1) step = -1;
        index += step;
    }

    return rows.join("");
}

module.exports = ZigZagConversion;