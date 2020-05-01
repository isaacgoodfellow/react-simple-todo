import React from 'react'
import ListRow from './ListRow'
import ListEntryForm from './ListEntryForm'
import ShowCompletedToggle from './ShowCompletedToggle'
import RemoveToggle from './RemoveToggle'

class ListContainer extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      showCompleted : false,
      editing: false,
      entries: []
    }
  }

  addListEntry = entry => {
    let newEntry = {description: entry, completed: false };
    this.setState({entries: this.state.entries.concat(newEntry)})
  }

  deleteListEntry = index => {
    let newEntries = this.state.entries.slice();
    newEntries.splice(index,1);
    this.setState({entries:newEntries});
  }

  updateCompleted = (event, index) => {
    let entries = this.state.entries;
    entries[index].completed = event.target.checked;
    this.setState({entries: entries})
  }

  updateShowCompleted = event =>{
    this.setState({
      showCompleted: event.target.checked,
    })
  }

  updateEditing = event =>{
    this.setState({
      editing: event.target.checked,
    })
  }

  formatRows = () => {
    if(this.state.entries.length === 0){
      return (
        <div>
        </div>
      )
    }
    return this.state.entries.map((entry, index) => {
      if(this.state.showCompleted || !entry.completed){
        return (
          <ListRow
            description={entry.description}
            editing={this.state.editing}
            completed={entry.completed}
            key={index}
            updateCompleted={(event)=>{this.updateCompleted(event,index)}}
            deleteEntry={()=>{this.deleteListEntry(index)}}
          />
        )
      }
    })
  }

  render() {
    return (
      <div className = "List">
        <h1>Todo List</h1>
        <div>
          <RemoveToggle editing={this.state.editing} updateEditing={this.updateEditing} />
          <ShowCompletedToggle showCompleted={this.state.showCompleted} updateShowCompleted={this.updateShowCompleted}/>
        </div>
        <ListEntryForm addListEntry={this.addListEntry} />
        <div className="RowContainer">
          {this.formatRows()}
        </div>
      </div>
    )
  }
}

export default ListContainer;
