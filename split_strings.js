function solution(str) {
  if (str === "") return [];
  str = str.split("");
  let res = [];
  for (let i = 0; i < str.length; i += 2) {
    str[i + 1] ? res.push(str[i] + str[i + 1]) : res.push(str[i] + "_");
  }
  return res;
}

let test = "abcdefg";

console.log(solution(test));
