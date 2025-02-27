var numOfSubarrays = function (arr) {
    let odd = 0, even = 1, sum = 0, res = 0, mod = 1e9 + 7;
    for (let num of arr) {
        sum += num;
        if (sum % 2 == 0) {
            res = (res + odd) % mod;
            even++;
        } else {
            res = (res + even) % mod;
            odd++;
        }
    }
    return res;
}

module.exports = numOfSubarrays;