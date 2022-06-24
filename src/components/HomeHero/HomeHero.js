import spring from '../../assets/Images/spring.png'
import winter from '../../assets/Images/winter.png'
import './HomeHero.scss'
import heroText from '../../assets/Images/hero-text.png'

function HomeHero({ isSpring }) {
    if(isSpring) {
        return ( 
            <section className="hero hero--spring">
                <img src={heroText} />
            </section>
        )
    } else {
        return(
            <>
                <div className="hero hero--winter">
                </div>            
            </>
        )
    }

}

export default HomeHero;