import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ХранилищеMixin
} from '../mixins/regenerated/models/i-i-s-kursovay-хранилище';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ХранилищеMixin, Validations, {
});

defineProjections(Model);

export default Model;
