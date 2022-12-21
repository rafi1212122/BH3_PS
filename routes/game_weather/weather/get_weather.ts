import { Request, Response } from "express";

export default function handler(req: Request, res: Response) {
	return res.json({
		retcode: 0,
		message: "OK",
		data: {
			timezone: 7,
			hourly: [
				{ condition: 1, hour: 14, date: "2022-12-20", temp: 27 },
				{ condition: 1, hour: 15, date: "2022-12-20", temp: 26 },
				{ condition: 1, hour: 16, date: "2022-12-20", temp: 26 },
				{ condition: 1, hour: 17, date: "2022-12-20", temp: 25 },
				{ condition: 1, hour: 18, date: "2022-12-20", temp: 25 },
				{ condition: 1, hour: 19, date: "2022-12-20", temp: 24 },
				{ condition: 1, hour: 20, date: "2022-12-20", temp: 24 },
				{ condition: 1, hour: 21, date: "2022-12-20", temp: 23 },
				{ condition: 1, hour: 22, date: "2022-12-20", temp: 23 },
				{ condition: 1, hour: 23, date: "2022-12-20", temp: 22 },
				{ condition: 1, hour: 0, date: "2022-12-21", temp: 22 },
				{ condition: 1, hour: 1, date: "2022-12-21", temp: 23 },
				{ condition: 1, hour: 2, date: "2022-12-21", temp: 23 },
				{ condition: 1, hour: 3, date: "2022-12-21", temp: 24 },
				{ condition: 1, hour: 4, date: "2022-12-21", temp: 24 },
				{ condition: 1, hour: 5, date: "2022-12-21", temp: 25 },
				{ condition: 1, hour: 6, date: "2022-12-21", temp: 25 },
				{ condition: 1, hour: 7, date: "2022-12-21", temp: 26 },
				{ condition: 1, hour: 8, date: "2022-12-21", temp: 26 },
				{ condition: 1, hour: 9, date: "2022-12-21", temp: 27 },
				{ condition: 1, hour: 10, date: "2022-12-21", temp: 27 },
				{ condition: 1, hour: 11, date: "2022-12-21", temp: 27 },
				{ condition: 1, hour: 12, date: "2022-12-21", temp: 27 },
				{ condition: 1, hour: 13, date: "2022-12-21", temp: 27 },
			],
		},
	});
}
