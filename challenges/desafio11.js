db.trips.aggregate([{
  $group: {
    _id: {
      diaDaSemana: {
        $avg: {
          $dayOfWeek: "$startTime",
        },
      },
    },

    count: {
      $sum: 1,
    },
  },
}, {
  $project: {
    _id: 0,
    diaDaSemana: "$_id.diaDaSemana",
    total: "$count",
  },
}, {
  $sort: {
    diaDaSemana: 1,
  },
}, {
  $sort: {
    total: -1,
  },
}, {
  $limit: 1,
}]);
