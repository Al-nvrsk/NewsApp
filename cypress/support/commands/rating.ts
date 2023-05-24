export const setRate = (starstCount: number = 5, feedback: string = 'feedback') => {
    cy.getByTestId(`StarRating.${starstCount}`).click();
    cy.getByTestId('RatingCard.Input').type(feedback);
    cy.getByTestId('RatingCard.Send').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(starstCount: number, feedback: string): Chainable<void>;
        }
    }
}
