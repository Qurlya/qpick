export interface Product {
    id: number;
    img: string;
    title: string;
    newPrice: number;
    oldPrice?: number;
    rate?: number;
    category?: number;
}

export interface GetProductsResponse {
    status: number;
    products: Product[];
}
