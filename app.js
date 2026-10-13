const fs = require("fs");
const { getProductCount } = require("./utils");

const data = fs.readFileSync("./data/products.json", "utf-8");
const products = JSON.parse(data);

console.log(products);
console.log("Количество товаров: ", getProductCount(products));