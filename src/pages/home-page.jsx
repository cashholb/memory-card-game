import './home-page.css';
function HomePage({onChangeNormal, onChangeHard}) {

    return (
        <div className="home page">
            <h1>Pokemon Memory Card Game</h1>
            <div className="home-button-container">
                <button value={'normal'} onClick={() => onChangeNormal()}>Normal</button>
                <button value={'hard'} onClick={() => onChangeHard()}>Hard</button>
            </div>
        </div>
    )
}

export default HomePage;