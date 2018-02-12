import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Section, Aside } from '../styles/base'

export default () => {
  return (
    <div>
      <Head>
        <title>About | Jordan River Insurance</title>
      </Head>
      <Header />

      <Section>
        <Aside placeholder />

        <Aside>
          <h2>
            Headquarted in West Jordan, Utah, Jordan River Insurance is a multi-lines
            independent insurance agency. We offer auto, home, life, health, &amp;
            business insurance coverage. Our aim is to deliver you unparalleled
            service with uncompromising integrity at competitive prices.
          </h2>
        </Aside>
      </Section>

      <Section>
        <Aside borderAside />

        <Aside>
          <h2 className='c-header-text'>Unparalleled Service</h2>
          <p>
            We acheive this level of service by reviewing your policies annually
            to ensure that you have just the right amount of coverage. Our office
            will always make your insurance inquiries our top priority. We
            recognize that you can take your insurance business anywhere and
            consider it a privilege to handle your insurance needs.
          </p>
        </Aside>
      </Section>

      <Section>
        <Aside borderAside />

        <Aside>
          <h2 className='c-header-text'>Uncompromising Integrity</h2>
          <p>
            We feel that if we can alway do what is right for you, we will have
            you as a lifelong customer and friend. We never jeopardize a long term
            relationship with a client for a short term gain for our agency.
            We recognize the long term value of a customer and hope to be your
            agent for years to come.
          </p>
        </Aside>
      </Section>

      <Section>
        <Aside borderAside />

        <Aside>
          <h2 className='c-header-text'>Competitive Prices</h2>
          <p>
            We have relationships with dozens fo carriers so we can always provide
            you with the most competitive rates. We're commited yo you as an industry
            expert. We stay informed so we can deliver the best values that our
            industry has to offer.
          </p>
        </Aside>
      </Section>

      <Footer />
    </div>
  )
}
