function storage(input) {
    let storage = new Map();

    for (const items of input) {
        let [product, value] = items.split(" ");
        value = Number(value);

        if (storage.has(product)) {
            value += storage.get(product);
        }

        storage.set(product, value);
    }

    for (const [product, value] of storage) {
        console.log(`${product} -> ${value}`);
    }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
