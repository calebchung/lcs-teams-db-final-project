import teamService from "./team-service"
import gameService from "../game/game-service"
import userService from "../users/user-service";
import playerService from "../player/player-service";

const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const TeamEditor = () => {

  const {id} = useParams()
  const [team, setTeam] = useState({})
  const history = useHistory()
  useEffect(() => {
    if(id !== "new") {
      findTeamById(id)
    }
  }, []);

  const createTeam = (team) =>
      teamService.createTeam(team)
      .then(() => history.goBack())

  const findTeamById = (id) => {
    teamService.findTeamById(id).then(team => setTeam(team))
  }

  const deleteTeam = (id) =>
      teamService.deleteTeam(id)
      .then(() => history.goBack())

  const updateTeam = (id, newTeam) =>
      teamService.updateTeam(id, newTeam)
      .then(() => history.goBack())

  const [games, setGame] = useState ([])
  useEffect(() => {
    findGameForTeam(id)
  }, [])
  const findGameForTeam = (id) =>
      gameService.findGameForTeam(id)
      .then(games => setGame(games))

  const [users, setUsers] = useState ([])
  useEffect(() => {
    findUserForTeam(id)
  }, [])
  const findUserForTeam = (id) =>
      userService.findUserForTeam(id)
      .then(users => setUsers(users))

  const [players, setPlayers] = useState ([])
  useEffect(() => {
    findPlayerForTeam(id)
  }, [])

  const findPlayerForTeam = (id) =>
      playerService.findPlayerForTeam(id)
      .then(players => setPlayers(players))

  return(
      <div>
        <h2>Team Editor</h2>
        <label>ID</label>
        <input value={team.id}/><br/>
        <label>Team Name</label>
        <input
            onChange={(e) =>
                setTeam(team =>
                    ({...team, teamName: e.target.value}))}
            value={team.teamName}/><br/>
        <label>Wins</label>
        <input
            onChange={(e) =>
                setTeam(team =>
                    ({...team, wins: e.target.value}))}
            value={team.wins}/><br/>
        <label>Losses</label>
        <input
            onChange={(e) =>
                setTeam(team =>
                    ({...team, losses: e.target.value}))}
            value={team.losses}/><br/>
        <label>Date Founded</label>
        <input
            onChange={(e) =>
                setTeam(team =>
                    ({...team, yearFounded: e.target.value}))}
            value={team.yearFounded}/><br/>
        <button
            onClick={() => {
              history.goBack()}}>
          Cancel
        </button>
        <button
            onClick={() => deleteTeam(team.id)}>
          Delete
        </button>
        <button
            onClick={() => createTeam(team)}>
          Create
        </button>
        <button
            onClick={() => updateTeam(team.id, team)}>
          Save
        </button>
        <br/>
        <label> Games </label>
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
        <label> Users </label>
        <ul className="list-group">
          {
            users.map(user =>
                <li key={user.id}>
                  <Link to={`/users/${user.id}`}>
                    {user.firstName},
                    {user.lastName},
                    {user.username},
                    {user.password},
                    {user.email},
                    {user.dateOfBirth}
                  </Link>
                </li>)
          }
        </ul>
        <label> Players </label>
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

export default TeamEditor