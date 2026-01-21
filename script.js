let formatFullName = (firstName, lastName) => {
  if (
    typeof lastName !== "string" ||
    lastName.trim() === "" ||
    typeof firstName !== "string" ||
    firstName.trim() === ""
  ) {
    return "Invalid name input";
  }
    return `${lastName}, ${firstName}`;
};

let calculateTotalCost = (price, quantity, taxRate) => {
  if (
    typeof price !== "number" ||
    quantity !== "number" ||
    taxRate != "number"
  ) {
    return "invalid input";
  } else {
    return price * quantity * (1 + taxRate);
  }
};

let checEligibility = (age, isEmployed) => {
  if (typeof age !== "number" || isEmployed !== "boolean") {
    return "invalid input";
  }
  if (age <= 18 || isEmployed === false) {
    return "Not Eligible";
  }
  if (age > 18 && isEmployed === false) {
    return "Conditional eligible";
  }
  return "Eligible";
};

calculateTotalCost = (price, quantity, taxRate, discount) => {
  if (
    typeof price !== "number" ||
    typeof quantity !== "number" ||
    taxRate !== "number"
  ) {
    return "Invalid input";
  } else if (discount <= 0) {
    return (price * quantity - discount) * (1 + taxRate);
  } else {
    return price * quantity * (1 + taxRate);
  }
};
