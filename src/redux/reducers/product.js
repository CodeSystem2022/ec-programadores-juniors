// productReducer.js
const initialState = {
    products: [
        {
            id: 1,
            name: "Zapatilla Saucony Axon 3",
            price: 70000,
            img: './img/prod-test.jpg'
        },
        {
            id: 2,
            name: "Zapatilla Saucony Axon 3",
            price: 80000,
            img: './img/prod-test2.jpg'
        },
        {
            id: 3,
            name: "Zapatilla Saucony Axon 3",
            price: 90000,
            img: './img/prod-test.jpg'
        }
    ]
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        // Puedes agregar más casos para manejar acciones relacionadas con los productos
        default:
            return state;
    }
};

export default productReducer;
