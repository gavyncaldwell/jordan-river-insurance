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
            <li>Physical Address:</li>
            <li>Jordan River Insurance</li>
            <li>8539 S Redwood Road</li>
            <li>West Jordan, UT 84088</li>
            <br/>
            <li>Mailing Address:</li>
            <li>P.O. Box 95083 </li>
            <li>South Jordan, UT 84095</li>
            <br/>
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
            src='https://www.google.com/maps/embed/v1/place?q=8539+S+Redwood+Rd,+West+Jordan,+UT+84088/@40.5961117,-111.9400508,17z/data=!3m1!4b1!4m5!3m4!1s0x875288c5a84880d1:0x8354f580bd0353e7!8m2!3d40.5961117!4d-111.9378568'
            allowfullscreen />
        </Aside>
      </Section>

      <Footer />
    </div>
  )
}
