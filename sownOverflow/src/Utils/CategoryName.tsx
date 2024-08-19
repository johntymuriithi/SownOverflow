// function to ge the category name given the id of the category

import { getCategories } from "@/Features/Categories/categoriesSlice"
import { useAppSelector } from "@/Types/hooksTypes"

export const useCategoryGetter = (id: number): string => {
    const categories = useAppSelector(getCategories).categories
    const category = categories.find(category => category.category_id === id)
    return category?.category_name || "";
}
