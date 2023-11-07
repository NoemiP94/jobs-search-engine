import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'
import { getCompanySearchResultsAction } from '../redux/actions'
import { useDispatch } from 'react-redux'

const CompanySearchResults = (jobs) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCompanySearchResultsAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
