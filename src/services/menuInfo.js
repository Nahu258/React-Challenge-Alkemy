import axios from 'axios'

const getMenuNutritionLabel= async id => {
    const baseUrl = `https://api.spoonacular.com/recipes/${id}/nutritionLabel?apiKey=${process.env.REACT_APP_APIKEY}`
    const { data } = await axios.get(baseUrl)
    // console.log(data)
    return data
}

const getRecipeInformation= async id => {
    const baseUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_APIKEY}`
    const { data } = await axios.get(baseUrl)
    // console.log(data)
    return data
}



export default { getMenuNutritionLabel, getRecipeInformation }
