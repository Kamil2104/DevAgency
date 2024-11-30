import React from 'react'

import Header from '../../components/Sections/Header/Header'
import Footer from '../../components/Sections/Footer/Footer'

import Form from '../../components/Sections/Form/Form'

import Title from './components/Title'
import Subheading from './components/Subheading'
import PointHeading from './components/PointHeading'
import Subpoint from './components/Subpoint'
import Text from './components/Text'

import useFormContext from '../../hooks/useFormContext'
import useFormVisibility from '../../hooks/useFormVisibility';

import './PrivacyPolicyPage.css'

const PrivacyPolicyPage: React.FC = () => {
  const { isFormDisplayed } = useFormContext()
  const { isFormVisible } = useFormVisibility();

  return (
    <section className='privacyPolicyPage'>
      <Header />
      <div className='privacyPolicyContent'>
        <Title value='Privacy Police' />

        <Subheading value='Introduction' style={{ marginBottom: '.5em' }}/>
        <Text value='Our mission is not only to ensure your sense of security but also to simplify and expedite the process of purchasing our products. We create a space where you can easily and comfortably place an order, knowing that your data is fully protected.'  />
        <Text value='The following Privacy Policy aims to inform you about how we use your personal data, while complying with all requirements of Regulation (EU) 2016/679 of the European Parliament and of the Council, dated April 27, 2016 (hereinafter referred to as "GDPR").' />

        <PointHeading value='1. Data controller' />
        <Text value='The controller of personal data collected and processed through the program is ……………., headquartered in ………….., registered under number ………………., hereinafter referred to as the "Controller." The Controller ensures the protection of privacy and compliance with personal data protection laws, particularly GDPR (Regulation (EU) 2016/679).' />

        <PointHeading value='2. Purposes and legal basis for processing personal data'/>
        <Text value='Personal data is processed by the Controller for the following purposes:'/>
        <Subpoint value='Handling inquiries and customer contact - Processing data to respond to inquiries submitted via the contact form and to present our company&apos;s product and service offers. The legal basis for processing is the necessity to take steps prior to entering into a contract, pursuant to Article 6(1)(b) GDPR.'/>
        <Subpoint value='Direct marketing of the Controller&apos;s products and services - If the user has consented to data processing for marketing purposes, the Controller will process personal data to send commercial information about products and services. The legal basis for processing is the consent of the data subject, pursuant to Article 6(1)(a) GDPR.'/>
        <Text value='In all cases, data is processed only to the extent necessary to achieve the above purposes, respecting personal data protection principles.'/>

        <Subheading value='Legal bases for processing personal data:'/>
        <Subpoint value='Handling inquiries and customer contact - Processing is necessary to respond to inquiries submitted via the contact form, based on the data subject&apos;s request before entering into a contract. Legal basis: Article 6(1)(b) GDPR.' />
        <Subpoint value='Direct marketing of the Controller&apos;s products and services &apos; If consent has been given, personal data is processed to provide commercial information about the Controller&apos;s products and services. Legal basis: Article 6(1)(a) GDPR.' />
        <Subpoint value='Fulfilling legal obligations - Regarding the storage of certain data for evidentiary purposes, handling complaints, claims, or requests in compliance with legal provisions. Legal basis: Article 6(1)(c) GDPR.' />
        <Subpoint value='Legitimate interests of the Controller - May include actions related to ensuring website security and preventing fraud. Legal basis: Article 6(1)(f) GDPR.' />

        <PointHeading value='3. Sharing Personal Data' />
        <Text value='Users&apos; personal data may be shared only in cases and under the principles established by law, particularly GDPR, to ensure the proper functioning of the program supporting legal professionals&apos; tasks. The Controller may share personal data with the following entities:'/>
        <Subpoint value='Entities processing personal data on behalf of the Controller - For technical and IT services, as well as cloud data hosting. Data is processed through an external platform used to store and organize data. Processing is based on a data processing agreement, pursuant to Article 28 GDPR, ensuring an adequate level of data protection.'/>
        <Subpoint value='Public authorities and institutions - To the extent necessary to fulfill legal obligations imposed on the Controller by applicable laws, such as GDPR, the AI Act, DORA, and other applicable regulations.'/>
        <Subpoint value='Other entities when necessary to fulfill the Controller&apos;s legitimate interests - Only when such data transfer is essential for the program&apos;s proper functioning and the provision of services to users, such as cooperation with technology support providers.'/>
        <Text value='The Controller ensures that personal data will not be transferred to third countries or international organizations unless conditions under the law, including Articles 44-49 GDPR, ensuring an adequate level of data protection, are met.'/>

        <PointHeading value='4. Personal Data Retention Period' />
        <Text value='Personal data will be retained for the duration necessary to achieve the purposes for which it was collected, including:'/>
        <Subpoint value='Data processed for inquiries and customer contact - Retained as long as required to handle the inquiry, and for up to 6 months afterward for evidentiary purposes, unless the law mandates a longer retention period.'/>
        <Subpoint value='Data processed based on consent for marketing purposes - Retained until the consent is withdrawn by the data subject. After withdrawal, data may be kept for up to 3 years for compliance documentation purposes.'/>
        <Subpoint value='Data processed under legal obligations - Retained for the duration required by applicable laws, e.g., accounting or tax laws may require data retention for 5 years from the end of the tax year.'/>
        <Subpoint value='Data processed for legitimate interests - Retained for as long as necessary to achieve those interests or until a valid objection to processing is raised.'/>
        <Text value='After these periods, personal data will be deleted or anonymized, unless legal provisions require continued processing.'/>

        <PointHeading value='5. Rights of Data Subjects' />
        <Text value='Every individual whose data is processed by the Controller has the right to:' />
        <Subpoint value='Access their personal data,' />
        <Subpoint value='Rectify their personal data,' />
        <Subpoint value='Delete their personal data ("right to be forgotten"),' />
        <Subpoint value='Restrict the processing of their personal data,' />
        <Subpoint value='Transfer their personal data,' />
        <Subpoint value='Object to the processing of their personal data,' />
        <Subpoint value='Withdraw consent at any time (if processing is based on consent).' />
        <Text value='To exercise these rights, please contact the Controller via email at: …………. Users also have the right to file a complaint with the President of the Personal Data Protection Office if they believe that their data is being processed in violation of the law.' />

        <Subheading value='Cookies' style={{ marginTop: '2em', marginBottom: '.5em' }}/>
        <Text value='The website does not use cookies or other tracking technologies that allow user identification or activity monitoring. No information about website visitors is automatically collected or stored in a manner that enables identification or behavior analysis.'/>
      </div>
      <Footer />
      {isFormVisible && <Form isFormDisplayed={isFormDisplayed} />}
    </section>
  )
}

export default PrivacyPolicyPage