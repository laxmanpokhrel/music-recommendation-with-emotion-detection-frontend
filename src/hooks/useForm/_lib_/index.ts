import { IYupError } from '@Schemas/interfaces';
import { convertObject } from '@Utils/index';
import { Schema } from 'yup';

/* eslint-disable import/prefer-default-export */
/**
 * The function `validateValueWithYupSchema` takes a Yup validation schema and a set of values, and
 * returns an object containing any validation errors.
 * @param validationSchema - The `validationSchema` parameter is a Yup schema object that defines the
 * validation rules for the `values` object. Yup is a JavaScript schema builder for value parsing and
 * validation. It allows you to define a schema with various validation rules such as required fields,
 * data types, string length, and more.
 * @param values - The `values` parameter is an object that contains the values to be validated. Each
 * key in the object represents a field name, and the corresponding value represents the value of that
 * field.
 * @returns a Promise that resolves to a Record<string, any>.
 */
export async function validateValueWithYupSchema(
  validationSchema: Schema<any>,
  values: Record<string, any>,
): Promise<Record<string, any>> {
  try {
    if (Object.keys(values).length && validationSchema)
      await validationSchema.validateSync(values, { abortEarly: false });
    return {};
  } catch (err: any) {
    const tempError: Record<string, any> = {};
    err.inner.forEach(({ path, message }: IYupError) => {
      tempError[path] = message;
    });
    const convertedErrorObject: Record<string, any> = convertObject(tempError);
    return convertedErrorObject;
  }
}

export function getControlId(formName: string, controlName: string) {
  return `-${formName}-form-field-${controlName}`;
}
