import { Icon } from '@/components/icons';
import styles from './styles.module.scss'
import { useEffect, useRef, useState } from 'react';

type Props = {
  currentValue: string | number;
  options: Array<{
    value: string;
    label: string;
  }>
  onChange: (value: string) => void;
}

export function DropDown({ currentValue, options, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Escape') setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className={styles.dropdown}
      ref={dropdownRef}
    >
      <button
        className={styles.dropdown_button}
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
      >
        {currentValue}
        {' '}
        <Icon name="caret-down" />
      </button>
      {isOpen && (
        <ul
          className={styles.dropdown_menu}
          role="menu"
        >
          {options.map(({ value, label }) => (
            <li
              key={value}
              role="menuitem"
              tabIndex={0}
            >
              <button onClick={() => onChange(value)}>
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
