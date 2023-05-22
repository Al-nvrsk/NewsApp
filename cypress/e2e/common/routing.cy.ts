import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('Routing', () => {
    describe('User is not Auth', () => {
        it('passes open main page', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('passes try to open profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('passes try to open non-existent page', () => {
            cy.visit('/non-existentPage');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });
    describe('User is Auth', () => {
        beforeEach(() => {
            cy.login();
        });
        it('passes open profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('passes open articles page', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
