import Header from '../components/Header'
import Footer from '../components/Footer'
import { Section, Aside } from '../styles/base'
import { LinkButton } from '../styles/components/buttons'

export default () => {
  return (
    <div>
      <Header />

      <Section hero>
        <img
          className='c-section-img'
          src='http://jordanriverinsurance.com/wp-content/uploads/2017/04/elp_banner_0.png'
          alt='Jordan River Insurance' />
        <LinkButton
          target='_blank'
          href='http://calendly.com/jri/call'>
          Schedule a Consultation
        </LinkButton>
      </Section>

      <Section gray centerText>
        <h3 className='c-header-text'>
          <strong>Why Choose Jordan River Insurance?</strong>
        </h3>
        <h1 className='c-header-text'>You save because we're independent agents</h1>
        <p><i>
          You always get the best coverage for the best price because we're an
          <strong>&nbsp;independent</strong> Auto, Home, Life, Health, &amp; Business
          Insurance agency. We shop <strong>more than 36 insurers</strong> to
          provide you with insurance tailored to your needs and phase of life.
        </i></p>
        <img
          className='c-section-img'
          src='http://jordanriverinsurance.com/wp-content/uploads/2017/03/logos@2x-1060x250-8675.png'
          alt='Jordan River Insurance' />
        <p><i>
          <strong>
            Save hundreds even thousand because we're not tied to one provider
          </strong>
        </i></p>
      </Section>

      <Section>
        <Aside lastOnMobile>
          <img
            className='c-section-img'
            src='http://jordanriverinsurance.com/wp-content/uploads/2017/03/match-1@2x-(1)-520x510-4366.png' />
        </Aside>

        <Aside>
          <h1 className='c-header-text'>We Look ar your Risk Profile</h1>
          <h3 className='c-header-text'><i>
            We have 36 Provider partners, to choose from to fit your risk profile
          </i></h3>
          <p className='c-header-text'>
            Most people don't know that insurers charge different prices for
            the same service. Depending on if you're their ideal customer or not
            can cost you hundreds or thousands of dollars a year. Many people
            unknowingly pay high premiums because of a risk profile mismatch.
          </p>
          <p>
            The good news is that different providers have different ideal
            customers. We have access to more than 36 insurance providers
            and we match your risk profile to the best providers for you.
          </p>
        </Aside>
      </Section>

      <Section gray>
        <Aside textAlignRight>
          <h1 className='c-header-text'>We're your advocates.</h1>
          <p className='c-header-text'>
            Insurance can be confusing
          </p>
          <p>
            Our loyalty is to you, the customer, not the insurance provider.
            We're here to be your advocates. Not sure your premiums will rise
            if you report that windshield replacement? Give us a call and we'll
            let you know if it's worth it. Unsure of how having a baby will affect
            your homeowners insurance? We'll help you find answers.
          </p>
        </Aside>

        <Aside>
          <img
            className='c-section-img'
            src='http://jordanriverinsurance.com/wp-content/uploads/2017/03/lifesaver@2x-475x430-6553.png' />
        </Aside>
      </Section>

      <Footer />
    </div>
  )
}
