import {formium} from '@/api/formium/connector'
import {FormiumForm} from '@formium/react'
import PropTypes from 'prop-types'
import {useState} from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import styles from './ContactForm.module.css'

/**
 * Render the Contact Form component.
 *
 * @author Greg Rickaby
 * @param {object} props      The component attributes as props.
 * @param {object} props.form The form data.
 * @return {Element}          The ContactForm component.
 */
export default function ContactForm({form}) {
  const [success, setSuccess] = useState(false)
  const [verificationError, setVerificationError] = useState(false)
  const [notHuman, setHuman] = useState(true)

  /**
   * Handle recaptcha verification state.
   */
  function toggleRecaptcha() {
    setHuman((prev) => !prev)
    setVerificationError(false)
  }

  /**
   * Handle form submissions.
   *
   * @param {object} values The form input values.
   * @return {boolean}      Whether or not the form submitted successfully.
   */
  async function handleSumbit(values) {
    // If recaptcha verification fails...
    if (notHuman) {
      setVerificationError(true)
      return false
    }

    // Submit the form values to Formium.
    const formValue = await formium.submitForm('contact', values)

    // Update state.
    setSuccess(true)
    setVerificationError(false)

    return formValue
  }

  // If the form submitted successfully...
  if (success) {
    return (
      <p className={styles.successMessage}>
        Your message has been sent. Please allow me 1-2 business days to reply.
        Stay safe{' '}
        <span role="img" aria-label="Cheers emoji">
          🍻
        </span>
      </p>
    )
  }

  return (
    <div className={styles.formWrap}>
      <FormiumForm data={form} onSubmit={handleSumbit} />
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={toggleRecaptcha}
      />
      {verificationError && (
        <p className={styles.errorMessage}>Please click the checkbox above.</p>
      )}
    </div>
  )
}

ContactForm.propTypes = {
  form: PropTypes.object.isRequired
}
