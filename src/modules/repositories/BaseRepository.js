class BaseRepository {
  constructor(attr) {
    Object.assign(this, attr);
  }

  count() {}

  delete(model) {}

  deleteAll() {}

  deleteById(id) {}

  existById(id) {}

  findAll() {}

  findAllById(ids) {}

  findById(id) {}

  save(model) {}

  saveAll(models) {}
}
