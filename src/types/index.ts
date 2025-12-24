export interface Category {
    id: number;
    externalID: string;
    name: string;
    slug: string;
    level: number;
    children?: Category[];
}

export interface Ad {
    id: string;
    title: string;
    price: number;
    currency: string;
    imageUrl: string;
    location: string;
    categoryId: number;
    categorySlug: string;
    createdAt: string;
    attributes: Record<string, string | number>;
}

export interface CategoryFieldChoice {
    id: number;
    value: string;
    label: string;
    label_l1?: string;
    seoSlug: {
        en: string;
        ar: string;
    };
}

export interface CategoryField {
    id: number;
    name: string;
    attribute: string;
    valueType: 'float' | 'enum' | 'string' | 'bool';
    isMandatory: boolean;
    choices?: CategoryFieldChoice[];
    filterType?: string;
}
