function isPalindrome(x: number): boolean {
  let reversed = x.toString().split('').reverse().join('');
  return x.toString() === reversed;
}

function isPalindrome(x: number): boolean {
  let reversedStr = '';
  let xStr = x.toString();

  for (let i of xStr) {
    reversedStr = i + reversedStr;
  }

  if (reversedStr === xStr) {
    return true;
  }
  return false;
}

function isPalindrome(x: number): boolean {
  let reversedStr = '';
  let xStr = x.toString().split('');

  xStr.forEach((i) => {
    reversedStr = i + reversedStr;
  });

  if (reversedStr === xStr.join('')) {
    return true;
  }
  return false;
}
