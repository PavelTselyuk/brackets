module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) return false;
  let brackets = {}
  for (let i = 0; i < bracketsConfig.length; i++) {
    brackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  let arrFromGivenStr = str.split('');
  let index = 0;

  for (index; index < arrFromGivenStr.length; index++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (arrFromGivenStr[index] == bracketsConfig[j][0] && arrFromGivenStr[index + 1] == bracketsConfig[j][1]) {
        arrFromGivenStr.splice(index, 2);
        index = -1;
        continue;
      }
    }
  }
  console.log(arrFromGivenStr);
  return arrFromGivenStr.length > 0 ? false : true;
}
