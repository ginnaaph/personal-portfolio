import SearchBox from "@/components/ui/search-box"
import { cn } from "@/lib/utils"
import { CategoriesListBox } from "./CategoriesListBox"

type ExplorationSideBarProps = {
    className?: string
}

export const ExplorationSideBar = ({ className }: ExplorationSideBarProps) => {
    return (
        <aside
            className={cn("rounded-2xl bg-white p-4 shadow-sm md:p-6", className)}
            aria-label="Exploration filters"
        >
            <section id="exploration-sidebar" className="flex flex-col gap-4">
                <SearchBox
                    placeholder="Search projects..."
                    containerClassName="w-full"
                    className="text-md"
                />
                <CategoriesListBox />
            </section>
        </aside>
    )
}
