import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStream,editStream } from '../../actions'
import StreamForm from './StreamForm'
class StreamEdit extends Component {
  
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id)
  }

  onSubmit =(formValues)=>{
    this.props.editStream(this.props.match.params.id,formValues)
  }

  render() {
    console.log(this.props)
    if(!this.props.stream){
    return (
      <div>Loading...</div>
      )
    }
    return(
      <div> 
        <h3>Edit a Stream</h3>
        {/* _.pick only get value initialize from object */}
        {/* initialValues from react form  */}
        <StreamForm initialValues={_.pick(this.props.stream,'title','description')} onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

const mapStateToProps = (state,ownProps) => ({
  stream:state.streams[ownProps.match.params.id]
})

const mapDispatchToProps = {
  fetchStream,
  editStream
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit)