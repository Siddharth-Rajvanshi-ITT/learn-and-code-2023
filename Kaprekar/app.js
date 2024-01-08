const reverseNumber = (number) => {
  return parseInt(String(number).split("").reverse().join(""));
};

const twoUniqueDigits = (number) => {
  const uniqueDigit = new Set(formatNumber(String(number)));
  return uniqueDigit.size >= 2;
};

const sortDigits = (number) => {
  number = number.toString();
  const sortedDigits = number.split("").sort((a, b) => b - a);
  return parseInt(sortedDigits.join(""));
};

const isValidFourDigitNumber = (number) => {
  return number <= 9999 && twoUniqueDigits(number);
};

const formatNumber = (number) => {
  return number.toString().padStart(4, "0");
};

const kaprekarStep = (number) => {
  const formatedNumber = formatNumber(number);
  const descending = sortDigits(formatedNumber);
  const ascending = reverseNumber(descending);
  const difference = descending - ascending;

  console.log(`${descending} - ${ascending} = ${difference}`);

  if (!isValidFourDigitNumber(number))
    throw new Error("Invalid input. Please provide a valid four-digit number.");

  return difference;
};

const kaprekarConstant = (initialNumber) => {
  if (!isValidFourDigitNumber(initialNumber)) {
    console.log("Invalid input. Please provide a valid four-digit number.");
    return;
  }

  let difference = kaprekarStep(initialNumber);

  while (difference !== 6174) {
    difference = kaprekarStep(difference);
  }

  console.log("Reached Kaprekar's constant: 6174");
};

kaprekarConstant(111);

module.exports = {
  reverseNumber,
  twoUniqueDigits,
  sortDigits,
  isValidFourDigitNumber,
  formatNumber,
  kaprekarStep,
  kaprekarConstant,
};
