import { Request, Response, NextFunction } from 'express';

class CustomHTTPError {
  public readonly message: string
  public readonly statusCode: number

  constructor(message: string, statusCode = 400) {
    this.message = message
    this.statusCode = statusCode
  }
}

const ErrorHandler = (
  err: Error,
  request: Request,
  response: Response,
  _next: NextFunction
) => {
  if (err instanceof CustomHTTPError) {
    return response
      .status(err.statusCode)
      .json({
        message: err.message
      })
  }

  return response
    .status(500)
    .json({
      message: `Internal server error ${err.message}`
    })
}

export {
  CustomHTTPError,
  ErrorHandler
}
