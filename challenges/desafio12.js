// requisito 12

db.trips.aggregate([{
  $addFields: {
    diaDaSemana: {
      $dayOfWeek: "$startTime",
    },
  },

}, {
  $match: {
    diaDaSemana: 5,
  },
}, {
  $group: {
    _id: "$startStationName",
    count: {
      $sum: 1,
    },
  },
}, {
  $project: {
    _id: 0,
    // diaDaSemana: "$_id.diaDaSemana",
    nomeEstacao: "$_id",
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
