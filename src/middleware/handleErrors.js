import { GeneralError } from '../utils/errors';
import { BadRequest } from '../utils/errors';
import { NotFound } from '../utils/errors';
import { Forbidden } from '../utils/errors';
import { RequestTimeout } from '../utils/errors';
import { Conflict } from '../utils/errors';
import { Unauthorized } from '../utils/errors';
import { Gone } from '../utils/errors';
import { BadGateway } from '../utils/errors';
import { ServiceUnavailable } from '../utils/errors';

const handleErrors = (err, req, res, next) => {
    if (err instanceof GeneralError) {
        return res.status(err.getCode()).json({
            status: 'error',
            message: err.message
        });
    }
    else if (err instanceof BadRequest) {
        return res.status(err.getCode()).json({
            status: 'error',
            message: err.message
        });
    }

    else if (err instanceof NotFound) {
        return res.status(err.getCode()).json({
            status: 'error',
            message: err.message
        });
    }
    else if (err instanceof Forbidden) {
        return res.status(err.getCode()).json({
            status: 'error',
            message: err.message
        });
    }
    else if (err instanceof RequestTimeout) {

        return res.status(err.getCode()).json({
            status: 'error',
            message: err.message
        });
    }
    else if (err instanceof Conflict) {
        return res.status(err.getCode()).json({
            status: 'error',
            message: err.message
        });
    }
    else if (err instanceof Unauthorized) {
        return res.status(err.getCode()).json({
            status: 'error',
            message: err.message
        });
    }
    else if (err instanceof Gone) {
        return res.status(err.getCode()).json({
            status: 'error',
            message: err.message
        });
    }
    else if (err instanceof BadGateway) {
        return res.status(err.getCode()).json({
            status: 'error',
            message: err.message
        });
    }
    else if (err instanceof ServiceUnavailable) {
        return res.status(err.getCode()).json({
            status: 'error',
            message: err.message
        });
    }

    return res.status(500).json({
        status: 'error',
        message: err.message
    });
};


export default handleErrors;
