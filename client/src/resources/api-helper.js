import axios from 'axios'

const baseUrl = process.env.NODE_ENV ===
  'production' ? 'http://octago.surge.sh/' :
  'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
});

export const showUser = async () => {
  const resp = await api.get(`/home`)
  return resp.data
}

export const showUserItem = async (id) => {
  const resp = await api(`/users/${id}`)
  return resp.data
}

// ============ Events ============

export const showEvent = async () => {
  const resp = await api.get(`/events`)
  return resp.data
}

export const postEvent = async (id, postData) => {
  const resp = await api.post(`/events`, { post: postData })
  return resp.data
}

// export const showPost = async () => {
//   const resp = await api.get(`/posts`)
//   return resp.data
// }

// export const showPersonalPost = async (id) => {
//   const resp = await api.get(`/profile/${id}`)
//   return resp.data
// }

// export const putPost = async (id, postData) => {
//   const resp = await api.put(`/users/:id/posts/${id}`, { post: postData })
//   return resp.data
// }

// export const destroyPost = async (id) => {
//   const resp = await api.delete(`/users/:id/posts/${id}`)
//   return resp.data
// }

//========== AUTH ===================

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { auth: loginData });
  localStorage.setItem('authToken', resp.data.token)
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post(`/users/`, { user: registerData })
  localStorage.setItem('authToken', resp.data.token)
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken')
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify')
    return resp.data
  }
  return false
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}

