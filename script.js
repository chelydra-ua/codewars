function getMiddle(s) {
  const arr = s.split("");
  let newArr = [];
  if (arr.length % 2 === 0) {
    newArr = [arr[arr.length / 2 - 1], arr[arr.length / 2]].join("");
    return newArr;
  } else {
    newArr = arr[(arr.length + 1) / 2 - 1];
    return newArr;
  }
}
