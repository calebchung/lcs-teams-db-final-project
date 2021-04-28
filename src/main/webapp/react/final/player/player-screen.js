import playerService from "./player-service"

const {useState, useEffect} = React;

const {Link, useHistory} = window.ReactRouterDOM;

const PlayerScreen = () => {
    const [players, setPlayers] = useState ([])
    useEffect(() => {
        findAllPlayers()
    }, [])

    const findAllPlayers = () =>
        playerService.findAllPlayers()
            .then(players => setPlayers(players))
    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <button onClick={goBack}>
                Back
            </button>
            <h2>Player Screen</h2>
            <button onClick={() => history.push("/player/new")}>
                Add Player
            </button>
            <ul className="list-group">
                {
                    players.map(player =>
                        <li key={player.id}>
                            <Link to={`/player/${player.id}`}>
                                {player.gameName},
                                {player.age},
                                {player.position},
                                {player.totalDeaths},
                                {player.totalKills},
                                {player.totalAssists},
                                {player.salary}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default PlayerScreen