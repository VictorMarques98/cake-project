import { CardCalculator } from "@/app/home/_components/ui/card-calculator";
import { CardLearning } from "@/app/home/_components/ui/card-learning";
import { CardMotivational } from "@/app/home/_components/ui/card-motivational";
import { CardOverview } from "@/app/home/_components/ui/card-overview";
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
      <CardOverview />
      <CardLearning />
      <CardCalculator />
      <CardMotivational />
    </Section>
  )
}
