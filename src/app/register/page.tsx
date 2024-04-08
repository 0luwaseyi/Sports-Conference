"use client";

import { useFormik } from 'formik';
import axios from 'axios';
import { AxiosResponse } from 'axios';
import Router from 'next/router';
import "../Hero.css"
import Image from "next/image"
import Link from "next/link"

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

interface RegisterResponse {
  filePath: string;
  // Add any other properties returned in the response if needed
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
    onSubmit: async values => {
      try {
     
        formik.resetForm()
        const userDetails = JSON.parse(localStorage.getItem('userDetails') || '[]');
    userDetails.push(values);
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
        const response: AxiosResponse<RegisterResponse> = await axios.post('/api/hello', values);
        const { filePath } = response.data;
        window.location.replace("/thank-you")
      
      } catch (error) {
        alert('Registration failed!');
      }
    },
  });

  return (
    <div>
      <div className='flex flex-col space-y-3'>
      <div className='absolute flex flex-col space-y-3  top-[10vw] lg:top-[4vw]  left-0 right-0 text-center'>
        <div className='flex space-x-3 align-items items-center justify-center'>
        <Image src="/logo.png" alt = "logo" width={70} height={70}/>
        <Image src="/logoone.png" alt = "logo" width={90} height={90}/>
        </div>
      <h1 className='text-2xl lg:text-3xl mt-[7.5vw] lg:mt-[4vw]  lg:mx-[4vw] font-bold text-center'>Register Now!</h1>
      <p className='text-lg  mx-[6vw] lg:mx-[3vw] my-[4vw] lg:text-sm text-[#808080] text-center'>Just a step away from becoming the next big thing in sports!</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop:"80px" }}>
        <form onSubmit={formik.handleSubmit} style={{ width: '330px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <label htmlFor="firstName">First Name</label>
          <input
            className='border-style border-gray-300 rounded-md p-2 w-full focus:border-blue-500'
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
            className='border-style border-gray-300 rounded-md p-2 w-full'
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

          <button type="submit" style={{ width: '100%', padding: '20px', backgroundColor: '#6c63ff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Register</button>
      
        </form>

      
      </div>
     
    </div>
    <div className='flex justify-center align-items items-center space-x-3 mt-[-50vw]  lg:mt-[-10vw]'>
      <Link href="https://twitter.com/officialciscoau">
      <Image src="/twitter.svg" alt="twitter" width={70} height={50}/>
      </Link>
          <Link href="https://www.instagram.com/officialciscoau?igsh=MXdmNmYxazkwNW9mdw%3D%3D&utm_source=qr">
          <Image src="/instagram.svg" alt="instagram" width={50} height={50}/>
          </Link>
        
        </div>

    </div>
    
  );
};

export default SignupForm;
