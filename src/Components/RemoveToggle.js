import React from 'react'

const RemoveToggle = ({ editing, updateEditing }) => {

  return (
    <div className = "settings" >
    <p className = "settings" >Edit</p>
    <label className="container">
    <input data-testid="editbutton" className = "float-right-child" type="checkbox" defaultChecked={editing} onChange={updateEditing} ></input>
    <span className="checkmark"></span>
    </label>
    </div>
  )
}

export default RemoveToggle
