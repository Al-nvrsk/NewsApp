import { Article } from '@/entities/Article';

const defaultArticle = {
    title: "Javascript news",
    subtitle: "What's new",
    img: "https://cdn1.iconfinder.com/data/icons/application-file-formats/128/javascript-512.png",
    views: "1",
    createdAt: "17.01.2023",
    userId: "1",
    type: [
        "IT"
    ],
    block: []
}

export const createArticle = (article?: Article) => {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles',
        headers: { Authorization: 'asasf' },
        body: article ?? defaultArticle
    }).then(resp => resp.body);
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'asasf' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
