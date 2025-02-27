var checkIfExist = function (arr) {
    if (arr.length <= 1) {
        return false;
    }
    let hashTable = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (hashTable.has(arr[i] * 2) || (hashTable.has(arr[i] / 2) && arr[i] % 2 === 0)) {
            return true;
        }
        hashTable.set(arr[i]);
    }
    return false;
};

module.exports = checkIfExist;