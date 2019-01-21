import React from 'react';
import '../../../../styles/components/shiftModal.css';
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react';
import dateFns from 'date-fns';

const options = [
  { key: 'm', text: 'Morning', value: 'MA', hours: 7 },
  { key: 'e', text: 'Evening', value: 'E3' },
  { key: 'n', text: 'Night', value: 'N1' },
  { key: 'o', text: 'Off', value: 'DO' }
];

class ShiftModal extends React.Component {
  state = {
    selectedShift: ''
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedShift !== this.props.selectedShift) {
      this.setState({ selectedShift: nextProps.selectedShift });
    }
  }

  selectedShift = (e, i) => {
    const newShift = {
      date: this.props.selectedShift.date,
      shift: i.value
    };

    this.setState({ selectedShift: newShift });
    this.props.onSubmit(newShift);
  };

  render() {
    return (
      <Modal open={!!this.props.selectedShift} onClose={this.props.closeModal} basic size="mini">
        <Modal.Header>
          <Icon name="calendar" />
          Select Shift
        </Modal.Header>
        <Modal.Content>
          {this.state.selectedShift.shift && <h3>{this.state.selectedShift.shift}</h3>}
          <Form>
            <Form.Select
              options={options}
              placeholder="Select Shift"
              onChange={this.selectedShift}
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" inverted onClick={this.props.closeModal}>
            <Icon name="checkmark" /> Save
          </Button>
        </Modal.Actions>
      </Modal>

      // <Modal
      //   isOpen={}
      //   contentLabel="Selected Option"
      //   onRequestClose={this.props.closeModal}
      //   closeTimeoutMS={200}
      //   className="modal"
      // >
      //   <h3 className="modal__title">Selected Option</h3>
      //   {this.state.selectedShift && (
      //     <p className="modal__body">{this.state.selectedShift.shift}</p>
      //   )}

      //   <form>
      //     <select
      //       name="shift"
      //       onChange={this.selectedShift}
      //       defaultValue={
      //         this.state.selectedShift.shift ? this.state.selectedShift.shift : 'default'
      //       }
      //     >
      //       <option value="default" disabled>
      //         Choose here
      //       </option>
      //       <option value="MA">Morning</option>
      //       <option value="E3">Evening</option>
      //       <option value="N1">Night</option>
      //       <option value="DO">Off</option>
      //     </select>
      //   </form>

      //   <button className="button" onClick={this.props.closeModal}>
      //     Close
      //   </button>
      // </Modal>
    );
  }
}
export default ShiftModal;
