// problem @ https://leetcode.com/problems/strong-password-checker/

/**
 * @param {Object} options
 * @param {String} options.include, insert a char of this type
 */
const insert = function(options=null) {

};

/**
 * @param {Object} options
 * @param {Array[String]} options.exclude, do NOT remove a char of any of these types
 */
const remove = function(options=null) {

};

/**
 * @param {Object} options
 * @param {String} options.include, insert a char of this type
 * @param {Array[String]} options.exclude, do NOT remove a char of any of these types
 */
const replace = function(options=null) {

};

const isShort = function() {
  return (this.text.length < 6);
};

const isLong = function() {
  return (this.text.length > 20);
};

const UPPER_ALPHABET = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y ,Z];
const hasUpper = function() {
  for (let i = 0; i < this.text.length; i++) {
    if (UPPER_ALPHABET.includes(this.text[i])) {
      return true;
    }
  }
  return false;
};

const LOWER_ALPHABET = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
const hasLower = function() {
  for (let i = 0; i < this.text.length; i++) {
    if (LOWER_ALPHABET.includes(this.text[i])) {
      return true;
    }
  }
  return false;
};

const hasDigit = function() {
  for (let i = 0; i < this.text.length; i++) {
    if (Number(this.text[i])) {
      return true;
    }
  }
  return false;
};

const hasTripples = function() {
  // keep track of a list of indicies
  // for each char in text:
  //  if the next two chars are identical:
  //    add the current index to the list
  //    skip forward
  let indicies = [];
  let i = 0;
  while (i < this.text.length) {
    if (this.text[i] === this.text[i+1] && this.text[i+1] === this.text[i+2]) {
      indicies.push(i);
      i += 3;
    } else {
      i += 1;
    }
  }
  return indicies;
}

/**
 * @param {string} password
 * @return {number}
 */
const strongPasswordChecker = function(password) {
  password = {
    text: password,
    insert,
    remove,
    replace
    isShort,
    isLong,
    hasUpper,
    hasLower,
    hasDigit,
    hasTripples
  };



}
