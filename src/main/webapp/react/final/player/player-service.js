const PLAYERS_URL = "http://localhost:8080/api/player";

const findAllPlayers = () => {
    return fetch(PLAYERS_URL).then(response => response.json())
}

const findPlayerById = (id) => {
    return fetch(`${PLAYERS_URL}/${id}`).then(response => response.json())
}

const findPlayerForTeam = (pid) => {
  return fetch(`${PLAYERS_URL}/${pid}/player`).then(response => response.json())
}

export const deletePlayer = (id) =>
    fetch(`${PLAYERS_URL}/${id}`, {
        method: "DELETE"
    })

export const createPlayer = (player) =>
    fetch(PLAYERS_URL, {
        method: 'POST',
        body: JSON.stringify(player),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updatePlayer = (id, player) =>
    fetch(`${PLAYERS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(player),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export default {
    findAllPlayers,
    findPlayerById,
    findPlayerForTeam,
    deletePlayer,
    createPlayer,
    updatePlayer
}