import React from 'react';
import { Button, Modal } from 'react-bootstrap';

interface UnsavedChangesModalProps {
    show: boolean;
    onContinue: () => void;
    onCancel: () => void;
}

export const UnsavedChangesModal = ({ show, onContinue, onCancel }: UnsavedChangesModalProps) => {
    return (
        <Modal show={show}>
            <Modal.Body>
                Unsaved Changes Exist. Data will be lost if you continue.
                </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={onContinue}>Continue</Button>
                <Button variant="primary" onClick={onCancel}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}