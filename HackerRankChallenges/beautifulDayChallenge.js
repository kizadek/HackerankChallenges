exports.beautifulDayChallenge = (i, j, k) => {
  let beautifulDay = 0;
  const beautifulDayArray = [];
  let rev = 0;
  let final = 0;
  while (i <= j) {
    console.log(i);
    rev = reversNumber(i);
    final = (i - rev) / k;
    let main = final.toString().split('.');
    if (main[1] === undefined) {
      beautifulDay++;
      beautifulDayArray.push(i);
    }
    i++;
  }
  console.log(`you have ${beautifulDay} coming up ${beautifulDayArray} 😊💕`);
};

// Function to reverse Number
const reversNumber = (number) => {
  let r = number.toString().split('').reverse().join('');
  return Math.sign(number) * parseInt(r);
};
