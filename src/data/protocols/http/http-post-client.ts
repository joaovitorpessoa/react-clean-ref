type HttpPostClientParams = {
  url: string
}

interface HttpPostClient {
  post(params: HttpPostClientParams): Promise<void>
}

export { HttpPostClient, HttpPostClientParams }
