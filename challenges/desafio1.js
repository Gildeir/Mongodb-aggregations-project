db.movies.aggregate([{
  $match: {
    "imdb.rating": { $gte: 7 },
    $nor: [
      { genres: "Horror" },
      { genres: "Crime" },
    ],
    $or: [
      { rated: "PG" },
      { rated: "G" },
    ],
    $and: [
      { languages: "English" },
      { languages: "Spanish" },
    ],
  },
}]);
