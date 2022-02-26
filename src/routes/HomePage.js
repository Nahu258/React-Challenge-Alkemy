import { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ResultsCard from '../components/ResultsCard'
import searchService from '../services/recipes'

export default function HomePage() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    if (!window.localStorage.getItem('loggedChallengeUser')) {
      navigate('/login')
    }
  }, [navigate])

  const handleSearch = async (e) => {
    e.preventDefault()
    try {
      const search = await searchService.getRecipes(query)
      setResults(search.results)
      // console.log(search.results)
    } catch(e) {
      console.log('Error')
      console.log(e)
    }
  }

  return (
    <div>
      <Form onSubmit={handleSearch}>
        <Form.Group className="mb-3">
          <Form.Control onChange={({target}) => setQuery(target.value)} 
            id="query" 
            value={query}
            type="query" 
            placeholder="Search" 
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
      {/* <MyMenu/> */}
      <h3>Menu available</h3>
      <hr />
      <ResultsCard menu={results}/>
    </div>
  )
}
