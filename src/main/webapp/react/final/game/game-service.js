const GAMES_URL = "http://localhost:8080/api/game";

const findAllGames = () => {
  return fetch(GAMES_URL).then(response => response.json())
}

const findGameById = (id) => {
  return fetch(`${GAMES_URL}/${id}`).then(response => response.json())
}

const findGameForTeam = (tid) => {
  return fetch(`${GAMES_URL}/${tid}/game`).then(response => response.json())
}

export const deleteGame = (id) =>
    fetch(`${GAMES_URL}/${id}`, {
      method: "DELETE"
    })

export const createGame = (game) =>
    fetch(GAMES_URL, {
      method: 'POST',
      body: JSON.stringify(game),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const updateGame = (id, game) =>
    fetch(`${GAMES_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(game),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export default {
  findAllGames,
  findGameById,
  findGameForTeam,
  deleteGame,
  createGame,
  updateGame
}