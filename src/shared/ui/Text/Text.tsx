import { DefaultTFuncReturn } from 'i18next';
import { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string
    title?: DefaultTFuncReturn
    text?: DefaultTFuncReturn
    theme?: TextTheme
    align?: TextAlign
    size?: TextSize
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    const HeadetTag = mapSizeToToHeaderTag[size];

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && (
                <HeadetTag className={cls.title}>
                    {title}
                </HeadetTag>
            )}
            {text && (
                <p className={cls.text}>
                    {text}
                </p>
            )}
        </div>
    );
});
