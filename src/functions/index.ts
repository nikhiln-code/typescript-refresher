function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 0.1; // 10% tax for income less than $10,000
  }

  return income * 0.2; // 20% tax for income $10,000 or more
}

calculateTax(5000, 2022); // returns 500
