import styles from './styles.module.scss'
import { SvgSun } from '@/components/icons/sun'
import { SvgMoon } from '@/components/icons/moon'
import { useTheme } from '@/hooks/useTheme'

export function ToggleTheme() {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <label>
      <input
        className={styles.toggle_checkbox}
        type='checkbox'
        onClick={toggleTheme}
        defaultChecked={isDarkMode}
      />
      <div className={styles.toggle_slot}>
        <div className={styles.sun_icon_wrapper}>
          <SvgSun className={styles.sun_icon} />
        </div>
        <div className={styles.toggle_button}></div>
        <div className={styles.moon_icon_wrapper}>
          <SvgMoon className={styles.moon_icon} />
        </div>
      </div>
    </label>
  )
}
