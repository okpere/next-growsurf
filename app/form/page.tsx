'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 

export default function Form() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const router = useRouter(); 

  useEffect(() => {
    const savedData = localStorage.getItem('userFormData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e:any ) => {
    e.preventDefault();
    localStorage.setItem('userFormData', JSON.stringify(formData));
    alert('Form data saved!');
    router.push('/dashboard'); 
  };

  return (
    <div className='max-w-md mx-auto p-4 border rounded shadow'>
      <h2 className='text-xl font-bold mb-4'>User Form</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Enter your name'
          className='p-2 border rounded'
          required
        />
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter your email'
          className='p-2 border rounded'
          required
        />
        <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
          Save & Go to Dashboard
        </button>
      </form>
    </div>
  );
}
