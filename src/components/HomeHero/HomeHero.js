import spring from '../../assets/Images/spring.png'
import winter from '../../assets/Images/winter.png'
import './HomeHero.scss'

function HomeHero({ isSpring }) {
    if(isSpring) {
        return ( 
    //     //    <img className='hero' src={spring} />
            <section className="hero hero--spring">
                <h1 className="hero__heading">HUMANATURE</h1>
                <h2 className="hero__subheading">Lightweight</h2>
                <h2 className="hero__subheading">Sustainable</h2>
                <button className="hero__btn">Shop the Collection</button>
            </section>
        )
    } else {
        return(
            <>
                <img className='hero hero--winter' src={winter} />
            </>
        )
    }

}

export default HomeHero;