import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'

const cardStyle = {
  background: '#d7dbe3'
}

const AccordionCard = ({ eventKey, headerContent, bodyContent }) => (
  <Card style={cardStyle}>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey={`${eventKey}`}>
        {headerContent}
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey={`${eventKey}`}>
      <Card.Body>{bodyContent}</Card.Body>
    </Accordion.Collapse>
  </Card>
)

export default AccordionCard
