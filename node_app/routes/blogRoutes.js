const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blogController')
// -1 represents descending order
router.get('/', blogController.blog_index)

// the post request from the form sent data to /blogs 
//this post request is actually coming handled from the 
//express.urlencoded and the req is hence in a readable(processed) format 
router.post('/', blogController.blog_post)

//this route should be above the blog/id routes since create is a valid id as well
router.get('/create', blogController.blog_create_get)

router.get('/:id_from_url' , blogController.blog_details)

// delete request was on the details page of a particular blog
router.delete('/:id_from_url', blogController.blog_delete)


module.exports = router;