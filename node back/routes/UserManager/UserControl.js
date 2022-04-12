const express = require('express')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const router = express.Router();

const CreatingUser = () => {
    async (req, res, next) => {
        const Email = req.body.Email
        const Name = req.body.Name
        const Birthay = req.body.Date
        const CPF = req.body.CPF
        const Gender = req.body.Gender
        const Pass = req.body.Pass
        const PassRp = req.body.PassRepeat
      
        const CPFsplit = CPF.split("")
      
        if (Pass !== PassRp) {
          res.send("Passwords don't check")
        } else if (CPFsplit.length > 11 || CPFsplit.length < 11) {
          res.send("The CFP log hava just 12 Caracters check your types")
        } else {
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
          res.send("Your user has been cretead")
        }
}}
module.exports =router
