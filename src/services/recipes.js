import axios from 'axios'

const getRecipes = async query => {
    // https://api.spoonacular.com/recipes/complexSearch
    const baseUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${process.env.REACT_APP_APIKEY}`
    const { data } = await axios.get(baseUrl)
    // console.log(data)
    return data
}

export default { getRecipes }
