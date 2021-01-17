import {formium} from '@/api/formium/connector'
import {FormiumForm} from '@formium/react'
import PropTypes from 'prop-types'
import {useState} from 'react'
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
      <FormiumForm
        data={form}
        onSubmit={async (values) => {
          await formium.submitForm('contact', values)
          setSuccess(true)
        }}
      />
    </div>
  )
}

ContactForm.propTypes = {
  form: PropTypes.object.isRequired
}
