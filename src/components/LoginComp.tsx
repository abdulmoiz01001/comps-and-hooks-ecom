import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginComp = () => {
  // Formik initial values
  const initialValues = {
    email: '',
    password: '',
  };

  // Yup validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleLogin = async (values : {}) => {
    try {
      console.log('Login Submitted', values);
      // Add your login logic here
    } catch (error) {
      console.log('Error in Login', error);
    }
  };

  return (
    <div className="flex md:flex-col md:justify-center md:items-center sm:flex-col sm:justify-center sm:items-center xs:flex-col xs:justify-center xs:items-center xxs:flex-col xxs:justify-center xxs:items-center min-h-full h-screen">
      {/* Image Section */}
      <div className="w-1/2 xxs:hidden xs:hidden bg-gray-100 flex items-center justify-center">
        <img
          src="https://thumbs.dreamstime.com/b/login-concept-banner-illustration-flat-style-landing-page-background-website-banner-login-concept-banner-illustration-flat-style-172701210.jpg" // Replace with your image URL
          alt="Login"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Form Section */}
      <div className="w-1/2 xs:w-full xxs:w-full shadow-lg xxs:shadow-none xs:shadow-none p-10 flex items-center justify-center bg-white">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold xxs:text-xl text-center mb-8">Login to Your Account</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="w-full flex flex-col justify-start items-start mb-4">
                  <label htmlFor="email" className="block text-center text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-center text-sm mt-1"
                  />
                </div>

                <div className="w-full flex flex-col justify-start items-start mb-6">
                  <label htmlFor="password" className="block text-center text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-center text-sm mt-1"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full active:scale-95 bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
                    disabled={isSubmitting}
                  >
                    Login
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
