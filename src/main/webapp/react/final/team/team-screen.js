import teamService from "./team-service"

const {useState, useEffect} = React;

const {Link, useHistory} = window.ReactRouterDOM;

const TeamScreen = () => {
  const [teams, setTeams] = useState ([])
  useEffect(() => {
    findAllTeam()
  }, [])
  const findAllTeam = () =>
      teamService.findAllTeam()
      .then(teams => setTeams(teams))
  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }

  return (
      <div>
        <button onClick={goBack}>
          Back
        </button>
        <h2>Team Screen</h2>
        <button onClick={() => history.push("/team/new")}>
          Add Team
        </button>
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
      </div>
  )
}

export default TeamScreen