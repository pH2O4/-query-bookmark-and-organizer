const express = require('express')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authconfig = require('./auth.json')

exports.CreatingUser = async (req, res, next) => {
        const Email = req.body.Email
        const Name = req.body.Name
        const Birthay = req.body.Birthay
        const CPF = req.body.CPF
        const Gender = req.body.Gender
        const Pass = req.body.Pass
        const PassRp = req.body.PassRp

        const CPFsplit = CPF.split("")
        if (Pass != PassRp) {
          res.send("Passwords don't check")
        } else if (CPFsplit.length > 12 || CPFsplit.length < 12) {
          res.send("The CFP log have 12 Caracters check your types")
        } else {
          const TruePassowrd = await bcrypt.hash(req.body.Pass, 10)
          const user = await prisma.User.create({
            data: {
              Email: Email,
              Name: Name,
              Birthay: Birthay,
              CPF: CPF,
              Gender: Gender,
              Pass: TruePassowrd ,
            },
          })
          user.Pass = undefined

          const token = jwt.sign({ id: user.id }, authconfig.secret,{
             expiresIn: 86400,
          }  )
         
          res.json({resforuser: "Your user has been cretead", user, token})
        }
}

