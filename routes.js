const express = require('express');
const Task = require('./models/tasks'); //mongoose schema
const router = express.Router();

//RENDER HOMEPAGE
router.get('/', (request, response) => {
  Task.find((error, tasks) => {
    response.render('homepage', {
      tasks
    });
  })
})

//POST ENTRY
router.post('/create', (request, response) => {
  const newTask = new Task(request.body);
  newTask.save((error) => {
    response.redirect('/');
  });
});

//DELETE ENTRY
router.get('/delete/:id', (req, res) => {
  Task.findByIdAndRemove(req.params.id, (err) => {
    res.redirect('/');
  });
});

//EDIT PAGE
router.get('/edit/:id', (req, res) => {
  Task.findById(req.params.id, (error, task) => {
    res.render('edit', {
      task
    });
  });
});


//EDIT ENTRY
router.post('/edit/:id', (req, res) => {
  console.log(req.params.id, req.body);
  Task.findByIdAndUpdate(req.params.id, req.body, (err) => {
    res.redirect('/');
  });
});

module.exports = router;
