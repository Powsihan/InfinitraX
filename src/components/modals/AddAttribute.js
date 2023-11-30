import React from "react";
import "../../App.css";
import { Modal, Button } from "react-bootstrap";

export default function AddAttribute(props) {
  const { show, onHide } = props;

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add attributes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="modal-body">
              <div className="form-outline mb-4">
                <label
                  className="form-label"
                  htmlFor="inputAddAttribute-attribute"
                >
                  Attribute
                </label>
                <select
                  id="selectAddAttribute-attribute"
                  className="form-select"
                >
                  <option selected>--Select an Attribute--</option>
                  <option>Color</option>
                  <option>Storage</option>
                  <option>Display</option>
                </select>
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="inputAddAttribute-value">
                  Value
                </label>
                <input
                  type="text"
                  id="inputAddAttribute-value"
                  className="form-control"
                  required
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="success">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}