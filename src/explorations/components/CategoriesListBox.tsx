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
  { value: "art", label: "Art", to: "/explorations/art" },
  { value: "baking", label: "Baking", to: "/explorations/baking" },
  { value: "programming", label: "Programming", to: "/explorations/programming" },
  
  
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
          <ListboxItem
            key={category.value}
            value={category.value}
            className="group  bg-accent-3 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-accent-1 hover:text-option-2 hover:ring-accent/30"
          >
            <span className="font-medium text-accent-4 transition-colors duration-150 group-hover:text-option-2">
              {category.label}
            </span>
            <ListboxItemIndicator className="text-accent-3 transition-transform duration-200 group-hover:translate-x-1" />
          </ListboxItem>
        ))}
      </ListboxGroup>
    </Listbox>
  )
}
