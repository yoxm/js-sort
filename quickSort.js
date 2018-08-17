const quickSort = arr => {
  if (arr.length <= 1) return arr;
  let pivotIndex = Math.floor(arr.length - 1);
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
};

console.log(quickSort([3, 4, 5, 23, 2323, 434, 31, 32]));
