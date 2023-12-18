import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  единицаИзмерения: DS.attr('string'),
  кодТовара: DS.attr('number'),
  название: DS.attr('string'),
  описание: DS.attr('string'),
  цена: DS.attr('decimal')
});

export let ValidationRules = {
  единицаИзмерения: {
    descriptionKey: 'models.i-i-s-kursovay-товар.validations.единицаИзмерения.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодТовара: {
    descriptionKey: 'models.i-i-s-kursovay-товар.validations.кодТовара.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-kursovay-товар.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  описание: {
    descriptionKey: 'models.i-i-s-kursovay-товар.validations.описание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-kursovay-товар.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварE', 'i-i-s-kursovay-товар', {
    кодТовара: attr('Код товара', { index: 0 }),
    название: attr('Название', { index: 1 }),
    единицаИзмерения: attr('Единица измерения', { index: 2 }),
    описание: attr('Описание', { index: 3 }),
    цена: attr('Цена', { index: 4 })
  });

  modelClass.defineProjection('ТоварL', 'i-i-s-kursovay-товар', {
    кодТовара: attr('Код товара', { index: 0 }),
    название: attr('Название', { index: 1 }),
    единицаИзмерения: attr('Единица измерения', { index: 2 }),
    описание: attr('Описание', { index: 3 }),
    цена: attr('Цена', { index: 4 })
  });
};
