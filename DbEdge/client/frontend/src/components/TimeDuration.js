import React from 'react';

const TimeDuration = ({ value, onChange, onClick }) => {
  return (
    <div className='p-1 lg:p-4 shadow-sm'>
      <label className='block lg:inline font-bold p-1 lg:p-2 mx-2' htmlFor="timeDurationSelect">
        Measurement Window:
      </label>

      <select
        className='p-1 lg:p-2 mx-2 border border-gray-400 rounded'
        id="timeDurationSelect"
        value={value}
        onChange={onChange}
      >
        <option value="">Select Time Duration</option>
        <option value="1">1 hour</option>
        <option value="24">1 day</option>
        <option value="168">1 week</option>
      </select>
      <button
        className='p-1 lg:p-2 m-2 border border-gray-400 bg-blue-500 text-white font-semibold lg:font-bold rounded'
        onClick={onClick}
      >
        Submit
      </button>
    </div>
  );
};

export default TimeDuration;