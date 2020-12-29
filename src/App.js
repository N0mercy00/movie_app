import React from 'react';

function Food({fav}){
  return (<h3>i love {fav} </h3>);
}

function App() {
  return (
    <div>
      <h1>hello!!</h1>
     <Food fav ="kimchi"/>
     <Food fav ="porkbelly"/>
     <Food fav ="Galbi"/>
    </div>
  );
}

export default App;
