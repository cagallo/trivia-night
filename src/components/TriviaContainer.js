import React from 'react';
import CategoryCard from './CategoryCard'
import '../styles/TriviaContainer.css';
import { Link } from 'react-router-dom';

const TriviaContainer = () => {
  const categories = ['All Categories', 'Food and Drink', 'Geography', 'General knowledge', 'History', 'Art and Literature', 'Movies', 'Music', 'Science', 'Society and Culture', 'Sports and Leisure', 'User Generated Questions']
  let i = 0;
  const triviaCategories = categories.map((category) => {
    return <Link key={i++} to={`/${category}`}>
      <CategoryCard
      categoryName ={category}
      key ={i++}
      />
    </Link>
  })

  return (
    <section className="trivia-container">
      <div className='trivia-container-text'>
        <h3>Please choose a category or click "All Categories"</h3>
      </div>
      <div className='trivia-category-cards'>
      {triviaCategories}
      </div>
    </section>
  )
}


export default TriviaContainer;