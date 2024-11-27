import { Modal, Button, Form } from 'react-bootstrap';
import moment from 'moment';
function TaskModal({ isModalOpen, handleCloseModalNew, newEvent, setNewEvent, handleSelect }) {
    return (<>
        <Modal show={isModalOpen} onHide={handleCloseModalNew}>
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
                            value={newEvent.title}
                            onChange={(e) =>setNewEvent({...newEvent,
                                    title: e.target.value
                                })}
                            placeholder="Enter task title"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Start Time</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            name="start"
                            value={moment(newEvent.start).format('YYYY-MM-DDTHH:mm')}
                            onChange={(e) =>
                                setNewEvent({
                                    ...newEvent,
                                    start: new Date(e.target.value),
                                })
                            }
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>End Time</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            name="end"
                            value={moment(newEvent.end).format('YYYY-MM-DDTHH:mm')}
                            onChange={(e) =>
                                setNewEvent({
                                    ...newEvent,
                                    end: new Date(e.target.value),
                                })
                            }
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModalNew}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSelect}>
                    Add Task
                </Button>
            </Modal.Footer>
        </Modal>

    </>)
}
export default TaskModal