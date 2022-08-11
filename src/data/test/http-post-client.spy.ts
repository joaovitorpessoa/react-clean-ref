import { HttpPostClient } from '../protocols/http/http-post-client'

class HttpPostClientSpy implements HttpPostClient {
  public url?: string

  async post(url: string): Promise<void> {
    this.url = url
  }
}

export default HttpPostClientSpy
