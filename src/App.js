import React from 'react';

function Food({name,picture}){
  return (<div>
    <h2>I like {name}</h2>
    <img src={picture} alt ={name}/>
  </div>);
}

const foodILike=[
  {
    id:1,
    name:"hamburger",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/NYC-Diner-Bacon-Cheeseburger.jpg/330px-NYC-Diner-Bacon-Cheeseburger.jpg"
  },
  {
    id:2,
    name:"pizza",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Supreme_pizza.jpg/330px-Supreme_pizza.jpg"
  }
]



function App() {
  return (
    <div>
    {foodILike.map(dish=>(
      <Food key={dish.id} name={dish.name} picture={dish.image}/>
    ))}
    </div>
  );
}

export default App;
