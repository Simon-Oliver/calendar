import React from 'react';
import Modal from 'react-modal';
import '../styles/components/shiftModal.css';

class ShiftModal extends React.Component {
  state = {
    selectedShift: ''
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedShift !== this.props.selectedShift) {
      this.setState({ selectedShift: nextProps.selectedShift });
    }
  }

  selectedShift = e => {
    const newShift = {
      date: this.props.selectedShift.date,
      shift: e.target.value,
      icon: 'brightness_2'
    };

    this.setState({ selectedShift: newShift });
    this.props.onSubmit(newShift);
  };

  render() {
    return (
      <Modal
        isOpen={!!this.props.selectedShift}
        contentLabel="Selected Option"
        onRequestClose={this.props.closeModal}
        closeTimeoutMS={200}
        className="modal"
      >
        <h3 className="modal__title">Selected Option</h3>
        {this.state.selectedShift && (
          <p className="modal__body">{this.state.selectedShift.shift}</p>
        )}

        <form>
          <select
            name="shift"
            onChange={this.selectedShift}
            defaultValue={
              this.state.selectedShift.shift ? this.state.selectedShift.shift : 'default'
            }
          >
            <option value="default" disabled>
              Choose here
            </option>
            <option value="MA">Morning</option>
            <option value="E3">Evening</option>
            <option value="N1">Night</option>
            <option value="DO">Off</option>
          </select>
        </form>

        <button className="button" onClick={this.props.closeModal}>
          Close
        </button>
      </Modal>
    );
  }
}
export default ShiftModal;
