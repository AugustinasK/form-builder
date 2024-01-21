export enum InputTypes {
  TEXT = 'text',
  NUMBER = 'number',
  CHECKBOX = 'checkbox',
  SELECT = 'select',
}

export interface BaseInputProps {
  type: InputTypes.TEXT | InputTypes.NUMBER | InputTypes.CHECKBOX | InputTypes.SELECT;
  name: string;
  label: string;
  error?: string;
}

export interface TextInputProps extends BaseInputProps {
  type: InputTypes.TEXT;
}

export interface NumberInputProps extends BaseInputProps {
  type: InputTypes.NUMBER;
  min?: string | number;
  max?: string | number;
}

export interface CheckboxInputProps extends BaseInputProps {
  type: InputTypes.CHECKBOX;
}

export interface SelectInputProps extends BaseInputProps {
  type: InputTypes.SELECT;
  options: {
    value: string;
    label: string;
  }[];
}

export type InputProps = TextInputProps | NumberInputProps | CheckboxInputProps | SelectInputProps;
