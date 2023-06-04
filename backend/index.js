const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
// Middleware
app.use(express.json());

// Routes
app.get("/", async (req, res) => {
  const { page, category, sortBy } = req.query;
  
  let fetchItems;
  await fetch(`https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}`)
  .then((res) => res.json()).then(data => fetchItems = data.hits )
  
  .catch((err) => {
    res.status(err.status || 500).send(err.message);
  });

  if (!fetchItems) {
    res.status(400).json({ message: "no images found" });
    return;
  }
  
  const indexOfFirstItem = (page - 1) * 9;
  const indexOfLastItem = Math.min(indexOfFirstItem + 9, fetchItems.length);
  const hasNextPage = page < Math.ceil(fetchItems.length / 9);

  items = await fetchItems.sort((a, b) => a[sortBy] - b[sortBy]).slice(indexOfFirstItem, indexOfLastItem);
  
  res.json({ items, hasNextPage, });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
