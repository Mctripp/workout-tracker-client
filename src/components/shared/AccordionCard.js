import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'

const AccordionCard = ({ key, headerContent, bodyContent }) => (
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey={`${key}`}>
        {headerContent}
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey={`${key}`}>
      <Card.Body>{bodyContent}</Card.Body>
    </Accordion.Collapse>
  </Card>
)

export default AccordionCard
