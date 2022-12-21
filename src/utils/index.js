export const isLogin = () => {
  if (localStorage.getItem('userToken')) {
    return true
  }

  return false
}

export const Role = () => {
  if (localStorage.getItem('userRole')) {
    return localStorage.getItem('userRole')
  }

  return false
}
