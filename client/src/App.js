import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CategoryModal from "./components/CategoryModal";
import Button from "react-bootstrap/Button";
import ImageModal from "./components/ImageModal";
import Form from "react-bootstrap/Form";
import { fetchPhotos } from "./Redux/actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const [items, setItems] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [page, setpage] = useState(1);
  const [category, setcategory] = useState("flowers");
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [sortBy, setsort] = useState("id");

  const handleCloseCategoryModal = () => setShowCategoryModal(false);
  const handleShowCategoryModal = () => setShowCategoryModal(true);

  const handleCloseImageModal = () => setShowImageModal(false);
  const handleShowImageModal = (image) => {
    setSelectedImage(image);
    setShowImageModal(true);
  };

  useEffect(() => {
    axios.get(`http://localhost:3001/?page=${page}&category=${category}&sortBy=${sortBy}`)
        .then((response) => {
        dispatch(fetchPhotos(response.data))
        setItems(response.data.items);
        setHasNextPage(response.data.hasNextPage);
      })
      .catch(console.log);
  }, [page, category, sortBy]);

  function changePage(newPage) {
    if (newPage < 1) {
      return;
    }

    setpage(newPage);
  }

  function changeCategory(event) {
    setcategory(event.target.value);
    handleCloseCategoryModal()
  }

  function changeSort(event) {
    setsort(event.target.value);
  }

  return (
    <div className="">
      <div className="center">
        <Button className="center" variant="primary" onClick={handleShowCategoryModal}>
          Change Category
        </Button>
      </div>
      
      <Form.Select size="lg" value={sortBy} onChange={changeSort}>
        <option value={"id"}>id</option> 
        <option value={"date"}>date</option>   
      </Form.Select>

      <CategoryModal
        category={category}
        changeCategory={changeCategory}
        show={showCategoryModal}
      />

      {selectedImage && ( <ImageModal image={selectedImage} show={showImageModal} onHide={handleCloseImageModal} /> )}
      <div className="buttoms">
        <Button className="buttonPerv" disabled={page == 1} onClick={() => { changePage(page - 1); }}>&#8592; Prev</Button>
        <Button className="buttonNext" disabled={!hasNextPage} onClick={() => { changePage(page + 1); }}>Next &rarr;</Button>
      </div>
      <div className="our-grid">
        {items.map((item) => (
          <div key={item.id} className="wrap" onClick={() => handleShowImageModal(item)} >
            <img src={item.previewURL} alt={item.type} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
