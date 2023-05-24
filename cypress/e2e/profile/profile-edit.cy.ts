let profileId = '';

describe('User go to profile page', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`/profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('profile was loaded successfully', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
    });

    it('user edit data in profile page', () => {
        const newName = 'new';
        const newLastName = 'lastName';
        cy.updateProfile(newName, newLastName);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastName);
    });
});
