const milSecond = 60 * 1000;
db.trips.aggregate([{
  $match: {
    startTime: {
      $gt: ISODate("2016-03-10T00:00:00Z"),
      $lt: ISODate("2016-03-10T23:59:59Z"),
    },
  },

}, {
  $group: {
    _id: 0,
    duracaoMediaEmMinutos: {
      $avg: {
        $divide: [{
          $subtract: ["$stopTime", "$startTime"],
        }, milSecond],
      },
    },
  },
}, {
  $project: {
    _id: 0,
    duracaoMediaEmMinutos: {
      $ceil: "$duracaoMediaEmMinutos",
    },
  },
}]);
