const transpose = function(matrix) {
  const result = [];
  
  for (let i = 0; i < matrix[0].length; i++) {
    result.push([]);
  }
  for (let j = 0; j < matrix.length; j++) {
    for (let k = 0; k < matrix[j].length; k++) {
      result[k].push(matrix[j][k]);
    }
  }
  return result;
};

const wordSearch = (letters, word) => {
  if (letters.length < 1) {
    return false;
  }
  const upperCaseWord = word.toUpperCase();
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(upperCaseWord)) {
      return true;
    }
  }

  const transposed = transpose(letters);
  const verticalJoin = transposed.map(ls => ls.join(''));
  for (const l of verticalJoin) {
    if (l.includes(upperCaseWord)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;