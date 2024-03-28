"use client";

import { useFormik } from 'formik';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const validate = (values: FormValues) => {
  const errors: Partial<FormValues> = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const SignupForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='flex flex-col space-y-3'>
      <div className='absolute flex flex-col space-y-3 mt-[20vw] top-0 left-0 right-0 text-center'>
      <h1 className='text-4xl lg:text-5xl my-[2.5vw] mx-[4vw] font-bold text-center'>Join Us Today!</h1>
      <p className='text-lg mx-[3vw] my-[4vw] lg:text-sm text-[#808080] text-center'>Join global leaders and experts as we unlock the secrets to success,<br className='hidden lg:block'/> foster innovation, and propel the next generation of athletes to Olympic glory.</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop:"20px" }}>
        <form onSubmit={formik.handleSubmit} style={{ width: '330px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <label htmlFor="firstName">First Name</label>
          <input
            className='border border-gray-300 rounded-md p-2 w-full focus:border-blue-500'
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
          />
          {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

          <label htmlFor="lastName">Last Name</label>
          <input
            className='border border-gray-300 rounded-md p-2 w-full focus:border-blue-500'
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
          />
          {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

          <label htmlFor="email">Email Address</label>
          <input
           className='border border-gray-300 rounded-md p-2 w-full focus:border-blue-500'
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}

          <button type="submit" style={{ width: '100%', padding: '20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
