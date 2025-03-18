import React from 'react'

const AboutUs = () => {
  return (
    <div className='flex flex-col px-4'>
        <h1 className='font-bold text-3xl my-5 '>Opening Hours</h1>
        <table className='flex flex-row justify-between'>
            <tr className='flex flex-col items-start'>
                <th>Monday:</th>
                <th>Tuesday:</th>
                <th>Wednesday:</th>
                <th>Thursday:</th>
                <th>Friday:</th>
                <th>Saturday:</th>
                <th>Sunday:</th>
            </tr>
            <tr className='flex flex-col'>
                <td>7:00 AM - 11:00 PM</td>
                <td>7:00 AM - 11:00 PM</td>
                <td>7:00 AM - 11:00 PM</td>
                <td>7:00 AM - 11:00 PM</td>
                <td>7:00 AM - 11:00 PM</td>
                <td>7:00 AM - 11:00 PM</td>
                <td>7:00 AM - 11:00 PM</td>
            </tr>
        </table>
    </div>
  )
}

export default AboutUs