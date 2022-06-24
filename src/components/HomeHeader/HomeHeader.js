import logo from '../../assets/Logos/logo.svg'
import ToggleSeason from '../ToggleSeason/ToggleSeason';
import './HomeHeader.scss'

function HomeHeader({ isSpring, setIsSpring }) {
    return ( 
        <header className='header'>
            <nav className='header__nav-left nav-left'>
                <ul className='nav-left__list'>
                    <li className="nav-left__link">Women</li>
                    <li className="nav-left__link">Men</li>
                    <li className="nav-left__link">Kids</li>
                    <li className="nav-left__link">Humanature</li>
                </ul>
            </nav>
            <div className="header__center">
                <img src={logo} alt="Canada Goose" className="header__logo" />
                <ToggleSeason isSpring={isSpring} setIsSpring={setIsSpring}/>
            </div>
            <nav className='header__nav-right nav-right'>
                <ul className='nav-right__list'>
                    <li className="nav-right__link">
                        Ambassador
                    </li>
                    <li className="nav-right__link">
                        Search
                    </li>
                    <li className="nav-right__link">
                        Profile
                    </li>
                    <li className="nav-right__link">
                        Checkout
                    </li>
                </ul>
            </nav>
        </header>

     );
}

export default HomeHeader;