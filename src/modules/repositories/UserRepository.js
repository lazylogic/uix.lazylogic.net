import axios from 'axios';

class UserRepository {
  API_URL = '/rest/v1/users';

  constructor(attr) {
    Object.assign(this, attr);
  }

  findAll(params) {
    return axios.get(this.URL, { params });
  }

  findOne(userPid) {
    return axios.get(`${this.URL}/${userPid}`);
  }

  registe(params) {
    return axios.post(this.URL, { params });
  }

  update(userPid, params) {
    return axios.patch(`${this.URL}/${userPid}`, { params });
  }

  delete(userPid) {
    return axios.delete(`${this.URL}/${userPid}`);
  }
}

// 싱글톤으로 리턴
export default new UserRepository();
