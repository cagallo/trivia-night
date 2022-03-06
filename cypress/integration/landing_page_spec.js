describe('Trivia Night landing page user flow', () => {
  
  it('should display page title and all of the possible trivia categories', () => {
    cy.visit('http://localhost:3000')
      .get(".logo").should('have.attr', 'alt', 'Trivia Night logo')
      .get('.directions').contains('Please choose a category or click "All Categories"')
      .get('.form-link').contains('Add a New Question')
      .get('.category-card').should('have.length', 12)
      .get('.category-card').contains('All Categories')
      .get('.category-card').contains('Food and Drink')
      .get('.category-card').contains('Geography')
      .get('.category-card').contains('General Knowledge')
      .get('.category-card').contains('History')
      .get('.category-card').contains('Art and Literature')
      .get('.category-card').contains('Film and TV')
      .get('.category-card').contains('Music')
      .get('.category-card').contains('Science')
      .get('.category-card').contains('Society and Culture')
      .get('.category-card').contains('Sport and Leisure')
      .get('.category-card').contains('User Generated Questions')
  })
});