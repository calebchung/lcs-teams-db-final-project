const {Link} = window.ReactRouterDOM;

const Home = () => {
    return (
        <div>
            <h2>LCS Home</h2>
            <Link to={"/users"}>
                UserList
            </Link>
            <br/>
            <Link to={"/team"}>
                TeamScreen
            </Link>
            <br/>
            <Link to={"/game"}>
                GameScreen
            </Link>
            <br/>
            <Link to={"/player"}>
                PlayerScreen
            </Link>
        </div>
    )
}

export default Home