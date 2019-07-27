import { observable, set, extendObservable } from 'mobx';
import autobind from 'autobind-decorator';

@autobind
class UserModel {
  @observable pid;
  @observable email;
  @observable firstName;
  @observable lastName;
  @observable passwd;

  constructor(data) {
    set(this, data);
  }
}

export default UserModel;
