import {
  RotatingText,
  RotatingTextContainer,
} from '@/components/animate-ui/primitives/texts/rotating';

interface ExplorationRotatingTextProps {
  delay: number;
  y: number;
  duration: number;
  text: string[];
}

export const ExplorationRotatingText = ({
  delay,
  y,
  duration,
  text,
}: ExplorationRotatingTextProps) => {
  return (
    <RotatingTextContainer
      key={delay}
      delay={delay}
      y={y}
      duration={duration}
      className="ml-2 mt-1 text-4xl font-semibold italic text-accent-4 dark:text-secondary"
      text={text}
    >
      <RotatingText />
    </RotatingTextContainer>
  );
};
