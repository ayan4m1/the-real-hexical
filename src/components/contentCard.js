import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContentCard({ icon, text, children }) {
  return (
    <Card bg="primary" color="light" className="mb-4">
      <Card.Header className="d-flex align-items-center fs-1">
        <FontAwesomeIcon icon={icon} size="2x" className="me-2" /> {text}
      </Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
}

ContentCard.propTypes = {
  icon: PropTypes.object,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
