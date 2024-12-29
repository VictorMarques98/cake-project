import { SvgChat } from './chat'
import { SvgFile } from './file'
import { SvgFourSquares } from './four-squares'
import { SvgTag } from './tag'
import { SvgWallet } from './wallet'
import { SvgLock } from './lock'
import { SvgQuestion } from './question'
import { SvgCaretDown } from './caret-down'
import { SvgArrowUp } from './arrow-up'
import { SvgArrowLeft } from './arrow-left'
import { SvgArrowRight } from '@/components/icons/arrow-right'
import { SvgCalculator } from '@/components/icons/calculator'
import { SvgPen } from '@/components/icons/pen'
import { SvgSun } from '@/components/icons/sun'
import { SvgMoon } from '@/components/icons/moon'

type Props = {
  name: string;
} & React.SVGProps<SVGSVGElement>;

const iconMap: { [key: string]: React.FC } = {
  'chat': SvgChat,
  'file': SvgFile,
  'four-squares': SvgFourSquares,
  'tag': SvgTag,
  'wallet': SvgWallet,
  'lock': SvgLock,
  'question': SvgQuestion,
  'caret-down': SvgCaretDown,
  'arrow-up': SvgArrowUp,
  'arrow-left': SvgArrowLeft,
  'arrow-right': SvgArrowRight,
  'calculator': SvgCalculator,
  'pen': SvgPen,
  'sun': SvgSun,
  'moon': SvgMoon
};

export function Icon({ name, ...props }: Props) {
  const IconComponent = iconMap[name];
  return IconComponent ? <IconComponent {...props} /> : null;
}