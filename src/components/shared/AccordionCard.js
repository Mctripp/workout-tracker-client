import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'

const AccordionCard = ({ eventKey, headerContent, bodyContent }) => (
  <Card>
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
