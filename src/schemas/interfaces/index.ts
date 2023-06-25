/* eslint-disable no-unused-vars */
import { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes } from 'react';
import { QueryParamsType, MutationParamsType } from '@Schemas/types';

export default interface IRoute {
  id?: number;
  path: string;
  name: string;
  component: React.ComponentType<any>;
  authenticated: boolean;
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
export interface IDivProps extends HTMLAttributes<HTMLDivElement> {}
export interface IInputTagProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface IFetchDataProps<T> {
  queryParams?: QueryParamsType<T>;
  params?: Record<string, any>;
}

export interface IFetchPaginatedDataProps<T> {
  queryParams?: QueryParamsType<T>;
  params?: Record<string, any>;
}

export interface IPostDataProps {
  mutationParams?: MutationParamsType;
  // payload: Record<string, any>;
}

export interface IFormFieldProps {
  name: string;
  placeholder: string;
  required: boolean;
  type:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
}

export interface IChartProps {
  data: Record<string, any>[any];
  fills?: string[];
  scrollable?: boolean;
  width?: string;
}

export interface IOverlayComponentProps {
  onClose: () => any;
  text?: string;
}

export interface PieChartDataItem {
  name: string;
  value: number;
}

export interface ILegendItemProps {
  color: string;
  name: string;
  onLegendClick: (key: string) => any;
}
export interface IPieLegendItemProps {
  color: string;
  name: string;
  value: number | string;
  percentage: number | string;
  onLegendClick: (key: string) => any;
}

export interface IBudget {
  id: number;
  budgetIcon: string;
  budgetName: string;
  amount: number;
}
export interface IDropDownData {
  label: string;
  value: string;
  id?: string | number;
  code?: string;
}

export interface IRegisterProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onFocus'> {
  bindvalue: any;
  onFocus: (e?: any) => void;
  onChange: (e: any) => void;
  touched: boolean;
  error: string;
}

export interface IComboBoxProps extends Partial<IRegisterProps> {
  options: IDropDownData[];
  choose?: keyof IDropDownData;
  multiple?: boolean;
  disabled?: boolean;
}

export interface IInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onFocus'> {
  onChange?: (e: any) => void;
  onFocus?: (e?: any) => void;
  hasIcon?: boolean;
  iconName?: string;
  varientSize?: 'sm' | 'lg';
  iconStyle?: string;
}
export interface IInputLabelProps {
  label: string;
  tooltipMessage?: string;
  astric?: boolean;
  id?: string;
  disabled?: boolean;
}

export interface IProjectData {
  id: string | number;
  projectId: string;
  name: string;
  sector: string;
  donar: string[];
  executingAgency: string;
  commitment: string;
  status: string;
}
export interface IFileDataObject {
  id: string | number;
  name: string;
  uploadedAt?: string;
  fileObject?: File;
  file_url?: string;
}

export interface IFormState {
  formHasError: boolean;
  formIsValid: boolean;
}
