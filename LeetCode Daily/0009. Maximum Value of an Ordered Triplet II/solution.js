var maximumTripletValue = function(nums) {
    let n = nums.length;
    if (n < 3) return 0;

    let prefix_max = new Array(n).fill(0);
    prefix_max[0] = nums[0];
    for (let i = 1; i < n ; i++) {
        prefix_max[i] = Math.max(prefix_max[i - 1], nums[i]);
    }

    let suffix_max = new Array(n).fill(0);
    suffix_max[n - 1] = nums[n - 1];
    for (let i = n - 2; i >= 0 ; i--) {
        suffix_max[i] = Math.max(suffix_max[i + 1], nums[i]);
    }

    let max = 0;
    for (let j = 1; j < n - 1 ; j++) {
       max = Math.max(max, (prefix_max[j - 1] - nums[j]) * suffix_max[j + 1]);
    }

    return max;
};

module.export = maximumTripletValue;