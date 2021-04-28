import gameService from "./game-service"

const {useState, useEffect} = React;

const {Link, useHistory} = window.ReactRouterDOM;

const GameScreen = () => {
    const [games, setGame] = useState ([])
    useEffect(() => {
        findAllGames()
    }, [])
    const findAllGames = () =>
        gameService.findAllGames()
            .then(games => setGame(games))
    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <button onClick={goBack}>
                Back
            </button>
            <h2>Game Screen</h2>
            <button onClick={() => history.push("/game/new")}>
                Add Game
            </button>
            <ul className="list-group">
                {
                    games.map(game =>
                        <li key={game.id}>
                            <Link to={`/game/${game.id}`}>
                                {game.blueTeam},
                                {game.redTeam},
                                {game.winner},
                                {game.score}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default GameScreen