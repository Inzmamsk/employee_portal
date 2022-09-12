class GeneralError extends Error {
    constructor(message) {
        super();
        this.message = message;
    }

    getCode() {
        if (this instanceof BadRequest) {
            return 400;
        }
        else if (this instanceof NotFound) {
            return 404;
        }
        else if (this instanceof Unauthorized) {
            return 401;
        }
        else if (this instanceof Forbidden) {
            return 403;
        }
        else if (this instanceof RequestTimeout) {
            return 408;
        }
        else if (this instanceof Conflict) {
            return 409;
        }
        else if (this instanceof Gone) {
            return 410;
        }
        else if (this instanceof BadGateway) {
            return 502;
        }
        else if (this instanceof ServiceUnavailable) {
            return 503;
        }

        return 500;
    }
}

class BadRequest extends GeneralError { }
class NotFound extends GeneralError { }
class Forbidden extends GeneralError { }
class RequestTimeout extends GeneralError { }
class Conflict extends GeneralError { }
class Unauthorized extends GeneralError { }
class Gone extends GeneralError { }
class BadGateway extends GeneralError { }
class ServiceUnavailable extends GeneralError { }

export {
    GeneralError,
    BadRequest,
    NotFound,
    Forbidden,
    RequestTimeout,
    Conflict,
    Unauthorized,
    Gone,
    BadGateway,
    ServiceUnavailable
};
