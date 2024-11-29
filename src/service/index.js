import axios from 'axios'

export const getFounderData = async founderId => {
    return await axios.get(`https://randomuser.me/api/?seed=${founderId}`)
}

export const getCompanyData = async founderId => {
    return await axios.get(
        `https://fakerapi.it/api/v1/companies?seed=${founderId}&_quantity=1`,
        // https://fakerapi.it/api/v2/companies?_quantity=1

    )
}