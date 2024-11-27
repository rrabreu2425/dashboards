import { Modal, Button, Form } from 'react-bootstrap';
import moment from 'moment';
function Edittask({isModalOpenEdit, handleCloseModalEdit, selectedEvent, handleEditEvent, handleInputChange}) {
    return (<>
        <Modal show={isModalOpenEdit} onHide={handleCloseModalEdit}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Task Title</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            value={selectedEvent.title}
                            onChange={handleInputChange}
                            placeholder="Enter task title"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Start Time</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            name="start"
                            value={moment(selectedEvent.start).format('YYYY-MM-DDTHH:mm')}
                            onChange={handleInputChange}
                            
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>End Time</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            name="end"
                            value={moment(selectedEvent.end).format('YYYY-MM-DDTHH:mm')}
                            onChange={handleInputChange
                            }
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModalEdit}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleEditEvent}>
                    Update
                </Button>
            </Modal.Footer>
        </Modal>
    </>)
}
export default Edittask
