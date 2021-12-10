export class _FlightLogService {
  initialData = [
    {
      passengerName: "cherprang",
      airport: "bangkok",
      timestamp: 1630454400,
      type: "departure",
    },
    {
      passengerName: "sita",
      airport: "chiangmai",
      timestamp: 1630627200,
      type: "departure",
    },
    {
      passengerName: "cherprang",
      airport: "tokyo",
      timestamp: 1630454405,
      type: "arrival",
    },
  ];

  getLogs() {
    const that = this
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(that.initialData || []);
      }, 2000);
    });
  }
}

export const FlightLogService = new _FlightLogService()
