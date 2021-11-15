import { isAxiosError } from '../config';

type DmError = { Error: { Message: string; StatusCode: number } };
type SerializedError = { message: string; statusCode: number };

const message = 'Unknown direct mailers error.';

export class DirectMailersError extends Error {
  statusCode = 500;
  message = message;

  constructor(error: any) {
    super(error.message || message);

    if (isAxiosError(error)) {
      if (error.response?.data.Error) {
        const err = error.response.data as DmError;
        this.message = err.Error.Message;
        this.statusCode = err.Error.StatusCode;
      } else {
        this.message = error.message;
        this.statusCode = error.response?.status || 500;
      }
    }

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, DirectMailersError.prototype);
  }

  serializeError(): SerializedError {
    return { message: this.message, statusCode: this.statusCode };
  }
}
