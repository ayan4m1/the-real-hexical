import {
  faExclamationTriangle,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';
import { Col, Container, Figure, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import noHex from '../images/gatsby-icon.png';
import pirateshipProof from '../images/proof-pirateship.png';
import paypalProof from '../images/proof-paypal.png';
import firstDiscordProof from '../images/proof-discord.png';
import secondDiscordProof from '../images/proof-discord-2.png';
import thirdDiscordProof from '../images/proof-discord-3.png';
import Layout from '../components/layout.js';

export default function IndexPage() {
  return (
    <Layout title="Home" description="The truth about ItsHexical.">
      <Container>
        <Row>
          <Col>
            <h1 className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={faExclamationTriangle}
                size="2x"
                className="me-4"
              />{' '}
              ItsHexical Is A Scammer
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={{ offset: 4, span: 4 }}>
            <Figure>
              <Figure.Image
                width={512}
                src={noHex}
                alt="Do not support the content creator ItsHexical!"
              />
            </Figure>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              I am a 30-something software developer. I became friends with
              ItsHexical / Hex over a period of years through the{' '}
              <a
                href="https://discord.gg/ejuice"
                target="_blank"
                rel="noopener noreferrer"
              >
                DIY eJuice Discord
              </a>{' '}
              server. We exchanged recipes, I sent him various gifts of my own
              free will, expecting nothing in return. However, I also loaned him
              money with no interest to help take care of his child / bills and
              gave him my pre-ordered Steam Deck when he couldn&apos;t get one.
              I did expect to be repaid for those things, and was clear about
              that with him. I considered him a good friend who was trustworthy,
              just down on his luck financially.
            </p>
            <p>
              This all changed when he stole $200 from two friends of mine
              outright by taking keyboard commissions and then ghosting them,
              and then ghosted me as well. He was banned from the DIY eJuice
              server because of his fraud and was removed from an admin position
              at the{' '}
              <a
                href="https://escaperestart.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                EscapeRestart gaming community
              </a>{' '}
              as a result of his fraud. He owes me $1,202 at present. I am not
              putting this information up to create drama; I don&apos;t use
              social media, and this is the only way I have to spread the
              message so that other innocent people are not defrauded by him. I
              have filed a complaint with his home state&apos;s Attorney
              General.
            </p>
            <p>
              Spread the word on every social media platform you use that{' '}
              <a
                href="https://hexical.me"
                target="_blank"
                rel="noopener noreferrer"
              >
                ItsHexical
              </a>{' '}
              should not be trusted, funded, or supported if people want their
              money spent or used for what he says he uses it for. I have reason
              to believe he has spent money I sent him for his child&apos;s
              diapers on drugs. Also, please contact him at{' '}
              <span className="font-monospace">
                itshexical at gmail dot com
              </span>{' '}
              to let him know how you feel about scammers in the influencer
              community.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="2x"
                className="me-4"
              />{' '}
              Evidence
            </h2>
            <Container fluid>
              <Row className="p-4">
                <Col xs={{ span: 8, offset: 4 }}>
                  <Figure>
                    <Figure.Image width={480} src={paypalProof} />
                    <Figure.Caption>
                      PayPal Transaction List Showing Money Owed By ItsHexical
                    </Figure.Caption>
                  </Figure>
                </Col>
              </Row>
              <Row className="p-4">
                <Col xs={4}>
                  <Figure>
                    <Figure.Image width={480} src={firstDiscordProof} />
                    <Figure.Caption>
                      Proof Hex and I were friends
                    </Figure.Caption>
                  </Figure>
                </Col>
                <Col xs={4}>
                  <Figure>
                    <Figure.Image width={480} src={secondDiscordProof} />
                    <Figure.Caption>
                      Proof I gave my Steam Deck to Hex
                    </Figure.Caption>
                  </Figure>
                </Col>
                <Col xs={4}>
                  <Figure>
                    <Figure.Image width={480} src={thirdDiscordProof} />
                    <Figure.Caption>
                      Proof I bailed him out with hundreds of dollars
                    </Figure.Caption>
                  </Figure>
                </Col>
              </Row>
              <Row className="p-4">
                <Col xs={{ span: 8, offset: 4 }}>
                  <Figure>
                    <Figure.Image width={480} src={pirateshipProof} />
                    <Figure.Caption>
                      PirateShip Transaction List Showing Packages Sent To Hex
                    </Figure.Caption>
                  </Figure>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
