class Response {
    constructor(success, message, records, data) {
        this.success = success;
        this.message = message;
        this.records = records;
        this.data = data;
    }
}

class SuccessfulResponse extends Response {
    constructor(message, data) {
        super(true, message, data.length, data);
    }
}

class FailedResponse extends Response {
    constructor(error_message) {
        super(false, error_message, 0, []);
    }
}

module.exports = { SuccessfulResponse, FailedResponse };
