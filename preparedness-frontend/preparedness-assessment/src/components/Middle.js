import React, { useState } from "react";
import {
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const Middle = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = (
    <button
      type="button"
      className="close"
      style={{
        position: "absolute",
        top: "15px",
        right: "15px",
        marginRight: "20px",
      }}
      onClick={toggle}
    >
      &times;
    </button>
  );
  return (
    <>
      <h1 className="Heading">Preparedness Assessment</h1>

      <h3 className="enter_name_heading">Enter your name</h3>

      <FormGroup className="formgroup">
        <Label className="enter_name_text" for="exampleEmail">
          {" "}
        </Label>
        <Input
          id="Input_name_field"
          name=""
          placeholder="Hey 👋🏾, please enter your name "
          type="text"
        />
      </FormGroup>

      <div className="button-div">
        <Button className="buttons" color="info" onClick={toggle}>
          Click Me
        </Button>
        <Modal isOpen={modal} toggle={toggle} external={externalCloseBtn}>
          <ModalHeader>Users Name</ModalHeader>
          <ModalBody>
            <b>Look at the top right of the page/viewport!</b>
            <br />
            here lays some filler text that ill be changed latewr on .
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <Button
          className="buttons"
          color="info"
          tag="input"
          type="reset"
          value="Reset"
        />
      </div>
    </>
  );
};

export default Middle;
