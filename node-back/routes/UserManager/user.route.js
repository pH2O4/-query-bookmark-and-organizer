const router = require('express').Router();
const cors = require('cors')
const express = require('express')
const { PrismaClient } = require('@prisma/client')

const ModuleUserContol = require('./UserControl')
router.use(cors());
router.use(express.json());

const prisma = new PrismaClient()

router.get('/', async (req, res, next) => {
    res.send({ message: 'Awesome it works 🐻' });
  });
  

router.post('/CreateUser', ModuleUserContol.CreatingUser);

module.exports = router
