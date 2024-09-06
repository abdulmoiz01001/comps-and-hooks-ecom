import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactComp = () => {
  // Initial form values
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  // Form submission handler
  const onSubmit = async (values : {}, resetForm : any) => {
    try {
      console.log('Form Data:', values);
      // You can integrate your form submission logic here
      // For example, send the data to your backend or an API

      // Reset form after submission
      resetForm();
    } catch (error) {
      console.log('Error submitting form:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Contact Details */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-4">
              We&apos;d love to hear from you! Reach out to us using the contact information below:
            </p>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Address:</strong> 123 Main Street, City, Country</li>
              <li><strong>Phone:</strong> +1 (234) 567-890</li>
              <li><strong>Email:</strong> contact@yourcompany.com</li>
              <li><strong>Working Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
          {/* Google Map */}
          <div className="md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092736!2d144.95373531531666!3d-37.816279179751554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f0b2c90b1b1b!2s123%20Main%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1616748989012!5m2!1sen!2sus"
              width="100%"
              height="450"
            //   allowFullScreen=""
              loading="lazy"
              title="Google Map"
              className="border-none"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden mt-8 p-6">
        <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={( values , resetForm )=>{
            onSubmit(values , resetForm);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                  Message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="w-full active:scale-95 bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
                disabled={isSubmitting}
              >
                Send Message
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactComp;
