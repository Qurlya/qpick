import type {GetCategoriesResponse} from "@/interfaces/Category.ts";


export async function getCategories(): Promise<GetCategoriesResponse> {
    return {
        status: 200,
        categories: [
            {
                id: 1,
                rusName: "Наушники"
            },
            {
                id: 2,
                rusName: "Беспроводные наушники"
            }
        ]
    };
}
