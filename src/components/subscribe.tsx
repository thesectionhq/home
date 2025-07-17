"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [formReady, setFormReady] = useState(false);

  useEffect(() => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email?.match(emailRegex)) {
      setFormReady(true);
    } else {
      setFormReady(false);
    }
  }, [email]);

  const handleSubscribe = async () => {
    try {
      await axios.post("/api/content/subscribe", {
        data: {
          email: email?.toLowerCase(),
        }
      });
      setEmail("");
    } catch (error) {}
  };

  return (
    <div className='bg-gray-100 py-10 md:py-20 px-5 md:px-40'>
      <label htmlFor="subscribe-email" className='text-xs md:text-base uppercase font-secondary font-semibold'>Subscribe to our newsletter</label>
      <div className='flex justify-between items-center border-b py-1 md:py-3 mt-2 md:mt-0'>
        <input id="subscribe-email" type="text" className='w-4/5 text-lg md:text-6xl uppercase font-primary font-bold outline-none' placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <button disabled={!formReady} onClick={() => handleSubscribe()} className='disabled:bg-gray-200 disabled:text-gray-400 hidden md:block bg-white py-1 md:py-3 px-3 md:px-5 rounded-lg shadow-md text-sm md:text-base font-primary'>
          SUBSCRIBE
        </button>
      </div>
      <button disabled={!formReady} onClick={() => handleSubscribe()} className='disabled:bg-gray-200 disabled:text-gray-400 md:hidden block bg-white py-2 md:py-3 px-3 md:px-5 rounded shadow-md text-sm md:text-base mt-2 font-primary'>
        SUBSCRIBE
      </button>
    </div>
  )
}
