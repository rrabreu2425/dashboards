import { Modal, Button } from 'react-bootstrap'
function OptionModal({ isModalSelectOpen, setActionModalOpen, selectedEvent, handleDeleteEvent, openEditModal, handleCloseModalOptions }) {
    return (<>
        <Modal show={isModalSelectOpen} onHide={handleCloseModalOptions}>
            <Modal.Header closeButton>
                <Modal.Title>Select Option</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='button-container'>
                    <Button variant="danger" className="custom-button"onClick={handleDeleteEvent}>Delete</Button>
                    <Button variant="success" className="custom-button"onClick={openEditModal}>Edit</Button>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModalOptions}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    </>)
}
export default OptionModal