import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default function CategoryModal({
  category,
  changeCategory,
  show,
  onHide,
}) {
  const categories =["flowers", "fashion", "science", "education", "feelings", "health", "people", "religion", "places", "animals", "industry",
                     "computer", "food", "sport", "transportation", "travel", 'buildings', "business", "music", "work"].sort();
  
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={show} onHide={onHide}>
        <Modal.Body >
          <Form.Select size="lg" value={category} onChange={changeCategory}>
          <option disabled value="">Select Category</option>
                {categories.map((x, index) => <option key={x} value={x}>{x}</option>)}
          </Form.Select>
        </Modal.Body>
      </Modal>
    </div>
  );
}
