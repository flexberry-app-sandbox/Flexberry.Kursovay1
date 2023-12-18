import {
  defineNamespace,
  defineProjections,
  Model as ХранилищеMixin
} from '../mixins/regenerated/models/i-i-s-kursovay-хранилище';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ХранилищеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
