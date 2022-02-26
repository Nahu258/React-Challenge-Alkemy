import { useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import MyMenu from '../components/MyMenu'
import menuService from '../services/menuInfo'

const ResultsCard = ({menu}) => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState({price: 0, time: 0, hs:0})
  const [average, setAverage] = useState({time: 0, hs: 0})

  const getCardInfo = async (id) => {
    try {
      const info = await menuService.getRecipeInformation(id)
      // console.log(info)
      if (cart.length < 4) {
        setCart([...cart, info])
        updateTotal(info)
        updateAverage(info)
      }
    } catch(e) {
      console.log('Error')
      console.log(e)
    }
  }

  const updateTotal = (info) => {
    setTotal({
      time: total.time + info.readyInMinutes,
      price: total.price + info.pricePerServing,
      hs: total.hs + info.healthScore
    })
  }
  const updateAverage = (info) => {
    setAverage({
      time: total.time / cart.length,
      hs: total.hs / cart.length
    })
  }

  return (
    <div>
      <Row xl={4} lg={3} sm={2} xs={1} className="g-4">
      {Array.from({ length: menu.length }).map((_, idx) => (
        <Col key={menu[idx].id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={menu[idx].image} />
            <Card.Body>
              <Card.Title>{menu[idx].title}</Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">{menu[idx].restaurantChain}</Card.Subtitle> */}
              {/* <Card.Text>{menu[idx].summary}</Card.Text> */}
              <Link to={`/search/${menu[idx].id}`}>Details</Link>
              <Button onClick={() => getCardInfo(menu[idx].id)}>Add to Menu</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
      </Row>
      <Row>
        <MyMenu selected={cart} total={total} average={average}/>
      </Row>
    </div>
  )
}

export default ResultsCard
