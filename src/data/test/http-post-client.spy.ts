import { HttpPostClient, HttpPostClientParams } from '../protocols/http/http-post-client'

class HttpPostClientSpy implements HttpPostClient {
  public url?: string

  async post(params: HttpPostClientParams): Promise<void> {
    this.url = params.url
  }
}

export default HttpPostClientSpy
