import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import menuService from '../services/menuInfo'

export default function MenuPage() {
  const { id } = useParams()
  const [card, setCard] = useState(null)
  // const [info, setInfo] = useState(null)
  useEffect(() => {
    const getNutritionLabel = async () => {
      try {
        const getCard = await menuService.getMenuNutritionLabel(id)
        // const getInfo = await menuService.getRecipeInformation(id)
        setCard(getCard)
        // setInfo(getInfo)
      } catch(e) {
        console.log('Error')
        console.log(e)
      }
    }
    getNutritionLabel()
  }, [id])



  return (
    <div>
      <h1>Id: {id}</h1>
          <div className="content" dangerouslySetInnerHTML={{__html: card}}></div>
    </div>
  )
}
