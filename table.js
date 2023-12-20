var food_items = ["Burger", "Fries", "Burger", "Burger","Fries"];
var food_items2 = ["Burger1", "Burger", "Burger2", "Fries"];


var updated = food_items.map(function (food, index) {
    return "Fries";
});


var filtered = food_items.filter(function (food, index) {
    return food === "Burger";
});

var find = food_items2.find(function(food,index) {
    return food.includes("Burger2"); // Burger4
});

var findIndex = food_items2.findIndex(function (food, index) {
    return food.indexOf("Burger")
});

console.log(find);
console.log(findIndex);
console.log(filtered);
console.log(updated);