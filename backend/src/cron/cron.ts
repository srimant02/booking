import cron from "cron";
import https from "https";

const URL: string = "https://mern-booking-website-x63e.onrender.com";

const job = new cron.CronJob("*/14 * * * *", function () {
	https
		.get(URL, (res) => {
			if (res.statusCode === 200) {
				console.log("GET request sent successfully");
			} else {
				console.log("GET request failed", res.statusCode);
			}
		})
		.on("error", (e: Error) => {
			console.error("Error while sending request", e);
		});
});

export default job ;
