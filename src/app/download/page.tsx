"use client"

import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  // Define other properties according to your data structure
}

async function fetchDataFromFirestore(): Promise<UserData[]> {
  const querySnapshot = await getDocs(collection(db, "users"));

  const data: UserData[] = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() } as UserData);
  });
  return data;
}

export default function UserList() {
  const [userData, setUserData] = useState<UserData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      setUserData(data);
    }

    fetchData();
  }, []);


  return (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {userData.map((user, index) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.firstName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.lastName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

