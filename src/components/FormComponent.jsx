import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    message:''
  })
   const handleChange = (e)=>{
     const {name, value} = e.target;

     setFormData((prevData)=>({
         ...prevData,
         [name]:value
     }))
   }
    console.log(formData)

   const handleSubmit = (e)=>{
     e.preventDefault();
     
     setSubmitMessage("successfully submit the data")
   }
   
   const [submitMessage, setSubmitMessage] = useState('')

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Contact Form</h2>
      <form className='pt-10' onSubmit={handleSubmit}>
   
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
            className='border border-black'
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
             className='border border-black'
          />
        </div>

       
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message" 
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
            className='border border-black'
          ></textarea>
        </div>

       
        <button type="submit" style={{ padding: '10px 20px' }}  className='border border-black bg-blue-800 text-white'>
          Submit
        </button>
      </form>

       {submitMessage && <p className='text-green-800'>{submitMessage}</p>}
     
    </div>
  );
};

export default FormComponent;
