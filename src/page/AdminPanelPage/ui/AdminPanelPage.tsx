import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import cls from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
    className?: string
}

const AdminPanelPage = memo(({ className }: AdminPanelPageProps) => {
    const { t } = useTranslation('main');
    return (
        <Page className={classNames(cls.AdminPanelPage, {}, [className])}>
            {t('Admin panel')}
        </Page>
    );
});

export default AdminPanelPage;
