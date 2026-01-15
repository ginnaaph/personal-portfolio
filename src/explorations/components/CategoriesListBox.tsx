import { useLocation, useNavigate } from "react-router-dom"
import {
  Listbox,
  ListboxGroup,
  ListboxGroupLabel,
  ListboxItem,
  ListboxItemIndicator,
} from "@/components/ui/list-box"
import type { Category } from "@/explorations/types"

const categories: Category[] = ["programming", "baking", "art"]

const formatLabel = (category: Category) =>
  category.charAt(0).toUpperCase() + category.slice(1)

export const CategoriesListBox = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const activeCategory =
    categories.find((category) =>
      location.pathname.startsWith(`/explorations/${category}`),
    ) ?? null

  return (
    <Listbox
      aria-label="Exploration categories"
      value={activeCategory ?? undefined}
      onValueChange={(next) => {
        if (!next) return
        navigate(`/explorations/${next}`)
      }}
      className="w-full"
    >
      <ListboxGroup>
        <ListboxGroupLabel>Categories</ListboxGroupLabel>
        {categories.map((category) => (
          <ListboxItem key={category} value={category} textValue={category}>
            <span className="font-medium text-main">{formatLabel(category)}</span>
            <ListboxItemIndicator className="text-main" />
          </ListboxItem>
        ))}
      </ListboxGroup>
    </Listbox>
  )
}
