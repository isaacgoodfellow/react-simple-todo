import React from 'react'

const ListRow = ({ description, completed, updateCompleted, editing, deleteEntry }) => {

  return (
    <div className = {completed ? ("List-row-completed") : ("List-row")} >
      <p className = "List-row-text">{description}</p>
      { editing ? (
        <button className="List-row-delete" data-testid="deletebutton" onClick={deleteEntry}>x</button>
      ) :
      (
        <label className="container">
          <input type="checkbox" defaultChecked={completed} onChange={updateCompleted}/>
          <span className="checkmark"></span>
        </label>
      )}
    </div>
  )
}

export default ListRow;
