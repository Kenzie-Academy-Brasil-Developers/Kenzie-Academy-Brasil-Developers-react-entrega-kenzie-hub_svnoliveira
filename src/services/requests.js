import { api } from "./api"

export const atemptRegistration = async (user) => {
    try {
        const { data } = await api.post('/users', {
            email: user.email,
            password: user.password,
            name: user.name,
            bio: user.bio,
            contact: user.contact,
            course_module: user.level
        })
        return data

    } catch (error) {
        return false
    }
}

export const atemptLogin = async (userInfo) => {
    try {
        const { data } = await api.post('/sessions', userInfo)
        return data
    } catch (error) {
        return false
    }
}

export const getTechnologiesByID = async (userID) => {
    try {
        const { data } = await api.get(`/users/${userID}`)
        return data.techs
    } catch (error) {
        return false
    }
}