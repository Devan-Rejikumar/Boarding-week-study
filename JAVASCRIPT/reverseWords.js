let str = "hello world";

function reverseEachWord(str) {
  let result = "";
  let word = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word = str[i] + word;
    } else {
      result += word + " ";
      word = "";
    }
  }

  return result + word;
}

console.log(reverseEachWord(str));