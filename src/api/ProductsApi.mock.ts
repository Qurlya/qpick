import type {GetProductsResponse} from "@/interfaces/Product.ts";


export async function getProducts(): Promise<GetProductsResponse> {
    return {
        status: 200,
        products: [
            {
                id: 1,
                img: "/images/model1.png",
                title: "Apple BYZ S8521",
                newPrice: 2927,
                oldPrice: 3527,
                rate: 4.7,
                category: 1,
            },
            {
                id: 2,
                img: "/images/model2.png",
                title: "Apple EarPods",
                newPrice: 2327,
                rate: 4.5,
                category: 1,
            },
            {
                id: 3,
                img: "/images/model3.png",
                title: "Apple EarPods",
                newPrice: 2327,
                rate: 4.5,
                category: 1,
            },
            {
                id: 4,
                img: "/images/model1.png",
                title: "Apple BYZ S8521",
                newPrice: 2927,
                oldPrice: 3527,
                rate: 4.7,
                category: 1,
            },
            {
                id: 5,
                img: "/images/model2.png",
                title: "Apple EarPods",
                newPrice: 2327,
                rate: 4.5,
                category: 1,
            },
            {
                id: 6,
                img: "/images/model3.png",
                title: "Apple EarPods",
                newPrice: 2327,
                rate: 4.5,
                category: 1,
            },
            {
                id: 7,
                img: "/images/model4.png",
                title: "Apple AirPods",
                newPrice: 9527,
                rate: 4.7,
                category: 2,
            },
            {
                id: 8,
                img: "/images/model5.png",
                title: "GERLAX GH-04",
                newPrice: 6527,
                rate: 4.7,
                category: 2,
            },
            {
                id: 9,
                img: "/images/model6.png",
                title: "BOROFONE BO4",
                newPrice: 7527,
                rate: 4.7,
                category: 2,
            },
        ]
    }
}
