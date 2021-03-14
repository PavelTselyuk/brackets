module.exports = function check(str, bracketsConfig) {
  // if (str.length % 2 != 0) return false;
  let brackets = {  }
  for(let i=0; i<bracketsConfig.length; i++){
    brackets[bracketsConfig[i][0]]=bracketsConfig[i][1];
  }
  console.log(brackets);
  let arrFromGivenStr = str.split('');
  let index = 0;

  for (index; index < arrFromGivenStr.length;) {
    if (arrOfBrackets.indexOf(arrFromGivenStr[index]) > -1) {
      if (arrFromGivenStr[index + 1] == brackets[arrFromGivenStr[index]]) {
        arrFromGivenStr.splice(index, 2);
        index = 0;
        continue;
      }
    } else {
      if (arrFromGivenStr[index] == arrFromGivenStr[index + 1]) {
        arrFromGivenStr.splice(index, 2);
        index = 0;
        continue;
      }
    }
    index++;
  }
  console.log(arrFromGivenStr);
  return arrFromGivenStr.length > 0 ? false : true;
}
