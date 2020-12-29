import React from 'react';
import PropTypes from 'prop-types';

function Food({name,picture,rating}){
  return (<div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt ={name}/>
  </div>);
}

const foodILike=[
  {
    id:1,
    name:"hamburger",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/NYC-Diner-Bacon-Cheeseburger.jpg/330px-NYC-Diner-Bacon-Cheeseburger.jpg",
    rating:5
  },
  {
    id:2,
    name:"pizza",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Supreme_pizza.jpg/330px-Supreme_pizza.jpg",
    rating:4.8
  }
]

Food.propTypes={
  name: PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number
};

function App() {
  return (
    <div>
    {foodILike.map(dish=>(
      <Food 
      key={dish.id} 
      name={dish.name} 
      picture={dish.image} 
      rating={dish.rating}/>
    ))}
    </div>
  );
}

export default App;
