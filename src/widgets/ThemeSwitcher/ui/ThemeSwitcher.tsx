import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import LightIcon from 'shared/assets/icons/sun.png'
import DarkIcon from 'shared/assets/icons/moon.png'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

const lightIcon = <img  src={LightIcon} alt="lightIcon"  />
const darkIcon = <img  src={DarkIcon} alt="darktIcon" />

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()
    return (
    <Button 
        theme={ThemeButton.CLEAR}
        className={classNames(cls.ThemeSwitcher, {}, [className] )}
        onClick={toggleTheme}> 
        {theme === Theme.DARK ? darkIcon : lightIcon}
    </Button>
  )
}
