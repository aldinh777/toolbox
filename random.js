export const randomNumber = (range = 10) => parseInt(Math.random() * range)

export const randomItem = (array = []) => array[randomNumber(array.length)]

export const randomString = (
    length = 1,
    characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
) => {
    let result = ''
    for (let index = 0; index < length; index++) {
        result += randomItem(characters)
    }
    return result
}
