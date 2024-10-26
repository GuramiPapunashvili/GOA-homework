const map = new Map();

map.set("apple", "apple".length);
map.set("banana", "banana".length);
map.set("grape", "grape".length);
map.set("peach", "peach".length);
map.set("orange", "orange".length);

const set = new Set(map.values());

let sum = 0;
map.forEach(length => {
  sum += length;
});

console.log("უნიკალური სიგრძეების ჯამი არის:", sum);


let me = { id: 1, name: "Gurami" };
let bro = { id: 2, name: "Giorgi" };
let sis = { id: 3, name: "Mariami" };
let mom = { id: 4, name: "Tea" };
let dad = { id: 5, name: "Valeri" };

const map2 = new Map();

map2.set(me.id, me);
map2.set(bro.id, bro);
map2.set(sis.id, sis);
map2.set(mom.id, mom);
map2.set(dad.id, dad);

map2.forEach((value, key) => {
  console.log(`ID: ${key}, Name: ${value.name}`);
});


const map3 = new map()

map3.set('Gurami',16)
map3.set('Giorgi',14)
map3.set('Mariami',13)
map3.set('Tea',47)
map3.set('Valeri',49)

function checkName(name){
    if(map3.has(name)){
        return `${name} is in map3`
    } else{
        return `${name} is not in map3`
    }
}


const productMap = new Map();

productMap.set("Laptop", 1000)
productMap.set("Phone", 500)
productMap.set("Tablet", 300)

function increasePrice(product) {
  if (productMap.has(product)) {
    const newPrice = productMap.get(product) * 1.1
    productMap.set(product, newPrice)
  } else{
    return `${product} doesnt exist`
  }
}

