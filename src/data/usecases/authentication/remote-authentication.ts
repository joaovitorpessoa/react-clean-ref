import { HttpPostClient } from '../../protocols/http/http-post-client'
class RemoteAuthentication {
  private readonly url: string
  private readonly httpPostClient: HttpPostClient

  constructor(url: string, httpPostClient: HttpPostClient) {
    this.url = url
    this.httpPostClient = httpPostClient
  }

  async auth(): Promise<void> {
    await this.httpPostClient.post(this.url)
  }
}

export default RemoteAuthentication
