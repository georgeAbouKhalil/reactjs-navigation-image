import React from "react";
import Modal from "react-bootstrap/Modal";

export default function ImageModal({ image, show, onHide }) {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={show} onHide={onHide}>
        <Modal.Body>
          <div style={{float:"right"}}>
            <img src={image.previewURL} />
          </div>
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <th>Views: </th>
                <th>{image.views}</th>
              </tr>
              <tr>
                <th>Downloads: </th>
                <th>{image.downloads}</th>
              </tr>
              <tr>
                <th>Collections: </th>
                <th>{image.collections}</th>
              </tr>
              <tr>
                <th>Likes: </th>
                <th>{image.likes}</th>
              </tr>
              <tr>
                <th>Comments: </th>
                <th>{image.comments}</th>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
      </Modal>
    </div>
  );
}
