import Home from "./home";
import UserList from "./users/user-list";
import TeamScreen from "./team/team-screen";
import GameScreen from "./game/game-screen";
import PlayerScreen from "./player/player-screen";
import UserEditor from "./users/user-editor";
import TeamEditor from "./team/team-editor";
import GameEditor from "./game/game-editor";
import PlayerEditor from "./player/player-editor";

const {HashRouter, Route} = window.ReactRouterDOM;

const App = () => {
    return (
        <div>
            <HashRouter>
                <Route path="/" exact={true}>
                    <Home/>
                </Route>
                <Route path="/users/:id" exact={true}>
                    <UserEditor/>
                </Route>
                <Route path="/users" exact={true}>
                    <UserList/>
                </Route>
                <Route path="/team/:id" exact={true}>
                    <TeamEditor/>
                </Route>
                <Route path="/team" exact={true}>
                    <TeamScreen/>
                </Route>
                <Route path="/game/:id" exact={true}>
                    <GameEditor/>
                </Route>
                <Route path="/game" exact={true}>
                    <GameScreen/>
                </Route>
                <Route path="/player/:id" exact={true}>
                    <PlayerEditor/>
                </Route>
                <Route path="/player" exact={true}>
                    <PlayerScreen/>
                </Route>
            </HashRouter>
        </div>


    );
}

export default App;
