import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  номер: DS.attr('number'),
  сотрудник: DS.belongsTo('i-i-s-kursovay-сотрудник', { inverse: null, async: false }),
  товарНаСкладе: DS.hasMany('i-i-s-kursovay-товар-на-складе', { inverse: 'склад', async: false })
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-kursovay-склад.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-kursovay-склад.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-kursovay-склад.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  товарНаСкладе: {
    descriptionKey: 'models.i-i-s-kursovay-склад.validations.товарНаСкладе.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СкладE', 'i-i-s-kursovay-склад', {
    номер: attr('Номер', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    сотрудник: belongsTo('i-i-s-kursovay-сотрудник', 'Сотрудник', {
      фамилия: attr('Фамилия', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фамилия' }),
    товарНаСкладе: hasMany('i-i-s-kursovay-товар-на-складе', 'Товар на складе', {
      этаж: attr('Этаж', { index: 0 }),
      ряд: attr('Ряд', { index: 1 }),
      ячейкаТовара: attr('Ячейка товара', { index: 2 }),
      количество: attr('Количество', { index: 3 }),
      товар: belongsTo('i-i-s-kursovay-товар', 'Товар', {
        название: attr('Название', { index: 5, hidden: true })
      }, { index: 4, displayMemberPath: 'название' })
    })
  });

  modelClass.defineProjection('СкладL', 'i-i-s-kursovay-склад', {
    номер: attr('Номер', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    сотрудник: belongsTo('i-i-s-kursovay-сотрудник', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
