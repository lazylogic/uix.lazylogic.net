import axios from 'axios';

class UserRepository {
  AUTH_URL = '/api/v1/auth';
  API_URL = '/api/v1/users';

  constructor(attr) {
    Object.assign(this, attr);
  }

  auth() {
    try {
      return axios.get(this.AUTH_URL);
    } catch (error) {
      console.error(error);
    }
  }

  findAll(params) {
    try {
      return axios.get(this.API_URL, { params });
    } catch (error) {
      console.error(error);
    }
  }

  findOne(id) {
    try {
      return axios.get(`${this.API_URL}/${id}`);
    } catch (error) {
      console.error(error);
    }
  }

  create(user) {
    try {
      console.log('UserRepository.create()', user);
      return axios.post(this.API_URL, user);
    } catch (error) {
      console.error(error);
    }
  }

  update(user) {
    try {
      console.log('UserRepository.update()', user);
      return axios.patch(`${this.API_URL}/${user.id}`, user);
    } catch (error) {
      console.error(error);
    }
  }

  delete(id) {
    try {
      console.log('UserRepository.delete()', id);
      return axios.delete(`${this.API_URL}/${id}`);
    } catch (error) {
      console.error(error);
    }
  }
}

// 싱글톤으로 리턴
export default new UserRepository();
