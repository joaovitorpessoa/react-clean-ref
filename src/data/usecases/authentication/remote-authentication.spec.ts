import { faker } from '@faker-js/faker'
import { mockAuthentication } from '~/domain/test/mock-authentication'

import HttpPostClientSpy from '~/data/test/http-post-client.spy'
import RemoteAuthentication from './remote-authentication'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

function systemUnderTestFactory(url: string = faker.internet.url()): SutTypes {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  it('SHOULD call HttpClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = systemUnderTestFactory(url)
    await sut.auth(mockAuthentication())
    expect(httpPostClientSpy.url).toBe(url)
  })

  it('SHOULD call HttpClient with correct body', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = systemUnderTestFactory(url)
    const authenticationParams = mockAuthentication()
    await sut.auth(authenticationParams)
    expect(httpPostClientSpy.body).toEqual(authenticationParams)
  })
})
