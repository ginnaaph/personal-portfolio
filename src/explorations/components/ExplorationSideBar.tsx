import SearchBox from "@/components/ui/search-box"
import { cn } from "@/lib/utils"
import { CategoriesListBox } from "./CategoriesListBox"
import { IconStack } from "./IconStacks"

type ExplorationSideBarProps = {
    className?: string
    variant?: "all" | "programming" | "baking" | "art"
}

export const ExplorationSideBar = ({ className, variant = "all" }: ExplorationSideBarProps) => {
    const extraContent = getSidebarExtraContent(variant)

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
               
                {extraContent}
            </section>
        </aside>
    )
}

function getSidebarExtraContent(variant: ExplorationSideBarProps["variant"]) {
    // Add per-category sidebar content here when you're ready.
    // Example: return <YourComponent /> for a specific category.
    switch (variant) {
        case "programming":
            return (
                <div className="text-xs text-accent-1">
                     <div>
                    <div className="text-sm font-medium text-accent-1 py-4" >Tech stack</div>
                    <IconStack />
                </div>
                    {/* TODO: Add programming-specific sidebar content */}
                </div>
            )
        case "baking":
            return (
                <div className="text-xs text-accent-1">
                    {/* TODO: Add baking-specific sidebar content */}
                </div>
            )
        case "art":
            return (
                <div className="text-xs text-neutral-500">
                    {/* TODO: Add art-specific sidebar content */}
                </div>
            )
        default:
            return null
    }
}
