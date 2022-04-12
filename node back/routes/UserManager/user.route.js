const CreatingUser = require('./UserControl.js')
const router = require('express').Router();
const cors = require('cors')
const express = require('express')
const { PrismaClient } = require('@prisma/client')



router.use(cors());
router.use(express.json());

const prisma = new PrismaClient()

router.post('/CreateUser', CreatingUser);

module.exports = router
