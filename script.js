
const foods = [
    {
        name: "Chicken Wings",
        price: "$9.99",
        image: "https://media.istockphoto.com/id/1285462667/photo/fried-chicken-wings-with-sweet-chili-sauce-on-white-paper.jpg?s=612x612&w=0&k=20&c=pQgXFNW-BUEi5lT_b6sahe7y3OUoOtA0CQ89yvfvBas="
    },
    {
        name: "Fried Chicken",
        price: "$9.99",
        image: "https://media.istockphoto.com/id/494788722/photo/fried-chicken.jpg?s=612x612&w=0&k=20&c=J4YIFgxQJ0whwEA6Uko7JtX6hqFtDV43UB7i_erd4Xc="
    },
    {
        name: "Gyro",
        price: "$9.99",
        image: "https://media.istockphoto.com/id/486037149/photo/homemade-meat-gyro-with-french-fries.jpg?s=612x612&w=0&k=20&c=TxUMB-vSOqNxRT8W18kssXL4zCZuiIjKQ17NagV63us="
    },
    {
        name: "Cheeseburger",
        price: "$9.99",
        image: "https://media.istockphoto.com/id/2157436773/photo/cafeteria-double-beef-burger-gourmet.jpg?s=612x612&w=0&k=20&c=fVR4dYAPYXvaNd5xL3t7u4CUP5wYkO_WKyRXbv1njgU="
    }
]

const menu = document.getElementById("menu");

foods.forEach(food => {
    const card = document.createElement("div")
    card.className = "food-card"

    card.innerHTML = `
        <img src="${food.image}" alt="${food.name}">
        <div class="menu-info">
            <h2>${food.name}</h2>
            <p class="price">${food.price}</p>
        </div>
    `;

    menu.appendChild(card);
});