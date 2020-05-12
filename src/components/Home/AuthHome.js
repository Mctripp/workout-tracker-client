import React, { Fragment } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Accordion from 'react-bootstrap/Accordion'
import AccordionCard from './../shared/AccordionCard'
import CreateNewWorkout from './../CreateWorkout/CreateWorkoutButton'

const AuthHome = ({ user }) => {
  return (
    <Fragment>
      The user is signed in!
      <Row>
        <CreateNewWorkout/>
      </Row>
      <Row>
        <Col>
          Upcoming workouts will go here
          <Accordion>
            <AccordionCard
              eventKey="1"
              headerContent='Example upcoming workout 1'
              bodyContent='Example stats, description'
            />
            <AccordionCard
              eventKey="2"
              headerContent='Example upcoming workout 2'
              bodyContent='Example stats, description'
            />
          </Accordion>
        </Col>
        <Col>
          Completed workouts will go here
          <Accordion>
            <AccordionCard
              key="1"
              headerContent='Example completed workout 1'
              bodyContent='Example stats, description'
            />
          </Accordion>
        </Col>
      </Row>
    </Fragment>
  )
}

export default AuthHome
