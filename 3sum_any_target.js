function findLast(ray, num) {
    return ray.find(element => element == num);
}

function twoSum(ray, target, origRem, idx) {
    let cur = 0;
    let found_1 = null;
    let found_2 = null;
    let finalS = [];

    for (let i = 0; i < ray.length; i++) {
        if (idx == i)
            break;

        cur = target - ray[i];
        found_1 = findLast(ray, cur);
        found_2 = findLast(ray, ray[i]);
        let nRay = [...new Set([found_1, found_2, origRem])];

        if (target == cur + ray[i] && found_1 && found_2 && nRay.length == 3) {
            finalS = nRay.sort(function(a, b) {
                return a - b;
            });
        }
    }
    return finalS;
}

let threeSumWithTarget = (nums, tar) => {
    let tSolutions = [];
    let remainder = 0;
    let nTargets = [];
    let tFinal = [];

    for (let i = 0; i < nums.length; i++) {
        remainder = tar - nums[i];
        nTargets.push(remainder);
    }

    for (let j = 0; j < nums.length; j++) {
        tSolutions.push(twoSum(nums, nTargets[j], nums[j], j));
    }

    for (let k = 0; k < tSolutions.length; k++) {
        if (tSolutions[k].length > 0) {
            tFinal.push(tSolutions[k]);
        }
    }

    const map = new Map();
	tFinal.forEach((item) => map.set(item.join(), item));
	console.log(tar, Array.from(map.values()));
}


threeSumWithTarget([-1, 0, -4, 2, -2, 1, 5, 3, 9], 9);
threeSumWithTarget([-1, 0, 2, -2, 5, 6, 1], 5);
threeSumWithTarget([2, 3, 5, -2, 0, 5, 7, 12], 17);
threeSumWithTarget([3, -2, 4, 1, 2, 5, -3, 0], 7);