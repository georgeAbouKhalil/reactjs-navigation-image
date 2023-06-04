Homework will prove your programming abilities. The code in the application should be

following these criteria: comments in code, clean, flexible and scalable code.

● Open a new React js project.

● Create a store using Redux.

● Before the App.js render you need to make a server call to the URL:

https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${CATEGORY}

● The CATEGORY is the end-point and can contain all kinds of parameters for

example: sports, work, etc.

● The App.js need to render photos from the data you received. The images display
should be 3*3.

● Display only the first 9 elements from the array.

● Create 2 Buttons. The first Button in the top-left with name “prev” and the second in
the top-right with name “next”

● Use the node.js server to implement pagination and use it with adding a prev button
which will replace the items by 9 backwards. And a next button, which will replace the
items by 9 forward.

● Add a button to the top-center of the screen. On press, the modal will appear and you
will select the type of the photos, for example: animals, Sport, work etc.

● When you select the type you need to make a server call and get the new data. The
type should replace the end-point CATEGORY.

● When you press on an item the modal will appear and will show the relevant
parameters of the element such as: views, downloads, collection etc



Nodejs:

● Create a node.js project with organized and understandable architecture.

● Use express.js to build rest api.

● Add few routes which contains the requests to pixabay api with:

○ Sorting function on the images by id or date.

○ Pagination function according to the client side requirements.

● Keep efficient and clean code, use error handling and documentation with comments.
