// let data = 117;

// let count = 5;

// let pageNumber = 24;

// let pageData = count * pageNumber;

// console.log(pageData, pageData - (count - 1));
// console.log(117 / 5);

// the number of items to display at a time,
//the number of pages corresponding to that number
//

let defaultitemsAtTime = 10;
let dataCount = 129;

let possiblePages = Math.floor(dataCount / defaultitemsAtTime);

console.log("possible pages", possiblePages);
let dataCountToArray = new Array(dataCount);

for (let i = 0; i <= possiblePages; i++) {
  let lowerLimit = defaultitemsAtTime * i + 1;

  let upperLimit = defaultitemsAtTime * (i + 1);
  if (upperLimit > dataCount) upperLimit = dataCount;
  console.log(lowerLimit, "upper limit", upperLimit);
}
///  always want to have the current active page
// and any other two pages side by side
// making  5

// the button will be displayed using
