import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKursovayДокументLForm from './forms/i-i-s-kursovay-документ-l';
import IISKursovayЗаказLForm from './forms/i-i-s-kursovay-заказ-l';
import IISKursovayНакладнаяLForm from './forms/i-i-s-kursovay-накладная-l';
import IISKursovayСкладLForm from './forms/i-i-s-kursovay-склад-l';
import IISKursovayСотрудникLForm from './forms/i-i-s-kursovay-сотрудник-l';
import IISKursovayТоварLForm from './forms/i-i-s-kursovay-товар-l';
import IISKursovayХранилищеLForm from './forms/i-i-s-kursovay-хранилище-l';
import IISKursovayДокументEForm from './forms/i-i-s-kursovay-документ-e';
import IISKursovayЗаказEForm from './forms/i-i-s-kursovay-заказ-e';
import IISKursovayНакладнаяEForm from './forms/i-i-s-kursovay-накладная-e';
import IISKursovayСкладEForm from './forms/i-i-s-kursovay-склад-e';
import IISKursovayСотрудникEForm from './forms/i-i-s-kursovay-сотрудник-e';
import IISKursovayТоварEForm from './forms/i-i-s-kursovay-товар-e';
import IISKursovayХранилищеEForm from './forms/i-i-s-kursovay-хранилище-e';
import IISKursovayДокументModel from './models/i-i-s-kursovay-документ';
import IISKursovayЗаказModel from './models/i-i-s-kursovay-заказ';
import IISKursovayЗаписьВНакладнойModel from './models/i-i-s-kursovay-запись-в-накладной';
import IISKursovayНакладнаяModel from './models/i-i-s-kursovay-накладная';
import IISKursovayСкладModel from './models/i-i-s-kursovay-склад';
import IISKursovayСотрудникModel from './models/i-i-s-kursovay-сотрудник';
import IISKursovayСтрокаЗаказаModel from './models/i-i-s-kursovay-строка-заказа';
import IISKursovayТоварНаСкладеModel from './models/i-i-s-kursovay-товар-на-складе';
import IISKursovayТоварModel from './models/i-i-s-kursovay-товар';
import IISKursovayХранилищеModel from './models/i-i-s-kursovay-хранилище';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovay-документ': IISKursovayДокументModel,
    'i-i-s-kursovay-заказ': IISKursovayЗаказModel,
    'i-i-s-kursovay-запись-в-накладной': IISKursovayЗаписьВНакладнойModel,
    'i-i-s-kursovay-накладная': IISKursovayНакладнаяModel,
    'i-i-s-kursovay-склад': IISKursovayСкладModel,
    'i-i-s-kursovay-сотрудник': IISKursovayСотрудникModel,
    'i-i-s-kursovay-строка-заказа': IISKursovayСтрокаЗаказаModel,
    'i-i-s-kursovay-товар-на-складе': IISKursovayТоварНаСкладеModel,
    'i-i-s-kursovay-товар': IISKursovayТоварModel,
    'i-i-s-kursovay-хранилище': IISKursovayХранилищеModel
  },

  'application-name': 'Kursovay',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursovay',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovay',
          title: 'Kursovay'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        kursovay: {
          caption: 'Kursovay',
          title: 'Kursovay',
          сотрудники: {
            caption: 'Сотрудники',
            title: 'Сотрудники',
            'i-i-s-kursovay-сотрудник-l': {
              caption: 'Сотрудник',
              title: ''
            }
          },
          'информацию-о-заказе': {
            caption: 'Информацию о заказе',
            title: 'Информацию о заказе',
            'i-i-s-kursovay-накладная-l': {
              caption: 'Накладная',
              title: ''
            },
            'i-i-s-kursovay-заказ-l': {
              caption: 'Заказ',
              title: ''
            },
            'i-i-s-kursovay-документ-l': {
              caption: 'Документ',
              title: ''
            }
          },
          'товар-на-складе': {
            caption: 'Товар на складе',
            title: 'Товар на складе',
            'i-i-s-kursovay-склад-l': {
              caption: 'Склад',
              title: ''
            },
            'i-i-s-kursovay-товар-l': {
              caption: 'Товар',
              title: ''
            },
            'i-i-s-kursovay-хранилище-l': {
              caption: 'Хранилище',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kursovay-документ-l': IISKursovayДокументLForm,
    'i-i-s-kursovay-заказ-l': IISKursovayЗаказLForm,
    'i-i-s-kursovay-накладная-l': IISKursovayНакладнаяLForm,
    'i-i-s-kursovay-склад-l': IISKursovayСкладLForm,
    'i-i-s-kursovay-сотрудник-l': IISKursovayСотрудникLForm,
    'i-i-s-kursovay-товар-l': IISKursovayТоварLForm,
    'i-i-s-kursovay-хранилище-l': IISKursovayХранилищеLForm,
    'i-i-s-kursovay-документ-e': IISKursovayДокументEForm,
    'i-i-s-kursovay-заказ-e': IISKursovayЗаказEForm,
    'i-i-s-kursovay-накладная-e': IISKursovayНакладнаяEForm,
    'i-i-s-kursovay-склад-e': IISKursovayСкладEForm,
    'i-i-s-kursovay-сотрудник-e': IISKursovayСотрудникEForm,
    'i-i-s-kursovay-товар-e': IISKursovayТоварEForm,
    'i-i-s-kursovay-хранилище-e': IISKursovayХранилищеEForm
  },

});

export default translations;
