import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодАдреса: DS.attr('number'),
  склад: DS.belongsTo('i-i-s-kursovay-склад', { inverse: null, async: false })
});

export let ValidationRules = {
  кодАдреса: {
    descriptionKey: 'models.i-i-s-kursovay-хранилище.validations.кодАдреса.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  склад: {
    descriptionKey: 'models.i-i-s-kursovay-хранилище.validations.склад.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ХранилищеE', 'i-i-s-kursovay-хранилище', {
    кодАдреса: attr('Код адреса', { index: 0 }),
    склад: belongsTo('i-i-s-kursovay-склад', 'Склад', {
      адрес: attr('Адрес', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'адрес' })
  });

  modelClass.defineProjection('ХранилищеL', 'i-i-s-kursovay-хранилище', {
    кодАдреса: attr('Код адреса', { index: 0 }),
    склад: belongsTo('i-i-s-kursovay-склад', 'Адрес', {
      адрес: attr('Адрес', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
