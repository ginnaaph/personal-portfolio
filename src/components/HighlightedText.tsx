import { HighlightText } from '@/components/animate-ui/primitives/texts/highlight'

interface HighlightedTextProps {
    text: string;
    delay?: number;
}

export const HighlightedText = ({ text, delay = 0 }: HighlightedTextProps) => {
    return (
        <HighlightText
            text={text}
            delay={delay}
            className="text-4xl font-bold bg-linear-to-r from-[#Dad0dc] to-[#7e738e] dark:from-[#DAD0DC] dark:to-[#7e738e] text-right"/>

    )}