function mergeIntervals(intervals) {
  if (!intervals.length) return [];

  intervals.sort((a, b) => a[0] - b[0]);
  let merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let prev = merged[merged.length - 1];
    let curr = intervals[i];

    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]); // Merge them
    } else {
      merged.push(curr);
    }
  }

  return merged;
}

module.exports = mergeIntervals;

// Example test case
// const intervals = [
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [15, 18],
// ];
// console.log("Merged Intervals:", mergeIntervals(intervals));

// function mergeIntervals(intervals) {
//   if (!intervals.length) return [];

//   intervals.sort((a, b) => a[0] - b[0]);
//   let merged = [intervals[0]];

//   for (let i = 1; i < intervals.length; i++) {
//     let prev = merged[merged.length - 1];
//     let current = intervals[i];

//     if (current[0] <= prev[1]) {
//       prev[1] = Math.max(prev[1], current[1]);
//     } else {
//       merged.push(current);
//     }
//   }

//   return merged;
// }

// module.exports = mergeIntervals;
