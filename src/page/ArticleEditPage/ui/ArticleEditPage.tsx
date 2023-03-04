import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams < { id: string }>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit
                ? t('Edit article id =') + id
                : t('Create new Article')}
        </Page>
    );
});

export default ArticleEditPage;