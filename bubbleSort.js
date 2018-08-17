function bubbleSort(arr) {
  console.time("冒泡程序1耗时");
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  console.timeEnd("冒泡程序1耗时");
  return arr;
}

function bubbleSort1(arr) {
  console.time("冒泡程序2耗时");
  let len = arr.length - 1;
  while (len > 0) {
    let pos = 0;
    for (let i = 0; i < len; i++) {
      if (arr[i] > arr[i + 1]) {
        pos = i;
        let tmp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = tmp;
      }
    }
    len = pos;
  }
  console.timeEnd("冒泡程序2耗时");
  return arr;
}

function bubbleSort2(arr) {
  let low = 0;
  let high = arr.length - 1;
  let tmp, j;
  console.time("冒泡程序3耗时");
  while (low < high) {
    for (j = low; j < high; ++j) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
    --high;
    for (j = high; j > low; --j) {
      if (arr[j] < arr[j - 1]) {
        tmp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
      }
    }
    ++low;
  }
  console.timeEnd("冒泡程序3耗时");
  return arr;
}

let arr1 = [2, 9, 3, 5, 6, 2, 12, 543, 5436];
console.log(bubbleSort(arr1));
let arr2 = [2, 9, 3, 5, 6, 2, 12, 543, 5436];
console.log(bubbleSort1(arr2));
let arr3 = [2, 9, 3, 5, 6, 2, 12, 543, 5436];
console.log(bubbleSort2(arr3));
