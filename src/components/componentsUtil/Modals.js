import React from 'react';
import './Modals.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
  <div className="body-modal">
    <div className="container">
          <h3 className="title mb-5">Javascript components</h3>
          <h4 className="mb-5">Modal</h4>
  <div className="row" id="modals">
         <div className="col-md-4">
              <Button className="btn btn-primary" onClick={this.toggle}>
                Launch Modal
              </Button>
          </div>
            <div className="col-md-4">
              <Button className="btn btn-warning" onClick={this.toggle}>
                Launch Modal Mini
              </Button>
            </div>
            <div className="col-md-4">
              <Button className="btn btn-success" onClick={this.toggle}>
                Launch Modal Form
              </Button>
            </div>
        </div>       
  </div>       
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
</div>
    );
  }
}

export default Modals;