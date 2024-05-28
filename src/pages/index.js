import {
  faExclamationTriangle,
  faHeartCircleExclamation,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';
import { Col, Container, Figure, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import pirateshipProof from '../images/proof-pirateship.png';
import paypalProof from '../images/proof-paypal.png';
import Layout from '../components/layout.js';

export default function IndexPage() {
  return (
    <Layout title="Home" description="The truth about ItsHexical.">
      <Container>
        <h1 className="d-flex align-items-center">
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            size="2x"
            className="me-4"
          />{' '}
          ItsHexical Is A Scammer
        </h1>
        <p>
          I became friends with him over a period of years through DIY e-liquid
          Discord server. I sent him a Steam Deck and cash to help for his child
          / rent / etc. I considered him a good friend who was trustworthy, just
          down on his luck financially. Then, he stole $200 from a friend
          outright by taking a keyboard commission and then ghosting the friend,
          and he ghosted me at that time as well. He owes me $1,202 at present.
          I have filed a complaint with his home state&apos;s Attorney General.
        </p>
        <h2 className="d-flex align-items-center">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="2x"
            className="me-4"
          />{' '}
          Evidence
        </h2>
        <Container fluid className="d-flex justify-content-center">
          <Row className="p-4">
            <Col xs={12}>
              <Figure>
                <Figure.Image width={480} src={paypalProof} />
                <Figure.Caption>
                  PayPal Transaction List Showing Money Owed By ItsHexical
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
          <Row className="p-4">
            <Col xs={12}>
              <Figure>
                <Figure.Image width={480} src={pirateshipProof} />
                <Figure.Caption>
                  PirateShip Transaction List Showing Packages Sent To
                  ItsHexical
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
        </Container>
        <h2 className="d-flex align-items-center">
          <FontAwesomeIcon
            icon={faHeartCircleExclamation}
            size="2x"
            className="me-4"
          />{' '}
          How To Help
        </h2>
        <p className="pb-4">
          Tell everyone you know on every social media platform you use that{' '}
          <a
            href="https://hexical.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            ItsHexical
          </a>{' '}
          should not be trusted or funded if they want their money spent or used
          wisely. Contact him at <pre>itshexical at gmail dot com</pre> to let
          him know how you feel about scammers in the influencer community.
        </p>
      </Container>
    </Layout>
  );
}
