import type { NextFunction, Request, Response } from "express";

async function protect(req: Request, res: Response, next: NextFunction) {
	const header = req.headers.authorization;
	if (typeof header !== "undefined") {
		const bearer = header.split(" ");
		const token = bearer[1];
		res.locals.token = token;
		next();
	} else {
		res.status(403).json({
			message: "invalid token",
		});
	}
}

export default protect;
