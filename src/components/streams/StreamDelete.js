import { fetchStream,deleteStream } from '../../actions';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from '../Modal';
import history from '../../history';
import { Link } from 'react-router-dom';
export class StreamDelete extends Component {
  componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
      }
      renderActions(){
        const {id} = this.props.match.params;
        return (
          <>
            <button onClick={()=>this.props.deleteStream(id)} className="ui button negative">Delete</button>
            <Link to="/" className="ui button">Cancel</Link>
          </>
        )
      }
      renderContent(){
        if(!this.props.stream){
          return 'Are You Sure Want To Delete This Stream ?'
        }
        return `Are You Sure Want To Delete The Stream With Title : ${this.props.stream.title}`
      }
      render() {
        if(!this.props.stream){
          return <div>Loading...</div>
        }
        return (
          <div>
            <Modal
              title="Delete Stream"
              content={this.renderContent()}
              actions={this.renderActions()}
              onDismiss={() => history.goBack()}
            />
          </div>
        );
      }
}

const mapStateToProps = (state,ownProps) => ({
  stream:state.streams[ownProps.match.params.id],
})

const mapDispatchToProps = {
  fetchStream,
  deleteStream
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamDelete)
