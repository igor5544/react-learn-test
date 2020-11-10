import React from 'react';
import s from './profileStatus.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    });
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });

    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (evt) => {
    this.setState({
      status: evt.currentTarget.value
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

  render() {
    return (
      <>
        {!this.state.editMode ?
          <p onDoubleClick={this.activateEditMode} className={s.text}>
            {this.props.status ?
              this.props.status :
              'Hello everyone!'
            }
          </p> :
          <input
            autoFocus
            onChange={this.onStatusChange}
            onBlur={this.deactivateEditMode}
            className={s['text-field']}
            type="text"
            name={'Status'}
            value={this.state.status}
          />
        }
      </>
    )
  }
}

export default ProfileStatus;