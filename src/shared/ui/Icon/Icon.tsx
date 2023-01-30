import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, SVGProps, VFC } from 'react';
import cls from './Icon.module.scss';

interface iconProps {
    className?: string
    Svg: VFC<SVGProps<SVGAElement>>
}

export const Icon = memo(({ className, Svg }: iconProps) => (
    <Svg className={classNames(cls.icon, {}, [className])} />
));
