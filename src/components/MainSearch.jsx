import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Job from './Job'
import { useDispatch, useSelector } from 'react-redux'
import { getMainSearchAction } from '../redux/actions'

const MainSearch = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const dispatch = useDispatch()

  const searchResultsFromRedux = useSelector((state) => state.search.content)

  const handleSumbit = async (e) => {
    e.preventDefault()
    dispatch(getMainSearchAction(query))
  }
  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
          <Button onClick={() => navigate('/favourites')}>Favourites</Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSumbit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {searchResultsFromRedux.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
