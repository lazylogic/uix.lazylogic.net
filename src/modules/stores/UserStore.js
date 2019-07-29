import { observable, action, flow, set } from 'mobx';

// import modules
import UserModel from 'modules/models/UserModel';
import UserRepository from 'modules/repositories/UserRepository';

class UserStore {
  @observable user = new UserModel();

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action.bound
  auth = flow(function*() {
    try {
      const response = yield UserRepository.auth();
      set(this.user, response.data || {});
      console.log('UserStore.auth()', response.data);
    } catch (error) {
      return error;
    }
  });

  @action.bound
  create = flow(function*(user) {
    return yield UserRepository.create(user);
  });

  @action.bound
  update = flow(function*(user) {
    return yield UserRepository.update(user);
  });

  @action.bound
  delete = flow(function*(id) {
    return yield UserRepository.delete(id);
  });
}

export default UserStore;
