const express = require("express");
const db = require("../data/db-config"); // this is configured
//instance of knex
//this is a bed practice. now we done that in db-config file and knexfile.js
// const knex = require('knex');

// const db = knex({
//   client: 'sqlite3',
//   connection: {
//     filename: './data/produce.db3'
//   },
//   useNullAsDefault: true
// });

const router = express.Router();

router.get("/", (req, res) => {
  db("fruits")
    .then((fruits) => {
      res.json(fruits);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve fruits" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  db("fruits")
    .where({ id })
    .first()
    .then((fruit) => {
      res.json(fruit);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve fruit" });
    });
});

router.post("/", (req, res) => {
  const fruitData = req.body;
  db("fruits")
    .insert(fruitData)
    .then((ids) => {
      db("fruits")
        .where({ id: ids[0] })
        .then((newFruitEntry) => {
          res.status(201).json(newFruitEntry);
        });
    })
    .catch((err) => {
      console.log("POST error", err);
      res.status(500).json({ message: "Failed to store data" });
    });
});

// const express = require('express');

// // compare this to the original code in the guided repo ... this is the "best
// // practice" way to do it... keep your db config out of your express router
// // code. That way, multiple router files can "require()" the same db config.
// // Keep it DRY!
// const db = require('../data/db-config.js');
// // const knex = require('knex');

// // const db = knex({
// //   client: 'sqlite3',
// //   connection: {
// //     filename: './data/produce.db3'
// //   },
// //   useNullAsDefault: true
// // });

// const router = express.Router();

// router.get('/', (req, res) => {
//   db('fruits')
//     .then(fruits => {
//       res.json(fruits);
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to retrieve fruits' });
//     });
// });

// router.get('/:id', (req, res) => {
//   const { id } = req.params;

//   db('fruits').where({ id }).first()
//     .then(fruit => {
//       res.json(fruit);
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to retrieve fruit' });
//     });
// });

// router.post('/', (req, res) => {
//   const fruitData = req.body;
//   db('fruits').insert(fruitData)
//     .then(ids => {
//       db('fruits').where({ id: ids[0] })
//         .then(newFruitEntry => {
//           res.status(201).json(newFruitEntry);
//         });
//     })
//     .catch(err => {
//       console.log('POST error', err);
//       res.status(500).json({ message: "Failed to store data" });
//     });
// });

// module.exports = router;

module.exports = router;
