import { useLocation, useNavigate } from "react-router-dom"
import {
  Listbox,
  ListboxGroup,
  ListboxGroupLabel,
  ListboxItem,
  ListboxItemIndicator,
} from "@/components/ui/list-box"
type Category = "programming" | "baking" | "art"

type CategoryOption = {
  value: "all" | Category
  label: string
  to: string
}

const categories: CategoryOption[] = [
  { value: "all", label: "All categories", to: "/explorations" },
  { value: "programming", label: "Programming", to: "/explorations/programming" },
  { value: "baking", label: "Baking", to: "/explorations/baking" },
  { value: "art", label: "Art", to: "/explorations/art" },
]

export const CategoriesListBox = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const activeCategory =
    categories.find((category) =>
      category.value === "all"
        ? location.pathname === "/explorations"
        : location.pathname.startsWith(category.to),
    )?.value ?? null

  return (
    <Listbox
      aria-label="Exploration categories"
      value={activeCategory ?? undefined}
      onValueChange={(next) => {
        if (!next) return
        const target = categories.find((category) => category.value === next)
        if (target) navigate(target.to)
      }}
      className="w-full"
    >
      <ListboxGroup>
        <ListboxGroupLabel>Categories</ListboxGroupLabel>
        {categories.map((category) => (
          <ListboxItem key={category.value} value={category.value}>
            <span className="font-medium text-main">{category.label}</span>
            <ListboxItemIndicator className="text-main" />
          </ListboxItem>
        ))}
      </ListboxGroup>
    </Listbox>
  )
}
