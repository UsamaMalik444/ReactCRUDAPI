import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

function FormEdit({
  id,
  name,
  setName,
  age,
  setAge,
  isActive,
  setIsActive,
  editId = null,
  classes,
  handleSave,
}) {
  return (
    <Form className={classes}>
      <Container>
        <Row>
          <Col>
            <Form.Control
              placeholder="Enter name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Enter Age"
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Col>
          <Col>
            <ButtonGroup>
              <ToggleButton
                id={`toggle-check-${id}`}
                type="checkbox"
                variant="outline-primary"
                checked={isActive}
                value="1"
                onChange={(e) => {
                  if (e.currentTarget.checked === false) {
                    setIsActive(0);
                  } else {
                    setIsActive(1);
                  }
                }}
              >
                isActive
              </ToggleButton>
            </ButtonGroup>
          </Col>

          {editId && (
            <Col>
              <button
                className="btn btn-primary"
                onClick={(e) => handleSave(e)}
              >
                Submit
              </button>
            </Col>
          )}
        </Row>
      </Container>
    </Form>
  );
}

export default FormEdit;
