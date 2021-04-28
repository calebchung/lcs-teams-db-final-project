const TEAM_URL = "http://localhost:8080/api/teams";

const findAllTeam = () => {
  return fetch(TEAM_URL).then(response => response.json())
}

const findTeamById = (id) => {
  return fetch(`${TEAM_URL}/${id}`).then(response => response.json())
}

const findTeamForUser = (uid) => {
  return fetch(`${TEAM_URL}/${uid}/users`).then(response => response.json())
}

const findTeamForGame = (uid) => {
  return fetch(`${TEAM_URL}/${uid}/game`).then(response => response.json())
}

const findTeamForPlayer = (uid) => {
  return fetch(`${TEAM_URL}/${uid}/player`).then(response => response.json())
}

export const deleteTeam = (id) =>
    fetch(`${TEAM_URL}/${id}`, {
      method: "DELETE"
    })

export const createTeam = (team) =>
    fetch(TEAM_URL, {
      method: 'POST',
      body: JSON.stringify(team),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const updateTeam = (id, team) =>
    fetch(`${TEAM_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(team),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export default {
  findAllTeam,
  findTeamById,
  findTeamForUser,
  findTeamForGame,
  findTeamForPlayer,
  deleteTeam,
  createTeam,
  updateTeam
}