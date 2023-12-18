import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovay.caption'),
          title: i18n.t('forms.application.sitemap.kursovay.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.kursovay.сотрудники.caption'),
            title: i18n.t('forms.application.sitemap.kursovay.сотрудники.title'),
            children: [{
              link: 'i-i-s-kursovay-сотрудник-l',
              caption: i18n.t('forms.application.sitemap.kursovay.сотрудники.i-i-s-kursovay-сотрудник-l.caption'),
              title: i18n.t('forms.application.sitemap.kursovay.сотрудники.i-i-s-kursovay-сотрудник-l.title'),
              icon: 'archive',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.kursovay.информацию-о-заказе.caption'),
            title: i18n.t('forms.application.sitemap.kursovay.информацию-о-заказе.title'),
            children: [{
              link: 'i-i-s-kursovay-накладная-l',
              caption: i18n.t('forms.application.sitemap.kursovay.информацию-о-заказе.i-i-s-kursovay-накладная-l.caption'),
              title: i18n.t('forms.application.sitemap.kursovay.информацию-о-заказе.i-i-s-kursovay-накладная-l.title'),
              icon: 'chart line',
              children: null
            }, {
              link: 'i-i-s-kursovay-заказ-l',
              caption: i18n.t('forms.application.sitemap.kursovay.информацию-о-заказе.i-i-s-kursovay-заказ-l.caption'),
              title: i18n.t('forms.application.sitemap.kursovay.информацию-о-заказе.i-i-s-kursovay-заказ-l.title'),
              icon: 'chart line',
              children: null
            }, {
              link: 'i-i-s-kursovay-документ-l',
              caption: i18n.t('forms.application.sitemap.kursovay.информацию-о-заказе.i-i-s-kursovay-документ-l.caption'),
              title: i18n.t('forms.application.sitemap.kursovay.информацию-о-заказе.i-i-s-kursovay-документ-l.title'),
              icon: 'calendar',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.kursovay.товар-на-складе.caption'),
            title: i18n.t('forms.application.sitemap.kursovay.товар-на-складе.title'),
            children: [{
              link: 'i-i-s-kursovay-склад-l',
              caption: i18n.t('forms.application.sitemap.kursovay.товар-на-складе.i-i-s-kursovay-склад-l.caption'),
              title: i18n.t('forms.application.sitemap.kursovay.товар-на-складе.i-i-s-kursovay-склад-l.title'),
              icon: 'phone',
              children: null
            }, {
              link: 'i-i-s-kursovay-товар-l',
              caption: i18n.t('forms.application.sitemap.kursovay.товар-на-складе.i-i-s-kursovay-товар-l.caption'),
              title: i18n.t('forms.application.sitemap.kursovay.товар-на-складе.i-i-s-kursovay-товар-l.title'),
              icon: 'list',
              children: null
            }, {
              link: 'i-i-s-kursovay-хранилище-l',
              caption: i18n.t('forms.application.sitemap.kursovay.товар-на-складе.i-i-s-kursovay-хранилище-l.caption'),
              title: i18n.t('forms.application.sitemap.kursovay.товар-на-складе.i-i-s-kursovay-хранилище-l.title'),
              icon: 'table',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})