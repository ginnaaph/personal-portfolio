import * as React from "react"
import { cn } from "@/lib/utils"

export interface SearchBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Callback function triggered when the search value changes
   */
  onSearchChange?: (value: string) => void
  /**
   * Optional icon to display at the start of the search box
   */
  startIcon?: React.ReactNode
  /**
   * Optional icon to display at the end of the search box (e.g., clear button)
   */
  endIcon?: React.ReactNode
  /**
   * Show/hide the clear button when there's text
   */
  showClearButton?: boolean
  /**
   * Container class name for additional styling
   */
  containerClassName?: string
}

export const SearchBox = React.forwardRef<HTMLInputElement, SearchBoxProps>(
  (
    {
      className,
      containerClassName,
      onSearchChange,
      onChange,
      startIcon,
      endIcon,
      showClearButton = true,
      value: controlledValue,
      defaultValue,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState<string>(
      (defaultValue as string) || ""
    )

    const isControlled = controlledValue !== undefined
    const value = isControlled ? controlledValue : internalValue

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value

      if (!isControlled) {
        setInternalValue(newValue)
      }

      onChange?.(e)
      onSearchChange?.(newValue)
    }

    const handleClear = () => {
      const emptyValue = ""
      
      if (!isControlled) {
        setInternalValue(emptyValue)
      }

      onSearchChange?.(emptyValue)

      // Create a synthetic event for onChange
      const syntheticEvent = {
        target: { value: emptyValue },
        currentTarget: { value: emptyValue },
      } as React.ChangeEvent<HTMLInputElement>
      
      onChange?.(syntheticEvent)
    }

    const defaultStartIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-muted-foreground"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )

    const showClear = showClearButton && value && String(value).length > 0

    return (
      <div
        className={cn(
          "relative flex items-center gap-2 rounded-md border border-input bg-background px-3 py-2 ring-offset-background transition-colors focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
          containerClassName
        )}
      >
        {startIcon !== undefined ? startIcon : defaultStartIcon}
        
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={handleChange}
          className={cn(
            "flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          {...props}
        />

        {showClear && (
          <button
            type="button"
            onClick={handleClear}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        )}

        {endIcon}
      </div>
    )
  }
)

SearchBox.displayName = "SearchBox"

export default SearchBox
