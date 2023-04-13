const randomNumber = (range = 10) => Math.floor(Math.random() * range);

const randomItem = (array = []) => array[randomNumber(array.length)];

const randomString = (
    length = 1,
    characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
) => {
    let result = '';
    for (let index = 0; index < length; index++) {
        result += randomItem(characters);
    }
    return result;
};

module.exports = { randomNumber, randomItem, randomString };
