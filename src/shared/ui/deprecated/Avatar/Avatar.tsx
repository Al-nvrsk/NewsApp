import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage/AppImage';
import UserIcon from '@/shared/assets/icons/deprecated/user-filled.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
    fallbackInverted?: boolean
}

/**
 * @deprecated
 */
export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        size,
        alt,
        fallbackInverted,
    } = props;
    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <Icon inverted={fallbackInverted} Svg={UserIcon} />;

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            style={styles}
            alt={alt}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
};
