import React, { useState } from 'react'

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    email: '',
    orderRef: '',
    category: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const categories = [
    'Order query',
    'Computer issue',
    'Billing',
    'General',
    'Data protection and privacy',
    'Feedback',
    'Other'
  ]

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required.'
    if (!form.email.trim()) newErrors.email = 'Email is required.'
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Please enter a valid email address.'
    if (!form.category) newErrors.category = 'Please select a category.'
    if (!form.message.trim()) newErrors.message = 'Message is required.'
    return newErrors
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleBlur = e => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      category: true,
      message: true
    })
    
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true)
    }
  }

  const getFieldClassName = (fieldName) => {
    const hasError = errors[fieldName] && touched[fieldName]
    const hasValue = form[fieldName] && form[fieldName].trim()
    const isValid = hasValue && !hasError
    
    if (hasError) return 'inputField error'
    if (isValid) return 'inputField success'
    return 'inputField'
  }

  if (submitted) {
    return (
      <section className="qtec-form qtec-sectionMargin mb-0 qtec-sectionPadding" id="contact">
        <div className="container text-center py-5">
          <h2 className="qtec-h2 mb-3">Thank you for getting in touch.</h2>
          <p className="qtec-desc">We've received your message and Reece or Jamie will get back to you.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="qtec-form  mb-0 qtec-sectionPadding" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="text-center mb-4">
              <h2 className="qtec-h2">We'd love to hear from you</h2>
              <p className="cont-desc">Whether you have a question, suggestion, or concern - your feedback matters to us. Please use the form below to get in touch, and you'll get a response from a human.</p>
            </div>
            <form className="footerForm" onSubmit={handleSubmit} noValidate>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className={getFieldClassName('name')}>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Name*" 
                      value={form.name} 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required 
                    />
                    {errors.name && touched.name && <div className="text-warning small">{errors.name}</div>}
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="inputField">
                    <input 
                      type="text" 
                      name="contact" 
                      placeholder="Contact number" 
                      value={form.contact} 
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className={getFieldClassName('email')}>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email address*" 
                      value={form.email} 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required 
                    />
                    {errors.email && touched.email && <div className="text-warning small">{errors.email}</div>}
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="inputField">
                    <input 
                      type="text" 
                      name="orderRef" 
                      placeholder="Order reference" 
                      value={form.orderRef} 
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
                <div className="col-md-12 mb-3">
                  <div className={getFieldClassName('category')}>
                    <select 
                      name="category" 
                      value={form.category} 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    >
                      <option value="">Contact category*</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    {errors.category && touched.category && <div className="text-warning small">{errors.category}</div>}
                  </div>
                </div>
                <div className="col-md-12 mb-3">
                  <div className={`inputField textareaField ${getFieldClassName('message')}`}>
                    <textarea 
                      name="message" 
                      placeholder="Please provide as much detail as you can so we can support your query effectively." 
                      value={form.message} 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required 
                      rows={5}
                    ></textarea>
                    {errors.message && touched.message && <div className="text-warning small">{errors.message}</div>}
                  </div>
                </div>
                <div className="col-md-12 mb-2">
                  <div className="form-text text-center" style={{ fontStyle: 'italic', color: "#fff" }}>
                    By submitting this form, you consent to us contacting you regarding your query.
                  </div>
                </div>
                <div className="col-md-12">
                  <button className="w-100 qtec-btn m-0" type="submit">
                    <span>Submit</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm 