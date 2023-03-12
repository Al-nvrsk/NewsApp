import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import cls from './ForbiddenPage.module.scss';

interface ForbiddenPageProps {
    className?: string
}

const ForbiddenPage = memo(({ className }: ForbiddenPageProps) => {
    const { t } = useTranslation('main');
    return (
        <Page className={classNames(cls.ForbiddenPage, {}, [className])}>
            {t('Access forbidden')}
        </Page>
    );
});

export default ForbiddenPage;
