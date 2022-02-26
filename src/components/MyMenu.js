import { useEffect, useState } from "react"
import { Row, Col } from "react-bootstrap"

const MyMenu = ({selected, total}) => {
    const [average, setAverage] = useState({time: 0, hs: 0})
    useEffect(() => {
        setAverage({
            time: total.time / selected.length,
            hs: total.hs / selected.length
        })
    }, [selected, total])

    return (
        <div>
            <hr />
            <h3>Menu Selected</h3>
            <hr />
            <Row>
                <Col>Recipe</Col>
                <Col>Vegan</Col>
                <Col>Healt Score</Col>
                <Col>Time</Col>
                <Col>Price</Col>
                <Col>X</Col>
            </Row>
            <hr/>
            {Array.from({ length: selected.length }).map((_, idx) => (
                <Row key={selected[idx].id}>
                    <Col>{selected[idx].title}</Col>
                    {
                      selected[idx].vegan 
                        ?<Col>Yes</Col>
                        :<Col>No</Col>
                    }
                    <Col>{selected[idx].healthScore}</Col>
                    <Col>{selected[idx].readyInMinutes} Min</Col>
                    <Col>${selected[idx].pricePerServing}</Col>
                    <Col>X</Col>
                </Row>
            ))}
            <hr/>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col>Average: {average.hs.toFixed(2)}</Col>
                <Col>Average: {average.time.toFixed(2)}</Col>
                <Col>Total: ${total.price}</Col>
                <Col></Col>
            </Row>
            <hr/>
        </div>
    )
}

export default MyMenu
