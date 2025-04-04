var maximumTripletValue = function(nums) {
    let max = 0;
    
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let current = (nums[i] - nums[j]) * nums[k];
                max = Math.max(current, max);
            }
        }
    }
    
    return max > 0 ? max : 0;
};

module.export = maximumTripletValue;