const phones = [
    { name: 'samsung', price: 45000, camera: 10, storage: 120 },
    { name: 'xiaomi', price: 34000, camera: 8, storage: 20 },
    { name: 'iphone', price: 120000, camera: 12, storage: 24 },
    { name: 'lg', price: 20000, camera: 7, storage: 10 },
    { name: 'motorola', price: 47000, camera: 6, storage: 30 },
    { name: 'oneplus', price: 65000, camera: 50, storage: 60 },
    { name: 'tecno', price: 9500, camera: 4, storage: 10 },
    { name: 'lava', price: 75000, camera: 10, storage: 120 },
];

let cheapest = phones[0]
for (const phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone
    }
}
console.log(cheapest);
