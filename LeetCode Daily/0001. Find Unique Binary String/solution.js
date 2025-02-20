const findDifferentBinaryString = function (nums) {
    let new_nums = [];
    nums.forEach((num) => {
        new_nums.push(parseInt(num, 2));
    });

    for (let i = 0; i < Math.pow(2, nums[0].length); i++) {
        if (!new_nums.includes(i)) {
            return i.toString(2).padStart(nums[0].length, "0");
        }
    }
};

module.exports = findDifferentBinaryString;