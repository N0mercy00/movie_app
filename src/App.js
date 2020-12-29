import React from 'react';

function Food({name,picture}){
  return (<div>
    <h2>I like {name}</h2>
    <img src={picture}/>
  </div>);
}

const foodILike=[
  {
    name:"hamburger",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/NYC-Diner-Bacon-Cheeseburger.jpg/330px-NYC-Diner-Bacon-Cheeseburger.jpg"
  },
  {
    name:"pizza",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Supreme_pizza.jpg/330px-Supreme_pizza.jpg"
  }
]

function App() {
  return (
    <div>
      <h1>hello!!</h1>
    {foodILike.map(dish=>(
      <Food name={dish.name} picture={dish.image}/>
     ))}
    </div>
  );
}

export default App;
