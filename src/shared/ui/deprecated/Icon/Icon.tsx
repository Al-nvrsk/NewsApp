import React, { memo, SVGProps, VFC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface iconProps extends React.SVGProps<SVGSVGElement> {
    className?: string
    Svg: VFC<SVGProps<SVGSVGElement>>
    inverted?: boolean
}
/**
 * @deprecated
 */
export const Icon = memo((props: iconProps) => {
    const {
        className,
        Svg,
        inverted,
        ...otherProps
    } = props;
    return (
        <Svg
            className={classNames(inverted ? cls.inverted : cls.icon, {}, [className])}
            {...otherProps}
        />
    );
});
