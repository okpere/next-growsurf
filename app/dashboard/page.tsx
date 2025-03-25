'use client';
import { useState, useEffect } from 'react';

type UserData = {
  name: string;
  email: string;
};

export default function Dashboard() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem('userFormData');
    if (savedData) {
      setUserData(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>

      {userData ? (
        <div className='p-4 border rounded shadow-md'>
          <p>
            <strong>Name:</strong> {userData.name}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
}
