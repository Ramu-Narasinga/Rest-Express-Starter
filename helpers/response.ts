// https://stackoverflow.com/questions/40440729/having-a-fixed-response-structure-with-node-js-and-express

export class Success {
    message: string;
    data: object;
    constructor(res) {
        const {
            message,
            data
        } = res;
      // validate `message` somehow
      this.message = message;
      this.data = data
    }
}