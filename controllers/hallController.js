const Hall = require("../models/hall");

module.exports = {
  get: (req, res) => {
    fetchUser();
    async function fetchUser() {
      const dbdata = await Hall.find({});
      console.log(dbdata);
      res.json(dbdata);
    }
  },

  post: (req, res) => {
    let halldetail = req.body;
    addHall();
    async function addHall() {
      const dbdata = await Hall.create(halldetail);
      console.log(dbdata);
      res.json(dbdata);
    }
  },
};
