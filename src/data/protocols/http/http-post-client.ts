type HttpPostClientParams = {
  url: string
  body?: object
}

interface HttpPostClient {
  post(params: HttpPostClientParams): Promise<void>
}

export { HttpPostClient, HttpPostClientParams }
