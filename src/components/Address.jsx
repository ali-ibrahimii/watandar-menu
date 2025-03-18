import React from 'react'
import { Icon } from '@iconify/react';

const Address = () => {
  return (
    <div className='mb-20 px-4'>
        <h1 className='font-bold text-3xl my-5'>Address</h1>
        <div className='flex flex-col items-start'>
            <label className='flex flex-row justify-center items-center'>
                <Icon icon="raphael:location" width="28" height="28"  style={{color: '#000'}} />
                <p>Mashhad,Dahe Day, Razi 2</p>
            </label>
            <label className='flex flex-row justify-center items-center'>
                <Icon icon="raphael:location" width="28" height="28"  style={{color: '#000'}} />
                <p>Mashhad,Dahe Day, Razi 2</p>
            </label>
            <label className='flex flex-row justify-center items-center'>
                <Icon icon="raphael:location" width="28" height="28"  style={{color: '#000'}} />
                <p>Mashhad,Dahe Day, Razi 2</p>
            </label>
        </div>
    </div>
  )
}

export default Address