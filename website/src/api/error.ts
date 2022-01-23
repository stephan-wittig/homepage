export class HttpError extends Error {
  constructor(message: string, public code: number) {
    super(message);
    this.name = "HTTP_ERROR"
  }

  static async fromResponse (res: Response): Promise<HttpError> {
    const message = await res.text();
    return new HttpError(message, res.status);
  }
}