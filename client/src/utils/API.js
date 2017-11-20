import axios from "axios";

export default {
  // Gets all books
  getArticles: function() {
    return axios.get("/api/saved");
  },
  // Gets the book with the given id
  saveArticle: function(id) {
    return axios.get("/api/saved" + id);
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/saved" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};