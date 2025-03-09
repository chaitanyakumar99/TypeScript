const apple: { color: string, price: number, discount: boolean } = {
    color: 'red',
    price: 55,
    discount: true
}

apple.color = "yellow"
apple.price = 100
apple.discount = false

console.log("fruit color:", apple.color);
console.log("fruit price:", apple.price);
console.log("fruit discount:", apple.discount);     