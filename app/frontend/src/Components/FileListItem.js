import React, { useState } from "react"
import { Button, ListGroup, Modal } from "react-bootstrap"
import { Trash } from "react-bootstrap-icons"

function FileListItem(props) {
  const file = props.file

  const [fileToDelete, setFileToDelete] = useState(0)
  const [isFileDeleteModalOpen, setIsFileDeleteModalOpen] = useState(false)

  const handleFileDeleteModalShow = () => {
    setIsFileDeleteModalOpen(true)
  }

  const handleFileDeleteModalClose = () => {
    setIsFileDeleteModalOpen(false)
  }

  const handleFileDeleteClick = (event) => {
    handleFileDeleteModalClose()
    event.preventDefault()
  }

  return (
    <ListGroup.Item>
      <div className="d-flex justify-content-between">
        <a href={file.filePath} download={file.filePath}>
          {file.fileTitle}
        </a>
        {props.isThisTutor ? <h6>{file.approvalStatus}</h6> : <></>}
        {
          !props.editMode ? <></> :
            <>
              <Button
                variant="outline-danger"
                className=""
                onClick={() => {
                  setFileToDelete(file.id)
                  handleFileDeleteModalShow()
                }}
              >
                <Trash />
              </Button>

              <Modal
                show={isFileDeleteModalOpen}
                onHide={handleFileDeleteModalClose}
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Are you sure that you want to delete this file?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="d-flex justify-content-between">
                    <Button
                      variant="outline-dark"
                      onClick={handleFileDeleteClick}
                    >
                      YES
                    </Button>
                    <Button
                      variant="outline-dark"
                      onClick={handleFileDeleteModalClose}
                    >
                      NO
                    </Button>
                  </div>
                </Modal.Body>
              </Modal>
            </>
        }
      </div>
    </ListGroup.Item>
  )
}

export default FileListItem