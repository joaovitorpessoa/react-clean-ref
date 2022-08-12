import { AuthenticationParams } from '../../../domain/usecases/authentication'
import { HttpPostClient } from '../../protocols/http/http-post-client'
class RemoteAuthentication {
  private readonly url: string
  private readonly httpPostClient: HttpPostClient

  constructor(url: string, httpPostClient: HttpPostClient) {
    this.url = url
    this.httpPostClient = httpPostClient
  }

  async auth(params: AuthenticationParams): Promise<void> {
    await this.httpPostClient.post({ url: this.url, body: params })
  }
}

export default RemoteAuthentication
