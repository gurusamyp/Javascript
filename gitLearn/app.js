const price = 100;

// New logic added in this branch
function getDiscount(userType) {
    if (userType === 'gold') return 0.20; // 20% off
    return 0;
}

const finalPrice = price * (1 - getDiscount('gold'));
console.log(`Discounted Price: $${finalPrice}`);