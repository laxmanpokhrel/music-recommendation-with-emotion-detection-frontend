import { IDropDownData } from '@Schemas/interfaces';

/* eslint-disable import/prefer-default-export */
export function dropDownWrapper(response: any): IDropDownData[] {
  return response.data.map(({ title, id }: any) => ({ label: title, value: title, id, code: id }));
}
