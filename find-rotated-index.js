function findRotatedIndex(array, num) {
    var pivot = findPivot(array)
    if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
      return binarySearch(array, num, 0, pivot - 1);
    } else {
      return binarySearch(array, num, pivot, array.length - 1);
    }
  }

  function binarySearch(array, num, start, end) {
    if (array.length === 0) return -1;
    if (num < array[start] || num > array[end]) return -1;
  
    while (start <= end) {
      var mid = Math.floor((start + end) / 2);
      if (array[mid] === num) {
        return mid;
      } else if (num < array[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
  }
  
module.exports = findRotatedIndex