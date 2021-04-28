import usersService from "./user-service"
import teamService from "../team/team-service";

const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const UserEditor = () => {
    const {id} = useParams()
    const [user, setUser] = useState({})
    const history = useHistory()
    useEffect(() => {
        if(id !== "new") {
            findUserById(id)
        }
    }, []);

    const createUser = (user) =>
        usersService.createUser(user)
            .then(() => history.goBack())

    const findUserById = (id) => {
        usersService.findUserById(id).then(user => setUser(user))
    }

    const [teams, setTeams] = useState ([])
    useEffect(() => {
      findTeamForUser(id)
    }, [])

    const findTeamForUser = (id) => {
      teamService.findTeamForUser(id).then(teams => setTeams(teams))
    }

    const deleteUser = (id) =>
        usersService.deleteUser(id)
            .then(() => history.goBack())

    const updateUser = (id, newUser) =>
        usersService.updateUser(id, newUser)
            .then(() => history.goBack())
    return(
        <div>
            <h2>User Editor</h2>
            <label>ID</label>
            <input value={user.id}/><br/>
            <label>First Name</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, firstName: e.target.value}))}
                value={user.firstName}/><br/>
            <label>Last Name</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, lastName: e.target.value}))}
                value={user.lastName}/><br/>
            <label>Username</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, username: e.target.value}))}
                value={user.username}/><br/>
            <label>Password</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, password: e.target.value}))}
                value={user.password}/><br/>
            <label>Email</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, email: e.target.value}))}
                value={user.email}/><br/>
            <label>Date Of Birth</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, dateOfBirth: e.target.value}))}
                value={user.dateOfBirth}/><br/>
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
                onClick={() => deleteUser(user.id)}>
                Delete
            </button>
            <button
                onClick={() => createUser(user)}>
                Create
            </button>
            <button
                onClick={() => updateUser(user.id, user)}>
                Save
            </button>
        </div>
    )
}

export default UserEditor