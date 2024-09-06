import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';

const UserForm = ({ nextStep, setFormData, formData }: { nextStep: any; setFormData: any; formData: any }) => {
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  return (
    <>
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setFormData({ ...formData, ...values });
          nextStep();
        }}
      >
        {() => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[50%] md:w-full sm:w-full xs:w-full xxs:w-full space-y-6 p-8 bg-white shadow-lg rounded-lg"
          >
            <Form className="space-y-6">
              {/* Username Field */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full flex flex-col justify-start items-start"
              >
                <label className="font-semibold text-gray-700">Username</label>
                <Field
                  name="username"
                  className="w-full px-4 bg-gray-50 text-black border border-gray-300 py-2 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
              </motion.div>

              {/* Email Field */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full flex flex-col justify-start items-start"
              >
                <label className="font-semibold text-gray-700">Email</label>
                <Field
                  name="email"
                  type="email"
                  className="w-full px-4 bg-gray-50 text-black border border-gray-300 py-2 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </motion.div>

              {/* Password Field */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full flex flex-col justify-start items-start"
              >
                <label className="font-semibold text-gray-700">Password</label>
                <Field
                  name="password"
                  type="password"
                  className="w-full px-4 bg-gray-50 text-black border border-gray-300 py-2 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                className="flex justify-end mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-6 rounded-md shadow-lg hover:shadow-xl transition-transform"
                >
                  Next
                </button>
              </motion.div>
            </Form>
          </motion.div>
        )}
      </Formik>
    </>
  );
};

export default UserForm;
