import { Serializer as ХранилищеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovay-хранилище';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ХранилищеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
