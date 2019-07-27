import { observable } from 'mobx';
import { asyncAction } from 'mobx-utils';
import autobind from 'autobind-decorator';

// import modules
import UserModel from 'modules/models/UserModel';
import UserRepository from 'modules/repositories/UserRepository';

@autobind
class UserStore {
  @observable user;

  constructor(rootStore) {
    // rootStore를 통하여 다른 store(spring 서비스라고 생각하면 이해가 쉽다.)를 사용 할 수 있다.
    // rootStore.deliveryStore.findAll() <- 이런식으로
    this.rootStore = rootStore;
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
