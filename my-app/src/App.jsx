import logo from '../src/pics/logo.svg';
import search from '../src/pics/search.svg';
import cart from '../src/pics/cart.svg';
import './App.css';

function App() {
  return (
    <>
    <div className='header'>
      <img src= {logo} alt='logo'></img>
      <p>Organick</p>
      <ul className='tab'>
        <li><a href='#'> Home </a></li>
        <li><a href='#'> About </a></li>
        <li><a href='#'> Pages </a></li>
        <li><a href='#'> Shop </a></li>
        <li><a href='#'> Projects </a></li>
        <li><a href='#'> News </a></li>
      </ul>
      <div className='input'>
        <input type='text' />
        <img src={search} alt=' ' />
      </div>
      <div className='cart'>
        <img src={cart} alt=''/>
        <p> Cart (0) </p>
      </div>
    </div>
    </>
  );
}

export default App;
