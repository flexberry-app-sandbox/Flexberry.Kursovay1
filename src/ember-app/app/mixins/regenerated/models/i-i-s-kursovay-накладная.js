import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  вес: DS.attr('decimal'),
  датаОтгрузки: DS.attr('date'),
  примечание: DS.attr('string'),
  статус: DS.attr('i-i-s-kursovay-состояние-накладной'),
  фИОПолучателя: DS.attr('string'),
  заказ: DS.belongsTo('i-i-s-kursovay-заказ', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-kursovay-сотрудник', { inverse: null, async: false }),
  записьВНакладной: DS.hasMany('i-i-s-kursovay-запись-в-накладной', { inverse: 'накладная', async: false })
});

export let ValidationRules = {
  вес: {
    descriptionKey: 'models.i-i-s-kursovay-накладная.validations.вес.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  датаОтгрузки: {
    descriptionKey: 'models.i-i-s-kursovay-накладная.validations.датаОтгрузки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  примечание: {
    descriptionKey: 'models.i-i-s-kursovay-накладная.validations.примечание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-kursovay-накладная.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИОПолучателя: {
    descriptionKey: 'models.i-i-s-kursovay-накладная.validations.фИОПолучателя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-kursovay-накладная.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-kursovay-накладная.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  записьВНакладной: {
    descriptionKey: 'models.i-i-s-kursovay-накладная.validations.записьВНакладной.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-kursovay-документ'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НакладнаяE', 'i-i-s-kursovay-накладная', {
    примечание: attr('Примечание', { index: 0 }),
    датаОтгрузки: attr('Дата отгрузки', { index: 1 }),
    вес: attr('Вес', { index: 2 }),
    статус: attr('Статус', { index: 3 }),
    фИОПолучателя: attr('Ф и о получателя', { index: 4 }),
    датаЗаполнения: attr('Дата заполнения', { index: 5 }),
    номер: attr('Номер', { index: 6 }),
    сотрудник: belongsTo('i-i-s-kursovay-сотрудник', 'Сотрудник', {
      фамилия: attr('Фамилия', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'фамилия' }),
    заказ: belongsTo('i-i-s-kursovay-заказ', 'Заказ', {
      датаОплаты: attr('Дата оплаты', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'датаОплаты' }),
    записьВНакладной: hasMany('i-i-s-kursovay-запись-в-накладной', 'Запись в накладной', {
      сумма: attr('Сумма', { index: 0 }),
      количество: attr('Количество', { index: 1 }),
      цена: attr('Цена', { index: 2 }),
      вес: attr('Вес', { index: 3 }),
      товар: belongsTo('i-i-s-kursovay-товар', 'Товар', {
        название: attr('Название', { index: 5, hidden: true })
      }, { index: 4, displayMemberPath: 'название' })
    })
  });

  modelClass.defineProjection('НакладнаяL', 'i-i-s-kursovay-накладная', {
    примечание: attr('Примечание', { index: 0 }),
    датаОтгрузки: attr('Дата отгрузки', { index: 1 }),
    вес: attr('Вес', { index: 2 }),
    статус: attr('Статус', { index: 3 }),
    фИОПолучателя: attr('Ф и о получателя', { index: 4 }),
    датаЗаполнения: attr('Дата заполнения', { index: 5 }),
    номер: attr('Номер', { index: 6 }),
    сотрудник: belongsTo('i-i-s-kursovay-сотрудник', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 7 })
    }, { index: -1, hidden: true }),
    заказ: belongsTo('i-i-s-kursovay-заказ', 'Дата оплаты', {
      датаОплаты: attr('Дата оплаты', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
