const express = require('express');
const router = express.Router();


//lets load the Book Model
const Book = require('../../models/Book');

//@route GET api/books/test
//@description test books route
//@access Public
router.get('/test', (req, res) => res.send('book route testing'));


//@route GET api/books
//description Get all books
//@access Public
router.get('/', (req, res) => {
    Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({nobooksfound: 'No Books found'}));
});

//@route GET api/books/:id
//@description Get Single Book
//@access Public
router.get('/:id', (req, res) =>{

    Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json({nobooksfound:'No Book found'}));

});

//@route POST api/books/
//@description add/save a book
//@access Public
router.post('/', (req, res) => {
    Book.create(req.body)
    .then(book => res.json({msg: 'Book added successfully'}))
    .catch(err => res.status(404).json({error: 'Unable to add this book'}));
});

//@route PUT api/books/:id
//@description Update Book
//@access Public

router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({msg: 'Book updated successfully'}))
    .catch(err => res.status(404).json({error: 'Unable to update this book'}));
});

//@route DELETE api/books/:id
//@description Delete book by id
//@access Public

router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
        .then(book => res.json({ msg: 'Book entry deleted successfully'}))
        .catch(err => res.status(404).json({ error: 'NO such book'}));
});

module.exports = router;