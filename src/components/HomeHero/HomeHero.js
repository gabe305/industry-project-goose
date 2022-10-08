// import spring from '../../assets/Images/spring.png'
import winter from '../../assets/Images/winter.png'
import './HomeHero.scss'
import heroText from '../../assets/Images/hero-text.png'
import winterBtn from '../../assets/Images/winter-btn.png'


function HomeHero({ isSpring }) {
    if(isSpring) {
        return ( 
            <div className="hero hero__spring">
                <img src={heroText} alt="Text" />
            </div>
        )
    } else {
        return(
            <>
                <div className="hero hero__winter">
                    <img className="hero__winter-btn" src={winterBtn} alt="Button for shopping"/>
                </div>            
            </>
        )
    }

}

export default HomeHero;