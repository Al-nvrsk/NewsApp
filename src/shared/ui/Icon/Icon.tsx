import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, SVGProps, VFC } from 'react';
import cls from './Icon.module.scss';

interface iconProps {
    className?: string
    Svg: VFC<SVGProps<SVGAElement>>
    inverted?: boolean
}

export const Icon = memo((props: iconProps) => {
    const { className, Svg, inverted } = props;
    return (
        <Svg className={classNames(inverted ? cls.inverted : cls.icon, {}, [className])} />
    );
});
