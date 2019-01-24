import request from '../utils/request'
export default {
  login (data) {
    return request({
      url: '/login',
      methods: 'post',
      data
    })
  }
}
