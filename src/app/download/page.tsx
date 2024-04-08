"use client"

import React, { useEffect, useState } from 'react';

const UserDetailsPage: React.FC = () => {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    // Fetch user details from local storage
    const storedUserDetails = localStorage.getItem('userDetails');
    if (storedUserDetails) {
      setUserDetails(JSON.parse(storedUserDetails));
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Registered details</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {userDetails.map((user: any, index: number) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="border px-4 py-2">{user.firstName}</td>
                <td className="border px-4 py-2">{user.lastName}</td>
                <td className="border px-4 py-2">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDetailsPage;
