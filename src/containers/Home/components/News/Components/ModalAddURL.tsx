import { Modal, Button, Form } from 'react-bootstrap';
import moment from 'moment';
function NewBroadcastModal({ isOpenModal, handleCloseModal, handleSaveNewBroadcast, setUrl, url }) {
    return (<>
        <Modal show={isOpenModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Add News</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>URL</Form.Label>
                        <Form.Control
                            type="text"
                            name="url"
                            value={url}
                            onChange={(e) =>
                                setUrl(e.target.value)}
                            placeholder="Enter the URL"
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSaveNewBroadcast}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>

    </>)
}
export default NewBroadcastModal