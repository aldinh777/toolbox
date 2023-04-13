const pushNonExists = (array, item) => {
    if (array.indexOf(item) === -1) {
        array.push(item);
    }
};

const removeFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
};

const swapItem = (array, index1, index2) => {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};

module.exports = { pushNonExists, removeFromArray, swapItem };
