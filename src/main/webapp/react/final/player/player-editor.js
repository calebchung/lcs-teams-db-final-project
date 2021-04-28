import playerService from "./player-service"
import teamService from "../team/team-service";

const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const PlayerEditor = () => {
    const {id} = useParams()
    const [player, setPlayer] = useState({})
    const history = useHistory()
    useEffect(() => {
        if(id !== "new") {
            findPlayerById(id)
        }
    }, []);

    const createPlayer = (player) =>
        playerService.createPlayer(player)
            .then(() => history.goBack())

    const findPlayerById = (id) => {
        playerService.findPlayerById(id).then(player => setPlayer(player))
    }

    const [teams, setTeams] = useState ([])
    useEffect(() => {
      findTeamForPlayer(id)
    }, [])

    const findTeamForPlayer = (id) => {
      teamService.findTeamForPlayer(id).then(teams => setTeams(teams))
    }

    const deletePlayer = (id) =>
        playerService.deletePlayer(id)
            .then(() => history.goBack())

    const updatePlayer = (id, newPlayer) =>
        playerService.updatePlayer(id, newPlayer)
            .then(() => history.goBack())
    return(
        <div>
            <h2>Player Editor</h2>
            <label>ID</label>
            <input value={player.id}/><br/>
            <label>Game Name</label>
            <input
                onChange={(e) =>
                    setPlayer(player =>
                        ({...player, gameName: e.target.value}))}
                value={player.gameName}/><br/>
            <label>Age</label>
            <input
                onChange={(e) =>
                    setPlayer(player =>
                        ({...player, age: e.target.value}))}
                value={player.age}/><br/>
            <label>Position</label>
            <input
                onChange={(e) =>
                    setPlayer(player =>
                        ({...player, position: e.target.value}))}
                value={player.position}/><br/>
            <label>Total Kills</label>
            <input
                onChange={(e) =>
                    setPlayer(player =>
                        ({...player, totalKills: e.target.value}))}
                value={player.totalKills}/><br/>
            <label>Total Deaths</label>
            <input
                onChange={(e) =>
                    setPlayer(player =>
                        ({...player, totalDeaths: e.target.value}))}
                value={player.totalDeaths}/><br/>
            <label>Total Assists</label>
            <input
                onChange={(e) =>
                    setPlayer(player =>
                        ({...player, totalAssists: e.target.value}))}
                value={player.totalAssists}/><br/>
            <label>Salary</label>
            <input
                onChange={(e) =>
                    setPlayer(player =>
                        ({...player, salary: e.target.value}))}
                value={player.salary}/><br/>
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
                onClick={() => deletePlayer(player.id)}>
                Delete
            </button>
            <button
                onClick={() => createPlayer(player)}>
                Create
            </button>
            <button
                onClick={() => updatePlayer(player.id, player)}>
                Save
            </button>
        </div>
    )
}

export default PlayerEditor