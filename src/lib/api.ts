import { Ad, Category } from '@/types';
import adsData from '@/data/ads.json';
import categoriesData from '@/data/categories.json';
import fieldsData from '@/data/categoryFields.json';

export async function getAds(): Promise<Ad[]> {
    return Promise.resolve(adsData as unknown as Ad[]);
}

export async function getCategories(): Promise<Category[]> {
    return Promise.resolve(categoriesData as unknown as Category[]);
}

export async function getCategoryFields(categoryId: number): Promise<any> {
    const fields = (fieldsData as any)[categoryId.toString()];
    return Promise.resolve(fields || null);
}
