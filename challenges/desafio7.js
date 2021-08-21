db.movies.aggregate([{
  $match: {
    languages: "English",
  },
},
{
  $unwind: "$cast",
}, {
  $group: {
    _id: "$cast",
    count: {
      $sum: 1,
    },
    mediaIMDB: {
      $avg: "$imdb.rating",
    },
  },
}, {
  $project: {
    _id: 1,
    numeroFilmes: "$count",
    mediaIMDB: {
      $round: ["$mediaIMDB", 1],
    },
  },
}, {
  $sort: {
    numeroFilmes: -1,
    _id: -1,
  },
},
]);
