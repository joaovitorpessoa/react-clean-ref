import HttpPostClientSpy from '../../test/http-post-client.spy'
import RemoteAuthentication from './remote-authentication'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

function systemUnderTestFactory(url: string = 'any_url'): SutTypes {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  it('SHOULD call HttpClient with correct URL', async () => {
    const url = 'other_url'
    const { sut, httpPostClientSpy } = systemUnderTestFactory(url)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
