import { Card } from "../Card";

interface AboutMeProps {
  title: string;
  content: string[];
}

export function AboutMe({ title, content }: AboutMeProps) {
  return (
    <Card title={title}>
      {content.map((paragraph: string, index: number) => (
        <p key={`paragraph-${index}`} className="mb-4">
          {paragraph}
        </p>
      ))}
    </Card>
  );
}
