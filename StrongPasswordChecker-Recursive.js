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
  return (this.length < 6);
};

const isLong = function() {
  return (this.length > 20);
};

const UPPER_ALPHABET = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y ,Z];
const hasUpper = function() {
  for (let i = 0; i < this.length; i++) {
    if (UPPER_ALPHABET.includes(this[i])) {
      return true;
    }
  }
  return false;
};

const LOWER_ALPHABET = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
const hasLower = function() {
  for (let i = 0; i < this.length; i++) {
    if (LOWER_ALPHABET.includes(this[i])) {
      return true;
    }
  }
  return false;
};

const hasDigit = function() {
  for (let i = 0; i < this.length; i++) {
    if (Number(this[i])) {
      return true;
    }
  }
  return false;
};

/**
 * @param {string} password
 * @return {number}
 */
const strongPasswordChecker = function(password) {
  
  password.prototype.insert = insert;
  password.prototype.remove = remove;
  password.prototype.replace = replace;
  password.prototype.isShort = isShort;
  password.prototype.isLong = isLong;
  password.prototype.hasUpper = hasUpper;
  password.prototype.hasLower = hasLower;
  password.prototype.hasDigit = hasDigit;

  let max = 0;
  var iter = function(password, steps = 0) {

  };
  iter(password);
  return max;
}
