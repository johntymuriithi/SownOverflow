export interface Category {
    category_id: number
    category_name: string | null,
    category_label: string | null
}

export interface Categories {
    categories: Category[],
    status: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: string | null
}