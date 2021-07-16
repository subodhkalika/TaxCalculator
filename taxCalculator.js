var taxCalculator  = (userIncome, deduction, taxOffset) => {
    var income =  userIncome - deduction;
    var taxPercentage = 0;
    if (income <= 18200) {
        tax = 0;
    } else if (income > 18200 && income <= 45000) {
        tax = (19/100 * (income - 18200))
    } else if (income > 45000 && income <= 120000) {
        tax = (19/100 * (income - 18200)) + (32.5/100 * (income - 45000))
    } else if (income > 120000 && income <= 180000) {
        tax = (19/100 * (income - 18200)) + (32.5/100 * (income - 45000)) + (37/100 * (income - 120000))
    } else {
        tax = (19/100 * (income - 18200)) + (32.5/100 * (income - 45000)) + (37/100 * (income - 120000)) + (45/100 * (income - 180000)) 
    }
    return tax - taxOffset;
}
