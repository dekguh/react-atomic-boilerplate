import Cookies from 'js-cookie'

export const getCookieJwt = () => {
  return Cookies.get('jwtToken')
}

export const setCookieJwt = (token : string) => {
  return Cookies.set('jwtToken', token)
}