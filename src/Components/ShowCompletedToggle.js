import React from 'react'

const ShowCompletedToggle = ({showCompleted, updateShowCompleted }) => {

  return (
    <div className = "settings" >
      <p className = "settings" >Show Completed</p>
      <label className="container">
      <input className = "float-right-child" type="checkbox" defaultChecked={showCompleted} onChange={updateShowCompleted} />
      <span className="checkmark"></span>
      </label>
    </div>
  )
}

export default ShowCompletedToggle
