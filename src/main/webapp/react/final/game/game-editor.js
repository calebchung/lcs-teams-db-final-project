import gameService from "./game-service"
import teamService from "../team/team-service";

const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const GameEditor = () => {
    const {id} = useParams()
    const [game, setGame] = useState({})
    const history = useHistory()
    useEffect(() => {
        if(id !== "new") {
            findGameById(id)
        }
    }, []);

    const createGame = (game) =>
        gameService.createGame(game)
            .then(() => history.goBack())

    const findGameById = (id) => {
        gameService.findGameById(id).then(game => setGame(game))
    }

    const [teams, setTeams] = useState ([])
    useEffect(() => {
      findTeamForGame(id)
    }, [])

    const findTeamForGame = (id) => {
      teamService.findTeamForGame(id).then(teams => setTeams(teams))
    }

    const deleteGame = (id) =>
        gameService.deleteGame(id)
            .then(() => history.goBack())

    const updateGame = (id, newGame) =>
        gameService.updateGame(id, newGame)
            .then(() => history.goBack())

    return(
        <div>
            <h2>Game Editor</h2>
            <label>ID</label>
            <input value={game.id}/><br/>
            <label>Blue Team</label>
            <input
                onChange={(e) =>
                    setGame(game =>
                        ({...game, blueTeam: e.target.value}))}
                value={game.blueTeam}/><br/>
            <label>Red Team</label>
            <input
                onChange={(e) =>
                    setGame(game =>
                        ({...game, redTeam: e.target.value}))}
                value={game.redTeam}/><br/>
            <label>Winner</label>
            <input
                onChange={(e) =>
                    setGame(game =>
                        ({...game, winner: e.target.value}))}
                value={game.winner}/><br/>
            <label>Score</label>
            <input
                onChange={(e) =>
                    setGame(game =>
                        ({...game, score: e.target.value}))}
                value={game.score}/><br/>
            <label> Team </label>
            <ul className="list-group">
              {
                teams.map(team =>
                    <li key={team.id}>
                      <Link to={`/team/${team.id}`}>
                        {team.teamName},
                        {team.wins},
                        {team.losses},
                        {team.yearFounded}
                      </Link>
                    </li>)
              }
            </ul>
            <br/>
            <button
                onClick={() => {
                  history.goBack()}}>
              Cancel
            </button>
            <button
                onClick={() => deleteGame(game.id)}>
              Delete
            </button>
            <button
                onClick={() => createGame(game)}>
              Create
            </button>
            <button
                onClick={() => updateGame(game.id, game)}>
              Save
            </button>
          </div>
      )
    }

export default GameEditor