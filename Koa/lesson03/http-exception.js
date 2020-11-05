class HttpException extends Error {
	constructor(message = 'HttpException', code = 1000, status = 400) {
		super(message);
		this.code = code;
		this.status = status;
	}
}

class NotFoundException extends HttpException {
	constructor() {
		super('404', 404, 404);
	}
}

module.exports = {
    HttpException,
    NotFoundException
};
