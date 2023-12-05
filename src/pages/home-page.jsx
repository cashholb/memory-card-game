import './home-page.css';
function HomePage({onChangePokemon, onChangeMtg}) {

    return (
        <div className="home page">
            <h1>Pokemon Memory Card Game</h1>
            <div className="home-button-container">
                <button value={'pokemon'} onClick={() => onChangePokemon()}>Normal</button>
                <button value={'pokemon'} onClick={() => onChangePokemon()}>Hard</button>
            </div>
        </div>
    )
}

export default HomePage;