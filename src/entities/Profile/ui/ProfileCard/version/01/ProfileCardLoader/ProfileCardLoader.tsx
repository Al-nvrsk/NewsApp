import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import { Loader } from '@/shared/ui/deprecated/Loader';
import cls from './ProfileCardLoader.module.scss';

export const ProfileCardLoader = () => {
    return (
        <HStack justify="center" max className={classNames(cls.ProfileCard, { [cls.loadiing]: true })}>
            <Loader />
        </HStack>
    );
};
