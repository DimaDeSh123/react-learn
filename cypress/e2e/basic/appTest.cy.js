describe('App E2E', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('Counter should start with the correct initial value', () => {
      cy.get('div').contains('Count: 10');
    });
  
    it('SearchComponent should have the correct initial query', () => {
      cy.get('input.search-input').should('have.value', 'Initial Query');
    });
  
    it('Should select a genre from GenresTabs', () => {
        cy.get('button.ganre')
          .contains('COMEDY')
          .click();
    
        cy.get('button.ganre.selected-genre')
          .should('contain.text', 'COMEDY');
    });
  
    it('Should select a genre from GenreSelect', () => {
      cy.get('input.genre-select-input').click();

      cy.get('label.genre-select-selects-label')
      .contains('Horror')
      .click();
  
      cy.get('input.genre-select-selects:checked')
        .should('have.id', 'Horror');
    });
  });