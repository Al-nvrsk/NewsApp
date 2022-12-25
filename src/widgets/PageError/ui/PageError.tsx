import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}
const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
};

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation('translation');
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Unexpected error')}</p>
            <Button onClick={reloadPage}>
                {t('Reload')}
            </Button>
        </div>
    );
};
