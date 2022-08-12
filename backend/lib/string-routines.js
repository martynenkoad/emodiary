/**
 * Check whether the given string contains only letters.
 * @param string
 * @returns {boolean}
 */
const onlyLetters = (string) => /^[a-zA-Z]+$/.test(string)

/**
 * Replace spaces from the given string.
 * @param string
 * @returns {*}
 */
const replaceSpaces = (string) => string.replace(/\s+/g, '')

module.exports = {
  onlyLetters,
  replaceSpaces
}
