import './App.css';
import React from 'react';
// import Left from './component/left';
// import Right from './component/right';
const Search = React.lazy(() => import('./component/search'));
const Weather = React.lazy(() => import('./component/weather'));

function App() {
  return (
    <div className="App">
        <Search/>
        {/* <Left />
        <Right /> */}
        <Weather/>
    </div>
  );
}
export default App;
