const router = require('express').Router();
const cors = require('cors')
const express = require('express')
const { PrismaClient } = require('@prisma/client')

router.use(cors());
router.use(express.json());

const prisma = new PrismaClient()

router.post('/CreateUser', async (req, res, next) => {
  const Email = req.body.Email
  const Name = req.body.Name
  const Birthay = req.body.Date
  const CPF = req.body.CPF
  const Gender = req.body.Gender
  const Pass = req.body.Pass
  const PassRp = req.body.PassRepeat
  if(Pass !== PassRp){
    res.send("Passwords don't check")
  }else {
 const user = await prisma.User.create({
    data: {
      Email: Email,
      Name: Name,
      Birthay: Birthay,
      CPF: CPF,
      Gender: Gender, 
      Pass: Pass,
    },
  })
  }
 
});

module.exports = router;
