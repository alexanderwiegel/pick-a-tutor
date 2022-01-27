import React, { useState } from "react"
import { Button, ListGroup, Modal } from "react-bootstrap"
import { Trash } from "react-bootstrap-icons"

function FileListItem(props) {
  const file = props.file

  const [fileToDeleteID, setFileToDeleteID] = useState(0)
  const [isFileDeleteModalOpen, setIsFileDeleteModalOpen] = useState(false)

  const handleFileDeleteModalShow = () => {
    setIsFileDeleteModalOpen(true)
  }

  const handleFileDeleteModalClose = () => {
    setIsFileDeleteModalOpen(false)
  }

  const handleFileDeleteClick = async (event) => {
    props.onDelete(fileToDeleteID)
    event.preventDefault()
  }

  return (
    <ListGroup.Item>
      <div className="d-flex justify-content-between">
        <a href={`http://20.113.25.17:3001/api/downloadprofilefile?path=${file.filePath}`} download={`http://20.113.25.17:3001/api/downloadprofilefile?path=${file.filePath}`}>
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
                  setFileToDeleteID(file.id)
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