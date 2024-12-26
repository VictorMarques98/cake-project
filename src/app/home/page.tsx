import { CardLearning } from "@/app/home/_components/ui/card-learning";
import { Section } from "@/app/home/_components/ui/section"
import { Text } from "@/components/ui/text"

export const metadata = {
  title: 'Home',
  description: 'Home page',
};

export default function Home() {
  return (
    <Section>
      <Text
        type="h1"
        content="Dashboard Overview"
      />
      <CardLearning />
    </Section>
  )
}
