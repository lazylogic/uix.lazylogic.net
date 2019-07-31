import { observable, set, computed } from 'mobx';

const ROLL_ADMIN = 'ADMIN';
const ROLL_USER = 'USER';

class UserModel {
  @observable isLoggedIn = false;
  @observable roll = '';
  @observable uuid = '';
  @observable first_name = '';
  @observable last_name = '';
  @observable email = '';
  @observable locale = '';

  constructor(data) {
    set(this, data);
  }

  @computed get name() {
    return this.first_name + ' ' + this.last_name;
  }

  @computed get isAdmin() {
    return this.roll === ROLL_ADMIN;
  }

  @computed get isUser() {
    return this.roll === ROLL_USER;
  }
}

export default UserModel;
