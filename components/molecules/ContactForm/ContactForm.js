import {formium} from '@/api/formium/connector'
import {FormiumForm} from '@formium/react'
import PropTypes from 'prop-types'
import {useState} from 'react'

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
      <p>
        Thank you! Your message has been received. Please give me a day or two
        to reply. Stay safe{' '}
        <span role="img" aria-label="Cheers emoji">
          🍻
        </span>
      </p>
    )
  }

  return (
    <FormiumForm
      data={form}
      onSubmit={async (values) => {
        await formium.submitForm('contact', values)
        setSuccess(true)
      }}
    />
  )
}

ContactForm.propTypes = {
  form: PropTypes.object.isRequired
}
