function mergeSort(arr) {
  let len = arr.length;
  if (len < 2) {
    return arr;
  }

  let mid = Math.floor(len / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let res = [];
  console.time("归并排序耗时:");
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }

  while (left.length) {
    res.push(left.shift());
  }

  while (right.length) {
    res.push(right.shift());
  }
  console.log(new Date().getTime());
  console.timeEnd("归并排序耗时:");
  return res;
}

let arr = [3, 44, 2, 23, 43, 23, 546, 545, 554, 23, 0, 43, 5];

console.log(mergeSort(arr));
