import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import menuService from '../services/menuInfo'

export default function MenuPage() {
  const { id } = useParams()
  const [card, setCard] = useState(null)
  const [info, setInfo] = useState(null)
  useEffect(() => {
    const getNutritionLabel = async () => {
      try {
        const getCard = await menuService.getMenuNutritionLabel(id)
        const getInfo = await menuService.getRecipeInformation(id)
        setCard(getCard)
        setInfo(getInfo)
      } catch(e) {
        console.log('Error')
        console.log(e)
      }
    }
    getNutritionLabel()
  }, [id])



  return (
    <div>
      <h1>{info.title}</h1>
      <Row>
        <Col>
        {/* <img src={info.image}/> */}
        <h4>Aditional Info</h4>
        <ul>
          <li>Time: {info.readyInMinutes} minutes</li>
          <li>Price: ${info.pricePerServing}</li>
        </ul>
        </Col>
        <Col> 
          <div className="content" dangerouslySetInnerHTML={{__html: card}}></div>
        </Col>
      </Row>
    </div>
  )
}
