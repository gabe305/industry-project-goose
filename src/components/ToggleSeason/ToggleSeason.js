import './ToggleSeason.scss'

function ToggleSeason({ isSpring, setIsSpring }) {

    const seasonHandler = () => {
        setIsSpring(!isSpring);
    }

    return ( 
        <div className="toggle" onClick={seasonHandler}>
            <p className="toggle__label" onClick={seasonHandler}>Spring</p>
                <label className="toggle__switch">
                    <input type="checkbox" className="toggle__input" onFocus={seasonHandler}/>
                    <span className="toggle__slider" onFocus={seasonHandler}></span>
                </label>
            <p className="toggle__label">Winter</p>
        </div>

    );
}

export default ToggleSeason;