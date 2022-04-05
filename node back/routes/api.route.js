const router = require('express').Router();
const cors = require('cors')

app.use(cors());
app.use(express.json());

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

module.exports = router;
