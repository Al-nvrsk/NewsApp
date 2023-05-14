import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import cls from './ForbiddenPage.module.scss';

interface ForbiddenPageProps {
    className?: string
}

const ForbiddenPage = memo(({ className }: ForbiddenPageProps) => {
    const { t } = useTranslation('main');
    return (
        <Page data-testid="ForbiddenPage" className={classNames(cls.ForbiddenPage, {}, [className])}>
            {t('Access forbidden')}
        </Page>
    );
});

export default ForbiddenPage;
