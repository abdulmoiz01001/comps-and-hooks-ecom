import React from 'react';
import { useFormik, FormikErrors, FormikValues } from 'formik';
import * as Yup from 'yup';
import '../styles/paymentcomp.css';

// Define the shape of the form values
interface FormValues {
  fullName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  cardName: string;
  cardNumber: string;
  expMonth: string;
  expYear: number;
  cvv: string;
}

// Define validation schema with Yup
const validationSchema = Yup.object({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zipCode: Yup.string().required('Zip code is required'),
  cardName: Yup.string().required('Name on card is required'),
  cardNumber: Yup.string().matches(/^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/, 'Invalid card number format').required('Card number is required'),
  expMonth: Yup.string().required('Expiration month is required'),
  expYear: Yup.number().min(new Date().getFullYear(), 'Invalid year').required('Expiration year is required'),
  cvv: Yup.string().matches(/^[0-9]{3,4}$/, 'Invalid CVV').required('CVV is required')
});

const Payment: React.FC = () => {
  // Initialize Formik
  const formik = useFormik<FormValues>({
    initialValues: {
      fullName: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      cardName: '',
      cardNumber: '',
      expMonth: '',
      expYear: new Date().getFullYear(),
      cvv: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values: FormValues) => {
      // Handle form submission
      console.log(values);
    }
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col">
            <h3 className="title">Billing Address</h3>
            <div className="inputBox">
              <span>Full Name:</span>
              <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.fullName && formik.errors.fullName ? <div className="text-red-500 text-sm mt-1">{formik.errors.fullName}</div> : null}
            </div>
            <div className="inputBox">
              <span>Email:</span>
              <input
                type="email"
                name="email"
                placeholder="example@example.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div> : null}
            </div>
            <div className="inputBox">
              <span>Address:</span>
              <input
                type="text"
                name="address"
                placeholder="Room - Street - Locality"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.address && formik.errors.address ? <div className="text-red-500 text-sm mt-1">{formik.errors.address}</div> : null}
            </div>
            <div className="inputBox">
              <span>City:</span>
              <input
                type="text"
                name="city"
                placeholder="Mumbai"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.city && formik.errors.city ? <div className="text-red-500 text-sm mt-1">{formik.errors.city}</div> : null}
            </div>

            <div className="flex">
              <div className="inputBox">
                <span>State:</span>
                <input
                  type="text"
                  name="state"
                  placeholder="India"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.state && formik.errors.state ? <div className="text-red-500 text-sm mt-1">{formik.errors.state}</div> : null}
              </div>
              <div className="inputBox">
                <span>Zip Code:</span>
                <input
                  type="text"
                  name="zipCode"
                  placeholder="123 456"
                  value={formik.values.zipCode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.zipCode && formik.errors.zipCode ? <div className="text-red-500 text-sm mt-1">{formik.errors.zipCode}</div> : null}
              </div>
            </div>
          </div>

          <div className="col">
            <h3 className="title">Payment</h3>
            <div className="inputBox">
              <span>Cards Accepted:</span>
              <img src="./card_img.png" alt="Accepted Cards" />
            </div>
            <div className="inputBox">
              <span>Name on Card:</span>
              <input
                type="text"
                name="cardName"
                placeholder="Mr. John Doe"
                value={formik.values.cardName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.cardName && formik.errors.cardName ? <div className="text-red-500 text-sm mt-1">{formik.errors.cardName}</div> : null}
            </div>
            <div className="inputBox">
              <span>Credit Card Number:</span>
              <input
                type="text"
                name="cardNumber"
                placeholder="1111-2222-3333-4444"
                value={formik.values.cardNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.cardNumber && formik.errors.cardNumber ? <div className="text-red-500 text-sm mt-1">{formik.errors.cardNumber}</div> : null}
            </div>
            <div className="inputBox">
              <span>Exp Month:</span>
              <input
                type="text"
                name="expMonth"
                placeholder="January"
                value={formik.values.expMonth}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.expMonth && formik.errors.expMonth ? <div className="text-red-500 text-sm mt-1">{formik.errors.expMonth}</div> : null}
            </div>

            <div className="flex">
              <div className="inputBox">
                <span>Exp Year:</span>
                <input
                  type="number"
                  name="expYear"
                  placeholder="2022"
                  value={formik.values.expYear}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.expYear && formik.errors.expYear ? <div className="text-red-500 text-sm mt-1">{formik.errors.expYear}</div> : null}
              </div>
              <div className="inputBox">
                <span>CVV:</span>
                <input
                  type="text"
                  name="cvv"
                  placeholder="123"
                  value={formik.values.cvv}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.cvv && formik.errors.cvv ? <div className="text-red-500 text-sm mt-1">{formik.errors.cvv}</div> : null}
              </div>
            </div>
          </div>
        </div>

        <input type="submit" value="Proceed to Checkout" className="submit-btn" />
      </form>
    </div>
  );
};

export default Payment;
