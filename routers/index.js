import express from "express";
const router = express.Router();
import rateLimit from "express-rate-limit"
// const userRouter = require("./user.router");
// const productRouter = require("./product.router");
// const testdb = require("./testdb.router")
const daftarsaya = require("./daftarsaya.router")
const filmTrandingMovies = require("./filmTrandingMovies.router")
const genre = require("./genres.router")
const resumeMovies = require("./resumeMovies.router")
const resumeSeries = require("./resumeSeries.router")
const rilisBaruMovies = require("./rilisBaruMovies.router")
const seriesPersembahanChill = require("./seriesPersembahanChill.router")
const seriesTrending = require("./seriesTrending.router")
const topRatingFilmAndMovies = require("./topRatingFilmAndMovies.router")
const topRatingFilmSeriesHariIni = require("./topRatingFilmSeriesHariIni.router")
const episodeList = require("./episodes.router")


const limiter = rateLimit({
    windowMs: 1 * 10 * 1000,
    max: 40,
    message: 'Too many requests from this IP, please try again after a minute(SENGAJA BUAT TESTING TAMPILAN)'
  });

router.use(limiter, filmTrandingMovies)
router.use(daftarsaya)
router.use(genre)
router.use(limiter, resumeMovies)
router.use(limiter, resumeSeries)
router.use(limiter, rilisBaruMovies)
router.use(limiter, seriesPersembahanChill)
router.use(limiter, seriesTrending)
router.use(limiter, topRatingFilmAndMovies)
router.use(limiter, topRatingFilmSeriesHariIni)
router.use(episodeList)
router.get("/", (req, res) => {
      res.send("Hello world")
})


  
 


// router.use(userRouter)
// router.use(productRouter)

// router.use(testdb)
module.exports = router