export interface Category {
    id: number;
    rusName: string;
}

export interface GetCategoriesResponse {
    status: number;
    categories: Category[];
}
