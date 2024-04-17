"use client";

import { useFormik } from 'formik';
import "../Hero.css"
import Image from "next/image"
import Link from "next/link"
import { db }from "../firebaseConfig"
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import Modal from "@/Components/Modal"



async function addDataToFireStore(firstName:string, lastName:string, email:string){
  try{
  // Check if user with the same email already exists
  const querySnapshot = await getDocs(query(collection(db, 'users'), where('email', '==', email)));
  if (!querySnapshot.empty) {
    console.log('User with this email already exists');
    return false;
  }

  // If user doesn't exist, add the data to Firestore
  const docRef = await addDoc(collection(db, 'users'), {
    firstName: firstName,
    lastName: lastName,
    email: email,
  });
  console.log('Document written with ID: ', docRef.id);
  return true;
  }catch (error) {
    console.error("Error adding document ", error)
    return false;
  }
}

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
  
  const [showModal, setShowModal] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);


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
        const { firstName, lastName, email } = values; 
        const added = await addDataToFireStore(firstName, lastName, email);
        if (added) {
          console.log("Data added to Firestore successfully");
          window.location.replace("/thank-you");
        } else {
          console.log("Failed to add data to Firestore");
          setShowModal(true);
        }
      
      } catch (error) {
        setShowModal(true);
      }
    },
  });

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='mt-[7vw] lg:mt-[1vw]'>
      <div className='flex flex-col space-y-5'>
      <div className='flex flex-col space-y-3  text-center'>
        <div className='flex space-x-3 align-items items-center justify-center'>
        <Image src="/logo.png" alt = "logo" width={70} height={70}/>
        <Image src="/logoone.png" alt = "logo" width={90} height={90}/>
        </div>
      <h1 className='text-2xl lg:text-3xl mt-[7.5vw] lg:mt-[4vw]  lg:mx-[4vw] font-bold text-center text-[#fff]'>Register Now!</h1>
      <p className='text-lg  mx-[6vw] lg:mx-[3vw] my-[2.5vw] lg:text-sm text-[#fff] text-center'>Just a step away from becoming the next big thing in sports!</p>
      </div>
      <div className=''>
        <form onSubmit={formik.handleSubmit} 
          className='mx-[7vw] md:mx-[25vw] lg:mx-[36vw] border border-[#808080] p-5 rounded-md bg-[#161b22]'>
          <label htmlFor="firstName" className='font-bold text-[#fff]'>First Name</label>
          <input
            className='border border-[#a0aeco] bg-[#0d1117] rounded-md mt-3 caret-[#fff] p-2 w-full focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#fff]'
            id="firstName"
            ref={inputRef}
            name="firstName"
            type="text"
            placeholder='John'
            onChange={formik.handleChange}
            value={formik.values.firstName}
            style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
          />
          {formik.errors.firstName ? <div className='text-[#fff]'>{formik.errors.firstName}</div> : null}

          <label htmlFor="lastName" className='font-bold text-[#fff]'>Last Name</label>
          <input
            className='border border-[#a0aeco] bg-[#0d1117] rounded-md mt-3 caret-[#fff] p-2 w-full focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#fff]'
            id="lastName"
            name="lastName"
            type="text"
            placeholder='Smith'
            onChange={formik.handleChange}
            value={formik.values.lastName}
            style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
          />
          {formik.errors.lastName ? <div className='text-[#fff]'>{formik.errors.lastName}</div> : null}

          <label htmlFor="email" className='font-bold text-[#fff]'>Email Address</label>
          <input
           className='border border-[#a0aeco] bg-[#0d1117] rounded-md mt-3 caret-[#fff] p-2 w-full focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#fff]'
            id="email"
            name="email"
            type="email"
            placeholder='Johnsmith@gmail.com'
            onChange={formik.handleChange}
            value={formik.values.email}
            style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px' }}
          />
          {formik.errors.email ? <div className='text-[#fff]'>{formik.errors.email}</div> : null}

          <button type="submit" className='p-3 bg-[#2ea043] text-[#fff] w-[100%] border-[#2ea043] rounded-md'>Register</button>
      
        </form>

      
      </div>

      <div className='flex justify-center align-items items-center space-x-3 '>
      <Link href="https://twitter.com/officialciscoau">
      <Image src="/twitter.svg" alt="twitterlogo" width={40} height={50} className='bg-[#fff]'/>
      </Link>
          <Link href="https://www.instagram.com/officialciscoau?igsh=MXdmNmYxazkwNW9mdw%3D%3D&utm_source=qr">
          <Image src="/instagram.svg" alt="instagramlogo" width={40} height={50} className='bg-[#fff]'/>
          </Link>
        
        </div>
     
    </div>

    {showModal && (
        <Modal onClose={closeModal}/>
      )}

    </div>
    
  );
};

export default SignupForm;





//mongodb+srv://oluseyitimilehin3:<password>@cluster0.rbv6pyb.mongodb.net/
//mongodb+srv://oluseyitimilehin3:<password>@cluster0.rbv6pyb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0