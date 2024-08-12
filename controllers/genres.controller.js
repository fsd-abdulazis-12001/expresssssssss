module.exports.getGenres = (req, res) => {
    const JSONData = [
        "Aksi",
        "Anak-anak",
        "Anime",
        "Britania",
        "Drama",
        "Fantasi Ilmiah & Fantasi",
        "Kejahatan",
        "KDrama",
        "Komedi",
        "Petualangan",
        "Perang",
        "Romantis",
        "Sains & Alam",
        "Thriller"
      ]
    res.json(JSONData)
}