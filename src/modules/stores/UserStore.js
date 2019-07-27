import { observable, action, computed } from 'mobx';
import { asyncAction } from 'mobx-utils';
import autobind from 'autobind-decorator';

// import modules
import UserModel from 'modules/models/UserModel';
import UserRepository from 'modules/repositories/UserRepository';

@autobind
class UserStore {
  @observable user = new UserModel();

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action setEmail(email) {
    this.user.email = email;
  }

  @action setPasswd(passwd) {
    this.user.passwd = passwd;
  }

  @computed get name() {
    return this.user.firstName + ' ' + this.user.lastName;
  }

  @computed get isLogin() {
    return this.user.userPid != null;
  }

  loadUser(params) {
    console.log('UserStore.loadUser');
  }

  @asyncAction
  async *register(params) {
    const { data, status } = yield UserRepository.register(params);

    if (status === 200) {
      this.user = new UserModel(data);
    }
  }
}

export default UserStore;
