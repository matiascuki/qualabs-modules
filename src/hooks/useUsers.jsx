import DATA from '../mock.js'

export const getModules = () => {
    // Get modules from data and reverse them to fit the Ux mock
    return Object.keys(DATA).slice(0).reverse()
}

export const getSubModules = (module) => {
    // Get sub modules from the module
    return Object.keys(DATA[module])
}

export const getUsers = (module, provider) => {
    if (module in DATA) {
        if (provider in DATA[module]) {
            return Array.from(DATA[module][provider])
        }
    }
    return [];
}



