import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions'

export class StreamList extends Component {
  componentDidMount(){
    this.props.fetchStreams();
  }
  renderAdmin(stream){
    if(stream.userId === this.props.currentUserId){
      return (
        <div className="right floated content">
            <Link className="ui button primary" to={`/streams/edit/${stream.id}`}>
              Edit
            </Link>
            <Link to={`/streams/delete/${stream.id}`} className="ui button negative">
              Delete
            </Link>
        </div>
      )
    }
  }
  renderCreate(){
    if(this.props.isSignedIn){
      return(
        <div style={{textAlign:'right'}}>
          <Link to="/streams/new" className='ui button primary'>
            Create Stream
          </Link>
        </div>
      )
    }
  }
  renderList(){
    return  this.props.streams.map(stream=>{
      return(
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera"/>
            <div className="content">
              {stream.title}
              <div className="description">
                {stream.description}
              </div>
            </div>
        </div>
      )
    })
  }
  render() {
    return (
      <>
        <h2>Streams</h2>
          {this.renderCreate()}
        <div className="ui celled list">
          {this.renderList()}
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  streams:Object.values(state.streams),
  currentUserId:state.auth.userId,
  isSignedIn:state.auth.isSignedIn
})

const mapDispatchToProps = {
  fetchStreams
}

export default connect(mapStateToProps, mapDispatchToProps )(StreamList)