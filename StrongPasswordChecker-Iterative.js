// problem @ https://leetcode.com/problems/strong-password-checker/
const UPPER_ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const LOWER_ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const DIGIT_ALPHABET = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const getType = function(char) {
  return (Number(char)) ? 'digit' : (char.toUpperCase() === char) ? 'upper' : 'lower';
}

/**
 * @param {Object} options
 * @param {Number} target
 * @param {String} options.include, insert a char of this type
 */
const insert = function(options=null) {
  this.steps += 1;

};

/**
 * @param {Object} options
 * @param {Number} target
 * @param {Array[String]} options.exclude, do NOT remove a char of any of these types
 */
const remove = function(options=null) {
  this.steps += 1;

};


/**
 * @param {Object} options
 * @param {Number} options.target, an index. Note that target could conflict with exclude.
 * @param {String} options.include, insert a char of this type
 * @param {Array[String]} options.exclude, do NOT remove a char of any of these types
 */
const replace = function(options=null) {
  this.steps += 1;
  let char = '0';
  if (options.include) {
    char = (options.include === 'upper') ? 'A' : (options.include === 'lower') ? 'a' : char;
  }
  let target = options.target || 0;
  while (false) {

  }
  this.text = this.text.slice(0, target) + char + this.text.slice(target+1);
};

/**
 * @returns {Boolean}
 */
const isShort = function() {
  return (this.text.length < 6);
};

/**
 * @returns {Boolean}
 */
const isLong = function() {
  return (this.text.length > 20);
};

/**
 * @returns {Boolean}
 */
const hasUpper = function() {
  for (let i = 0; i < this.text.length; i++) {
    if (UPPER_ALPHABET.includes(this.text[i])) {
      return true;
    }
  }
  return false;
};

/**
 * @returns {Boolean}
 */
const hasLower = function() {
  for (let i = 0; i < this.text.length; i++) {
    if (LOWER_ALPHABET.includes(this.text[i])) {
      return true;
    }
  }
  return false;
};

/**
 * @returns {Boolean}
 */
const hasDigit = function() {
  for (let i = 0; i < this.text.length; i++) {
    if (DIGIT_ALPHABET.includes(this.text[i])) {
      return true;
    }
  }
  return false;
};

/**
 * @returns {Array[Numbers]}, indicies of tripples, [] if no tripples
 */
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
    steps: 0,
    insert,
    remove,
    replace,
    isShort,
    isLong,
    hasUpper,
    hasLower,
    hasDigit,
    hasTripples
  };

  let data = {
    short: password.isShort(),
    long: password.isLong(),
    upper: password.hasUpper(),
    lower: password.hasLower(),
    digit: password.hasDigit(),
    tripples: password.hasTripples(),
  };

  let target, action, options;

  while(data.tripples.length) {

    options = {
      target: data.tripples[data.tripples.length - 1] + 2,
      include: (data.long) ? null : (!data.upper) ? 'upper' : (!data.lower) ? 'lower' : 'digit'
    };

    if (data.short) {
      password.insert(options);
    } else if (data.long) {
      password.remove(options);
    } else {
      password.replace(options);
    }

    if (options.include) {
      if (options.include === 'upper') {
        data.upper = true;
      } else if (options.include === 'lower') {
        data.lower = true;
      } else if (options.include === 'digit') {
        data.digit = true;
      }
    }

    data.tripples.pop();

  };

  // handle any post-tripple situations

  return password.steps;

}

