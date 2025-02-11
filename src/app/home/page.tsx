import { CardOverview } from "@/app/home/_components/ui/cards/card-overview"
import { CardCalculator } from "@/app/home/_components/ui/cards/card-calculator"
import { CardLearning } from "@/app/home/_components/ui/cards/card-learning"
import { CardMotivational } from "@/app/home/_components/ui/cards/card-motivational"
import { CardVesting } from "@/app/home/_components/ui/cards/card-vesting"
import { IntroModal } from "@/app/home/_components/ui/intro-modal"
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
      <CardVesting />
      <IntroModal />
    </Section>
  )
}
