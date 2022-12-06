import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [
            {
                id: 1, 
                cover: "https://cdn.retailrocket.ru/api/1.0/partner/55379e776636b417f47acd68/item/1117554/picture/?format=png&width=250&height=250&scale=both",
                longTitle: "1 Nike Falcon Shoes for men - 2021 edition",
                shortTitle: "Nike Falcon Shoes",
                description: "They agree with reality to high degree of accuracy as tested in experiment after experiment.",
                price: 120,
                detailedImages: [
                    "https://sneakerhead.ru/upload/resize_cache/iblock/8a8/582_874_1/8a8e88778f86ddbef1c12ec2b1594772.jpg",
                    "https://sneakerhead.ru/upload/resize_cache/iblock/363/582_874_1/3634e88ed10e6ead0fb6275d5d952913.jpg",
                    "https://sneakerhead.ru/upload/resize_cache/iblock/747/582_874_1/747a78e18a29e105f91fe7980cc27dcd.jpg"
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
                cover: "https://cdn.retailrocket.ru/api/1.0/partner/55379e776636b417f47acd68/item/1117554/picture/?format=png&width=250&height=250&scale=both",
                longTitle: "2 Nike Falcon Shoes for men - 2021 edition",
                shortTitle: "Nike Falcon Shoes",
                description: "They agree with reality to high degree of accuracy as tested in experiment after experiment.",
                price: 120,
                detailedImages: [
                    "https://sneakerhead.ru/upload/resize_cache/iblock/8a8/582_874_1/8a8e88778f86ddbef1c12ec2b1594772.jpg",
                    "https://sneakerhead.ru/upload/resize_cache/iblock/363/582_874_1/3634e88ed10e6ead0fb6275d5d952913.jpg",
                    "https://sneakerhead.ru/upload/resize_cache/iblock/747/582_874_1/747a78e18a29e105f91fe7980cc27dcd.jpg"
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
                cover: "https://cdn.retailrocket.ru/api/1.0/partner/55379e776636b417f47acd68/item/1117554/picture/?format=png&width=250&height=250&scale=both",
                longTitle: "3 Nike Falcon Shoes for men - 2021 edition",
                shortTitle: "Nike Falcon Shoes",
                description: "They agree with reality to high degree of accuracy as tested in experiment after experiment.",
                price: 120,
                detailedImages: [
                    "https://sneakerhead.ru/upload/resize_cache/iblock/8a8/582_874_1/8a8e88778f86ddbef1c12ec2b1594772.jpg",
                    "https://sneakerhead.ru/upload/resize_cache/iblock/363/582_874_1/3634e88ed10e6ead0fb6275d5d952913.jpg",
                    "https://sneakerhead.ru/upload/resize_cache/iblock/747/582_874_1/747a78e18a29e105f91fe7980cc27dcd.jpg"
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
                cover: "https://cdn.retailrocket.ru/api/1.0/partner/55379e776636b417f47acd68/item/1117554/picture/?format=png&width=250&height=250&scale=both",
                longTitle: "4 Nike Falcon Shoes for men - 2021 edition",
                shortTitle: "Nike Falcon Shoes",
                description: "They agree with reality to high degree of accuracy as tested in experiment after experiment.",
                price: 120,
                detailedImages: [
                    "https://sneakerhead.ru/upload/resize_cache/iblock/8a8/582_874_1/8a8e88778f86ddbef1c12ec2b1594772.jpg",
                    "https://sneakerhead.ru/upload/resize_cache/iblock/363/582_874_1/3634e88ed10e6ead0fb6275d5d952913.jpg",
                    "https://sneakerhead.ru/upload/resize_cache/iblock/747/582_874_1/747a78e18a29e105f91fe7980cc27dcd.jpg"
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