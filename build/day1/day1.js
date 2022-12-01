// Day 1
// Part 1 - Find the elf carrying the most calories
// Part 2 - How many calories are the top three elves carrying in total?
import fs from 'fs';
import path from 'path';
import readline from 'readline';
const dir = "./src/day1/";
const filename = "day1-input.txt";
const text = readline.createInterface({
    input: fs.createReadStream(path.join(dir, filename))
});
let elfCalories = [];
let calorieSum = 0;
text.on('line', line => {
    if (line === '') {
        elfCalories.push(calorieSum);
        calorieSum = 0;
    }
    else {
        calorieSum += parseInt(line);
    }
});
text.on('close', () => {
    elfCalories.sort().reverse();
    const topCalories = elfCalories[0];
    const getTopThreeCalorieTotal = () => {
        return elfCalories
            .slice(0, 3)
            .reduce((partialSum, val) => partialSum += val);
    };
    console.log(`❄️  ~ The elf with the most calories🍕 has ${topCalories} ~ ☃️`);
    console.log(`❄️  ~ The top three elves are carrrying a total of ${getTopThreeCalorieTotal()} calories🍕 ~ ☃️`);
});
