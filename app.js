let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

const nameGenerator = (arr1, arr2, arr3) => {
    let namesList = "";
    for (let i in arr1) {
        for (let j in arr2) {
            for (let k in arr3) {
                namesList += arr1[i] + arr2[j] + arr3[k] + ".com \n";
            }
        }
    }
    return namesList;
};
