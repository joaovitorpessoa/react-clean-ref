import { HttpPostClient } from '../../protocols/http/http-post-client'
import RemoteAuthentication from './remote-authentication'

class HttpPostClientSpy implements HttpPostClient {
  public url?: string

  async post(url: string): Promise<void> {
    this.url = url
  }
}

describe('RemoteAuthentication', () => {
  it('SHOULD call HttpClient with correct URL', async () => {
    const url = 'an_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
