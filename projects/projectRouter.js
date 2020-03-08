const express = require('express');

const db = require('./projectModel');

const router = express.Router();

router.get("/", async (req, res, next) => {
   try {
     res.json( await db.getProjects())
   } catch(err) {
       next(err)
   }
})

router.post("/", async (req, res, next) => {
    try {
        await db.addProject(req.body)
        res.json(req.body)
      } catch(err) {
          next(err)
      }
})

router.get("/task", async (req, res, next) => {
    try {
        res.json(await db.getTask())
      } catch(err) {
          next(err)
      }
})

router.get("/resources", async (req, res, next) => {
    try {
         res.json(await db.getResources())
      } catch(err) {
          next(err)
      }
})

router.post("/:id/resources", async (req, res, next) => {
    try {
        await db.addResource(req.body)
        res.json(req.body)
     } catch(err) {
         next(err)
     }
})

router.post("/:id/task", async (req, res, next) => {
    try {
        await db.addTask(req.body, req.params.id)
        res.json(req.body)
     } catch(err) {
         next(err)
     }
})

module.exports = router;