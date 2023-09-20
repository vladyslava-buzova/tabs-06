import React from 'react';

const BtnContainer = ({ jobs }) => {
  return (
    <div className='btn-container'>
      {jobs.map((job) => {
        return (
          <button key={job.id} className="job-btn">
            {job.company}
            {/* console.log() */}
          </button>
        )
    })}
    </div>
  )
}

export default BtnContainer