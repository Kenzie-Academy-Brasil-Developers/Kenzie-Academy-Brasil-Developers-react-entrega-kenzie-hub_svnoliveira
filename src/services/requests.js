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

export const atemptTechRegistration = async ( token, formData ) => {
    try {
        const { data } = await api.post('/users/techs', formData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return data
    } catch (error) {
        return false
    }
}

export const atemptTechEdit = async (token, techId, level) => {
    try {
        const { data } = await api.put(`/users/techs/${techId}`, {
            status: level
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return data
    } catch (error) {
        return false
    }
}

export const atemptTechRemoval = async ( token, techId) => {
    try {
        await api.delete(`/users/techs/${techId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return true
    } catch (error) {
        return false
    }
}

export const getLoggedUser = async ( token ) => {
    try {
        const { data } = await api.get('/profile', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return data
    } catch (error) {
        return false
    }
}