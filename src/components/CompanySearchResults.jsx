import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'
import { getCompanySearchResultsAction } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const CompanySearchResults = () => {
  const dispatch = useDispatch()
  const searchResultsFromRedux = useSelector((state) => state.search.content)
  useEffect(() => {
    dispatch(getCompanySearchResultsAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          {searchResultsFromRedux.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
