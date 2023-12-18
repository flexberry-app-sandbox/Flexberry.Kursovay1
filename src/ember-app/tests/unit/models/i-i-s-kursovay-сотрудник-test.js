import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovay-сотрудник', 'Unit | Model | i-i-s-kursovay-сотрудник', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kursovay-документ',
    'model:i-i-s-kursovay-заказ',
    'model:i-i-s-kursovay-запись-в-накладной',
    'model:i-i-s-kursovay-накладная',
    'model:i-i-s-kursovay-склад',
    'model:i-i-s-kursovay-сотрудник',
    'model:i-i-s-kursovay-строка-заказа',
    'model:i-i-s-kursovay-товар-на-складе',
    'model:i-i-s-kursovay-товар',
    'model:i-i-s-kursovay-хранилище',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
