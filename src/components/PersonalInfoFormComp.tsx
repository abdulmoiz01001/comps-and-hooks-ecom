import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';

const PersonalInfoForm = ({
  nextStep,
  prevStep,
  setFormData,
  formData,
}: {
  nextStep: any;
  prevStep: any;
  setFormData: any;
  formData: any;
}) => {
  const [imagePreview, setImagePreview] = useState(formData.image || '');

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    gender: Yup.string().required('Gender is required'),
    age: Yup.number().required('Age is required').min(18, 'You must be at least 18 years old'),
  });

  const handleImageUpload = (event: any, setFieldValue: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setFieldValue('image', reader.result); // Save the image data as a base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setFormData({ ...formData, ...values });
        nextStep();
      }}
    >
      {({ setFieldValue }) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[50%] md:w-full sm:w-full xs:w-full xxs:w-full space-y-6 p-8 bg-white shadow-lg rounded-lg"
        >
          <Form className="space-y-6">
            {/* First Name Field */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full flex flex-col justify-start items-start"
            >
              <label className="font-semibold text-gray-700">First Name</label>
              <Field
                name="firstName"
                className="w-full px-4 py-2 mt-2 bg-gray-50 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
            </motion.div>

            {/* Last Name Field */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full flex flex-col justify-start items-start"
            >
              <label className="font-semibold text-gray-700">Last Name</label>
              <Field
                name="lastName"
                className="w-full px-4 py-2 mt-2 bg-gray-50 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
            </motion.div>

            {/* Gender Field */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full flex flex-col justify-start items-start"
            >
              <label className="font-semibold text-gray-700">Gender</label>
              <Field
                name="gender"
                as="select"
                className="w-full px-4 py-2 mt-2 bg-gray-50 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage name="gender" component="div" className="text-red-500 text-sm mt-1" />
            </motion.div>

            {/* Age Field */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full flex flex-col justify-start items-start"
            >
              <label className="font-semibold text-gray-700">Age</label>
              <Field
                name="age"
                type="number"
                className="w-full px-4 py-2 mt-2 bg-gray-50 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage name="age" component="div" className="text-red-500 text-sm mt-1" />
            </motion.div>

            {/* Image Upload Field */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full flex flex-col justify-start items-start"
            >
              <label className="font-semibold text-gray-700">Image Upload</label>
              <input
                type="file"
                className="w-full px-4 py-2 mt-2 bg-gray-50 text-black border border-gray-300 rounded-md"
                onChange={(event) => handleImageUpload(event, setFieldValue)}
              />
              <ErrorMessage name="image" component="div" className="text-red-500 text-sm mt-1" />
            </motion.div>

            {/* Image Preview */}
            {imagePreview && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full flex flex-col justify-start items-start mt-4"
              >
                <label className="font-semibold text-gray-700">Image Preview:</label>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-32 h-32 rounded-md object-cover mt-2"
                />
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <motion.div className="flex justify-between mt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={prevStep}
                className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md shadow-lg hover:shadow-xl transition-transform"
              >
                Previous
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-6 rounded-md shadow-lg hover:shadow-xl transition-transform"
              >
                Next
              </motion.button>
            </motion.div>
          </Form>
        </motion.div>
      )}
    </Formik>
  );
};

export default PersonalInfoForm;
