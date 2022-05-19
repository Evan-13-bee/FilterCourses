let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

function filterCourses(range, courses) {
  let [from, to] = range
  
  function filterFunction(value) {
    let [priceFrom, priceTo] = value.prices

    if (from && to) {
      return (priceFrom <= to)
    }
    else if (from && !to) {
      return (priceTo >= from) || (priceTo ? (priceTo <= priceFrom) : true)
    }
    else if (!from && to) {
      return (priceFrom <= to)
    }
  }
  return courses.filter(filterFunction)
}