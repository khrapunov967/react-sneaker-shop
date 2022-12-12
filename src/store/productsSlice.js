import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [
            {
                id: 1, 
                cover: "https://sneaker-street.ru/image/catalog/foto/DQ8343-100/1__w-500__h-500__f-webp.jpg",
                longTitle: "1 Nike Falcon Shoes for men - 2021 edition",
                shortTitle: "Nike Falcon Shoes",
                description: "They agree with reality to high degree of accuracy as tested in experiment after experiment.",
                price: 120,
                category: "FOOTBALL",
                detailedImages: [
                    "https://sneaker-street.ru/image/catalog/foto/DQ8343-100/1__w-0__h-0__f-webp.jpg",
                    "https://sneaker-street.ru/image/catalog/foto/DQ8343-100/2__w-0__h-0__f-webp.jpg",
                    "https://sneaker-street.ru/image/catalog/foto/DQ8343-100/3__w-0__h-0__f-webp.jpg"
                ],
                sizes: [
                    "2.5",
                    "3",
                    "3.5",
                    "4"
                ]
            },
            {
                id: 2, 
                cover: "https://sneaker-street.ru/image/catalog/foto/DQ8343-100/1__w-500__h-500__f-webp.jpg",
                longTitle: "2 Nike Falcon Shoes for men - 2021 edition",
                shortTitle: "Nike Falcon Shoes",
                description: "They agree with reality to high degree of accuracy as tested in experiment after experiment.",
                price: 120,
                category: "RUNNING",
                detailedImages: [
                    "https://sneaker-street.ru/image/catalog/foto/DQ8343-100/1__w-0__h-0__f-webp.jpg",
                    "https://sneaker-street.ru/image/catalog/foto/DQ8343-100/2__w-0__h-0__f-webp.jpg",
                    "https://sneaker-street.ru/image/catalog/foto/DQ8343-100/3__w-0__h-0__f-webp.jpg"
                ],
                sizes: [
                    "2.5",
                    "3",
                    "3.5",
                    "4"
                ]
            },
            {
                id: 3, 
                cover: "https://sneaker-street.ru/image/catalog/foto/DQ8343-100/1__w-500__h-500__f-webp.jpg",
                longTitle: "3 Nike Falcon Shoes for men - 2021 edition",
                shortTitle: "Nike Falcon Shoes",
                description: "They agree with reality to high degree of accuracy as tested in experiment after experiment.",
                price: 120,
                category: "FOOTBALL",
                detailedImages: [
                    "https://sneaker-street.ru/image/catalog/foto/DQ8343-100/1__w-0__h-0__f-webp.jpg",
                    "https://sneaker-street.ru/image/catalog/foto/DQ8343-100/2__w-0__h-0__f-webp.jpg",
                    "https://sneaker-street.ru/image/catalog/foto/DQ8343-100/3__w-0__h-0__f-webp.jpg"
                ],
                sizes: [
                    "2.5",
                    "3",
                    "3.5",
                    "4"
                ]
            },
            {
                id: 4, 
                cover: "https://sneaker-street.ru/image/catalog/foto/DQ8343-100/1__w-500__h-500__f-webp.jpg",
                longTitle: "4 Nike Falcon Shoes for men - 2021 edition",
                shortTitle: "Nike Falcon Shoes",
                description: "They agree with reality to high degree of accuracy as tested in experiment after experiment.",
                price: 120,
                category: "BASKETBALL",
                detailedImages: [
                    "https://sneaker-street.ru/image/catalog/foto/DQ8343-100/1__w-0__h-0__f-webp.jpg",
                    "https://sneaker-street.ru/image/catalog/foto/DQ8343-100/2__w-0__h-0__f-webp.jpg",
                    "https://sneaker-street.ru/image/catalog/foto/DQ8343-100/3__w-0__h-0__f-webp.jpg"
                ],
                sizes: [
                    "2.5",
                    "3",
                    "3.5",
                    "4"
                ]
            }
        ]
    }
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;