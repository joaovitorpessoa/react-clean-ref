import {
  HttpPostClient,
  HttpPostClientParams
} from '../protocols/http/http-post-client'

class HttpPostClientSpy implements HttpPostClient {
  public url?: string
  public body?: object

  async post(params: HttpPostClientParams): Promise<void> {
    this.url = params.url
    this.body = params.body
  }
}

export default HttpPostClientSpy
