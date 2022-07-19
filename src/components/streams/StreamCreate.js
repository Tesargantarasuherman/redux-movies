import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createStream } from '../../actions';
class StreamCreate extends React.Component {
  renderError =({error,touched})=>{
    if(touched && error){
      return(
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }
  renderInput=({ input,title,label,meta })=> {
    const className = `field ${meta.error && meta.touched ? 'error':''}`
    return(
      <div className={className}>
        <label>{title}</label>
        <input {...input} placeholder={label} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    ) 
  }
  
  onSubmit=(formValues)=>{
    this.props.createStream(formValues)
  }
  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
        <Field title="Name" name="title" component={this.renderInput} label="Enter Title"/>
        <Field title="Description" name="description" component={this.renderInput} label="Enter Description"/>
        <button type="submit" className="ui button primary">Submit</button>
      </form>
    );
  }
}
// Validate Form Redux
const validate =(formValues)=>{
  const errors ={};

  if(!formValues.title){
    errors.title = "You must enter a title"
  }
  if(!formValues.description){
    errors.description = "You must enter a description"
  }
  return errors;
}

// end Validate

const formWrapped = reduxForm({
  form: 'streamCreates',
  validate:validate
})(StreamCreate);


export default connect(null,{createStream})(formWrapped)
