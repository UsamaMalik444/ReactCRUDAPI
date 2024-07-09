import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormEdit from "./Form";

function Popup({
  handleClose,
  show,
  handleUpdate,
  name,
  setName,
  age,
  setAge,
  editIsActive,
  setEditIsActive,
}) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Employee Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormEdit
            editId={null}
            name={name}
            setName={setName}
            age={age}
            setAge={setAge}
            isActive={editIsActive}
            setIsActive={setEditIsActive}
            id="2"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Popup;
