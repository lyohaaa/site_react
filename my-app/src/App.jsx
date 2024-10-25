import logo from '../src/pics/logo.svg';
import search from '../src/pics/search.svg';
import cart from '../src/pics/Cart.svg';
import background from '../src/pics/Background.svg'
import './App.css';


function App() {
  return (
    <>
    <div className='header'>
      <img src= {logo} alt='logo'></img>
      <p></p>
      <ul className='tab'>
        <li><a href='#'> Home </a></li>
        <li><a href='#'> About </a></li>
        <li><a href='#'> Pages </a></li>
        <li><a href='#'> Shop </a></li>
        <li><a href='#'> Projects </a></li>
        <li><a href='#'> News </a></li>
      </ul>
      <div className='input'>
        <img src={search} alt=''/>
        <input type='text' />
      </div>
      <div className='cart'>
        <img src={cart} alt=''/>
        <p> Cart (0) </p>
      </div>
    </div>
    <div className='second'>
      <img src={background} alt=''/>
    </div>
    </>
  );
}

export default App;
