let food = [{
        name: "Burger",
        price: "Rs.89",
        quantity: 5,
        desc: "Bun with cooked patty (could be veg or non veg)"
    },
    {
        name: "Pasta",
        price: "Rs.149",
        quantity: 2,
        desc: "Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking."
    },
    {
        name: "Pizza",
        price: "Rs.400",
        quantity: 6,
        desc: "Pizza is an Italian dish consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven."
    }
]

for (let i = 0; i < food.length; i++) {
    console.log(food[i]);
}
