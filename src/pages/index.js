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
import firstERProof from '../images/proof-er.png';
import secondERProof from '../images/proof-er-2.png';
import thirdERProof from '../images/proof-er-3.png';

import Layout from '../components/layout.js';
import ContentCard from '../components/contentCard.js';

export default function IndexPage() {
  return (
    <Layout title="The Real Hexical" description="ItsHexical is a scammer!">
      <Container>
        <ContentCard
          icon={faExclamationTriangle}
          text="ItsHexical (hexical.me) Is A Scammer"
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
                  I am a 30-something software developer. I became close friends
                  with ItsHexical / Hex over a period of years through the{' '}
                  <a
                    href="https://discord.gg/ejuice"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DIY eJuice Discord
                  </a>{' '}
                  server.
                </p>
                <p>
                  This all changed when he stole a couple hundred dollars by
                  taking a keyboard commission from our mutual friend, then
                  ghosting him and me at the same time once it became clear he
                  was not going to ship a keyboard. He was banned from the DIY
                  eJuice Discord server as a result of this conduct.
                </p>
                <p>
                  He claims that he was unable to ship the keyboard because of a
                  lack of funds - even setting aside the question of what he
                  spent the intitial shipping money on, this is bogus, because
                  the person involved offered to pay him a second time{' '}
                  <em>specifically</em> to cover the extra shipping. He ghosted
                  them anyway.
                </p>
                <p>
                  Hex stopped responding to my messages and emails, then banned
                  me from all mutual Discord servers he had that power on. It is
                  obvious from those actions that he knew he was responsible for
                  the keyboard, but chose to try and avoid an uncomfortable
                  situation instead of being honest and upfront.
                </p>
                <p>
                  Also, Hex owed me about $1,200 in unpaid loans at the time. I
                  reported these concerns to the admins of the{' '}
                  <a
                    href="https://www.escaperestart.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    EscapeRestart
                  </a>{' '}
                  gaming community, who accepted the validity of my assertions
                  but then tried to sweep them under the table because Hex was
                  in the process of stepping down as their lead community admin.
                  I had to call him out on their Discord server because he had
                  ghosted me everywhere else. Now he will not return my emails
                  again, because he is a child who runs from difficult
                  conversations.
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
                  <Figure.Image width={480} src={firstERProof} />
                  <Figure.Caption className="text-center">
                    Showing that EscapeRestart admin believed my evidence
                  </Figure.Caption>
                </Figure>
              </Col>
              <Col xs={4}>
                <Figure>
                  <Figure.Image width={480} src={secondERProof} />
                  <Figure.Caption className="text-center">
                    Showing that EscapeRestart admin said Hex needed to step
                    down in part because of his actions
                  </Figure.Caption>
                </Figure>
              </Col>
              <Col xs={4}>
                <Figure>
                  <Figure.Image width={480} src={thirdERProof} />
                  <Figure.Caption className="text-center">
                    Showing that the same admin then told me not to dicusss this
                    when I had no other venue to discuss it
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
