function longestPalindrome(str) {
  let start = 0;
  let end = 0;

  function expand(left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  for (let i = 0; i < str.length; i++) {
    let len1 = expand(i, i);       // odd length
    let len2 = expand(i, i + 1);   // even length
    let len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return str.substring(start, end + 1);
}

console.log(longestPalindrome("babad")); // "bab"
console.log(longestPalindrome("cbbd"));  // "bb"
