const router = require('express').Router();
const cors = require('cors')
const express = require('express')
const { PrismaClient } = require('@prisma/client')

router.use(cors());
router.use(express.json());

const prisma = new PrismaClient()

router.post('/CreateUser', async (req, res, next) => {
  const user = await prisma.User.create({
    data:{
      
    },
  })
  res.send({ message: 'Ok api is working 🚀' });
});

module.exports = router;
