const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers (sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        rl.question("Give me a num", (response) => {
            parseInt(response) + sum;
            console.log(newSum);
            rl.close();
        }
        // rl.close()
        )
        debugger;
    } else {
        return addNumbers (sum, numsLeft - 1, completionCallback)
    }

}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));