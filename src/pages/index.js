/* eslint-disable */
import {
  faExclamationTriangle,
  faFingerprint
} from '@fortawesome/free-solid-svg-icons';
import { Col, Container, Figure, Row } from 'react-bootstrap';

import noHex from '../images/gatsby-icon.png';
import pirateshipProof from '../images/proof-pirateship.png';
import paypalProof from '../images/proof-paypal.png';
import firstDiscordProof from '../images/proof-discord.png';
import secondDiscordProof from '../images/proof-discord-2.png';
import thirdDiscordProof from '../images/proof-discord-3.png';

import Layout from '../components/layout.js';
import ContentCard from '../components/contentCard.js';

export default function IndexPage() {
  return (
    <Layout title="Home" description="The truth about ItsHexical.">
      <Container>
        <ContentCard
          icon={faExclamationTriangle}
          text="ItsHexical (hexical.me) Is A Fraud"
        >
          <Container fluid>
            <Row className="d-flex align-items-xl-center">
              <Col lg={4} md={6} sm={12}>
                <Figure>
                  <Figure.Image
                    width={512}
                    src={noHex}
                    alt="Do not support the content creator ItsHexical!"
                  />
                </Figure>
              </Col>
              <Col>
                <h3>What Happened</h3>
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
                  server. We exchanged recipes, I sent him various gifts of my
                  own free will, expecting nothing in return. However, I also
                  loaned him money with no interest to help take care of his
                  child / bills and gave him my pre-ordered Steam Deck when he
                  couldn&apos;t get one. I did expect to be repaid for those
                  things, and was clear about that with him. I considered him a
                  good friend who was trustworthy, just down on his luck
                  financially.
                </p>
                <p>
                  This all changed when he stole $200 from two friends of mine
                  outright by taking keyboard commissions, then ghosting them
                  and me as well. He was banned from the DIY eJuice Discord
                  server as a result of his fraud.
                </p>
                <p>
                  He owes me $1,202 at present. I am not putting this
                  information up to create drama or to get my money back. I
                  don&apos;t use social media, so this is the only way I have to
                  spread the message so that others are not defrauded by him.
                </p>
                <h3>Moving Forward</h3>
                <p>
                  If you sent him money for a keyboard commission and did not
                  receive anything,{' '}
                  <a
                    href="https://secure.ag.state.mi.us/complaints/net-crimes.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    file a complaint!
                  </a>
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
                  should not be trusted, funded, or supported if people want
                  their money spent or used for what he says he uses it for.
                </p>
                <p>
                  I have reason to believe he has spent money I sent him for his
                  child&apos;s diapers on drugs.
                </p>
              </Col>
            </Row>
          </Container>
        </ContentCard>
        <ContentCard icon={faFingerprint} text="My Evidence">
          <Container fluid>
            <Row>
              <Col md={12} lg={6} className="d-flex justify-content-center">
                <Figure>
                  <Figure.Image width={480} src={paypalProof} />
                  <Figure.Caption className="text-center">
                    PayPal Transaction List Showing Money Owed By ItsHexical
                  </Figure.Caption>
                </Figure>
              </Col>
              <Col
                md={12}
                lg={6}
                className="d-flex justify-content-center align-items-center"
              >
                <Figure>
                  <Figure.Image width={480} src={pirateshipProof} />
                  <Figure.Caption className="text-center">
                    PirateShip Transaction List Showing Packages Sent To Hex
                  </Figure.Caption>
                </Figure>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-center">
              <Col xs={4}>
                <Figure>
                  <Figure.Image width={480} src={firstDiscordProof} />
                  <Figure.Caption className="text-center">
                    Showing that we were friends
                  </Figure.Caption>
                </Figure>
              </Col>
              <Col xs={4}>
                <Figure>
                  <Figure.Image width={480} src={secondDiscordProof} />
                  <Figure.Caption className="text-center">
                    Showing that I gave my Steam Deck to him
                  </Figure.Caption>
                </Figure>
              </Col>
              <Col xs={4}>
                <Figure>
                  <Figure.Image width={480} src={thirdDiscordProof} />
                  <Figure.Caption className="text-center">
                    Showing that I bailed him out at a moment&apos;s notice
                  </Figure.Caption>
                </Figure>
              </Col>
            </Row>
          </Container>
        </ContentCard>
      </Container>
    </Layout>
  );
}
