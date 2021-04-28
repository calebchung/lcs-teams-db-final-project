const USERS_URL = "http://localhost:8080/api/users";

const findAllUsers = () => {
    return fetch(USERS_URL).then(response => response.json())
}

const findUserById = (id) => {
    return fetch(`${USERS_URL}/${id}`).then(response => response.json())
}

const findUserForTeam = (uid) => {
  return fetch(`${USERS_URL}/${uid}/users`).then(response => response.json())
}

export const deleteUser = (id) =>
    fetch(`${USERS_URL}/${id}`, {
        method: "DELETE"
    })

export const createUser = (user) =>
    fetch(USERS_URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updateUser = (id, user) =>
    fetch(`${USERS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export default {
    findAllUsers,
    findUserById,
    findUserForTeam,
    deleteUser,
    createUser,
    updateUser
}