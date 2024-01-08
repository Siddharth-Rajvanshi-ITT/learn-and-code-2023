const {
  reverseNumber,
  formatNumber,
  twoUniqueDigits,
  isValidFourDigitNumber,
  kaprekarConstant,
  kaprekarStep,
  sortDigits,
} = require("./app");

describe("reverseNumber", () => {
  it("should return the correct reverse of a number", () => {
    expect(reverseNumber(1234)).toBe(4321);
  });

  it("should return the correct reverse of a number with multiple digits of the same value", () => {
    expect(reverseNumber(1111)).toBe(1111);
  });
});

describe("formatNumber", () => {
  it("should return a four-digit number with leading zeros", () => {
    expect(formatNumber(123)).toBe("0123");
  });

  it("should return a four-digit number with leading zeros for numbers with multiple digits of the same value", () => {
    expect(formatNumber(1111)).toBe("1111");
  });
});

describe("twoUniqueDigits", () => {
  it("should return false for less than two unique digits", () => {
    expect(twoUniqueDigits(1111)).toBe(false);
  });

  it("should return false for more than or equal to two unique digits", () => {
    expect(twoUniqueDigits(1234)).toBe(true);
  });
});

describe("isValidFourDigitNumber", () => {
  it("should return true for a valid four-digit number", () => {
    expect(isValidFourDigitNumber(1234)).toBe(true);
  });

  it("should return false for a number with more than four digits", () => {
    expect(isValidFourDigitNumber(12345)).toBe(false);
  });

  it("should return true for a number with less than four digits", () => {
    expect(isValidFourDigitNumber(123)).toBe(true);
  });

  it("should return false for a number with repeating digits", () => {
    expect(isValidFourDigitNumber(1111)).toBe(false);
  });
});

describe("kaprekarConstant", () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  it("should reach Kaprekar's constant for a valid four-digit number", () => {
    kaprekarConstant(1234);
    expect(console.log).toHaveBeenCalledWith(
      "Reached Kaprekar's constant: 6174"
    );
  });

  it("should throw an error for an invalid four-digit number", () => {
    kaprekarConstant(1111);
    expect(console.log).toHaveBeenCalledWith(
      "Invalid input. Please provide a valid four-digit number."
    );
  });
});

describe("kaprekarStep", () => {
  it("should return the correct difference for a valid four-digit number", () => {
    expect(kaprekarStep(1234)).toBe(3087);
  });

  it("should throw an error for an invalid four-digit number", () => {
    expect(() => kaprekarStep(1111)).toThrowError(
      "Invalid input. Please provide a valid four-digit number."
    );
  });
});

describe("sortDigits", () => {
  it("should sort a number in descending order", () => {
    expect(sortDigits(1234)).toBe(4321);
  });

  it("should sort a number with leading zeros in descending order", () => {
    expect(sortDigits("001234")).toBe(432100);
  });

  it("should sort a number with multiple digits of the same value in descending order", () => {
    expect(sortDigits(1111)).toBe(1111);
  });
});
