import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { Section, Aside, Ul } from '../../styles/base'

export default () => {
  return (
    <div>
      <Head>
        <title>Our Location | Jordan River Insurance</title>
      </Head>
      <Header />

      <Section>
        <Aside small leftAlignMobile>
          <Ul>
            <li>Jordan River Insurance</li>
            <li>877 West Baxter (Upstairs)</li>
            <li>South Jordan, UT 84095</li>
            <li><strong>Phone:</strong> (801) 803-5640</li>
            <li>Alt. Phone: (801) 566-3334</li>
            <li>Fax: (888) 502-6620</li>
            <li>
              <strong>Email:</strong>
              <a
                target='_blank'
                href='mailto:Dan@JordanRiverInsurance.com'>
                &nbsp;Dan@JordanRiverInsurance.com
              </a>
            </li>
          </Ul>

          <h3 className='c-header-text'>
            <strong>Office Hours:</strong>
          </h3>

          <Ul>
            <li>Monday - Thursday: 8am to 5pm</li>
            <li>Friday: 8am to 1pm</li>
          </Ul>
        </Aside>

        <Aside>
          <iframe
            width='100%'
            height='450'
            frameborder='0'
            src='https://www.google.com/maps/embed/v1/place?q=877%20West%20Baxter%20Dr%20South%20Jordan%2C%20UT%2084095&key=AIzaSyC76WYbULuF6xDmN0wEtNivoFurrfwjJkk'
            allowfullscreen />
        </Aside>
      </Section>

      <Footer />
    </div>
  )
}
