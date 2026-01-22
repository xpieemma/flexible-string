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
    typeof quantity !== "number" ||
    typeof taxRate !== "number"
  ) {
    return "invalid input";
  } 
    return price * quantity * (1 + taxRate);

};

let checEligibility = (age, isEmployed) => {
  if (typeof age !== "number" || isEmployed !== "boolean") {
    return "invalid input";
  }
  if (age <= 18) {
    return "Not Eligible";
  }
  if (!isEmployed) {
    return "Conditional eligible";
  }
  return "Eligible";
};

calculateTotalCost = (price, quantity, taxRate, discount) => {
  if (
    typeof price !== "number" ||
    typeof quantity !== "number" ||
    typeof taxRate !== "number"
  ) {
    return "Invalid input";
  }
  let subtotal = price * quantity;
  if (discount > 0){
    subtotal -= discount;
  }
  return subtotal * (1+taxRate);
};
