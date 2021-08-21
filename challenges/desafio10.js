const miliSecond = 60 * 60 * 1000;
db.trips.aggregate([{
  $group: {
    _id: "$usertype",
    duracaoMedia: {
      $avg: {
        $divide: [{
          $subtract: ["$stopTime", "$startTime"],
        }, miliSecond],
      },
    },

  },
}, {
  $project: {
    _id: 0,
    tipo: "$_id",
    duracaoMedia: {
      $round: ["$duracaoMedia", 2],
    },

  },
}, {
  $sort: {
    duracaoMedia: 1,
  },
}]);
