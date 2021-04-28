import userService from "./user-service"

const {useState, useEffect} = React;

const {Link, useHistory} = window.ReactRouterDOM;

const UserList = () => {
    const [users, setUsers] = useState ([])
    useEffect(() => {
        findAllUsers()
    }, [])
    const findAllUsers = () =>
        userService.findAllUsers()
            .then(users => setUsers(users))
    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <button onClick={goBack}>
                Back
            </button>
            <h2>User List</h2>
            <button onClick={() => history.push("/users/new")}>
                Add User
            </button>
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
        </div>
    )
}

export default UserList