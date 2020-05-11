import React, { Fragment } from 'react'
import { Col, Row, Accordion, Button } from 'react-bootstrap'
import AccordionCard from './../shared/AccordionCard'

const AuthHome = ({ user }) => (
  <Fragment>
    The user is signed in!
    <Row>
      <Button className='btn-primary'>Create new workout</Button>
    </Row>
    <Row>
      <Col>
        Upcoming workouts will go here
        <Accordion>
          <AccordionCard
            key='1'
            headerContent='Example upcoming workout'
            bodyContent='Example stats, description'
          />
        </Accordion>
      </Col>
      <Col>
        Completed workouts will go here
        <Accordion>
          <AccordionCard
            key='1'
            headerContent='Example completed workout'
            bodyContent='Example stats, description'
          />
        </Accordion>
      </Col>
    </Row>
  </Fragment>
)

export default AuthHome
