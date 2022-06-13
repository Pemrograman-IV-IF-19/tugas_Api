const controllerkategori = require("../controller/kategoricontroller");
const router = require("express").Router();

router.post("/input", (req, res) => {
  controllerkategori
    .inputkategori(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/get-data", (req, res) => {
  controllerkategori
    .getAllkategori()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
  router.get("/get-data", (req, res) => {
    controllerkategori
      .getAllkategoriByName(req.params.namakategori)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.get("/get-data/:namakategori", (req, res) => {
    controllerkategori
      .getAllkategoriByName(req.params.namakategori)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.put("/get-update/:id", (req, res) => {
    controllerkategori
      .updatekategori(req.params.id, req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.delete("/get-delete/:id", (req, res) => {
    controllerkategori
      .hapuskategori(req.params.id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  });
});

module.exports = router;
