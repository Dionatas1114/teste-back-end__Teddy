import successCodes from './SuccessCodes';

class ApiResult {
  static get OK() {
    return 200;
  }

  static get BAD_REQUEST() {
    return 400;
  }

  static get UNAUTHORIZED() {
    return 401;
  }

  static get FORBIDDEN() {
    return 403;
  }

  static get NOT_FOUND() {
    return 404;
  }

  static get CONFLICT() {
    return 409;
  }

  static parseResult(success, data, message) {
    const successCode = successCodes[message];
    return {
      success,
      message: successCode.message,
      successCode: successCode.code,
      data,
    };
  }
}

export default ApiResult;
