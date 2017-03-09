let consoleRec = function(array, cnt) {
    let arrayLength = array.length;

    console.log(array[cnt]);
    cnt++;

    if(arrayLength > cnt) {
        consoleRec(array, cnt);
    }
};

module.exports = { consoleRec };