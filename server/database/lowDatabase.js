
const express = require('express'); //import express
const router = express.Router();

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

const defaultData = () => {
  resources: [
    { id: 1, authorId: 1, name: "resource 1" },
    { id: 2, authorId: 2, name: "resource 2" },
    { id: 3, authorId: 3, name: "resource 3" }
  ];
  authors: [
    { id: 1, name: "Brad Pitt" },
    { id: 2, name: "Ed Norton" },
    { id: 3, name: "Denzel Washington" }
  ];

}
db.defaults(defaultData).write();

module.exports = db; // export to use in server.js

