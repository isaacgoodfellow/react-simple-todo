import React from 'react'

class ListEntryForm extends React.Component{

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit() {
    if(this.state.value.length > 0){
      this.props.addListEntry(this.state.value);
      this.setState({value:''});
    }
  }

  handleKeyDown(event){
    //If return is pressed
     if(event.keyCode === 13){
       this.handleSubmit();
     }
  }

  render(){
    return(
      <div className="Entry">
        <input className = "Entry" data-testid="entryfield" type="text" id="description" name="description" value={this.state.value} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
        <button className= "Entry" data-testid="entrybutton" onClick={this.handleSubmit} >+</button>
      </div>
    )
  }
}

export default ListEntryForm;
