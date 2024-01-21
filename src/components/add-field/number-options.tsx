import { UseFormRegister } from 'react-hook-form';
import { InputTypes } from '../../types';
import { AddFieldFormProps } from './add-field';
import { NumberInput } from '../inputs/number';

interface NumberOptionsProps {
  register: UseFormRegister<AddFieldFormProps>;
}

export const NumberOptions = ({ register }: NumberOptionsProps) => {
  return (
    <>
      <NumberInput type={InputTypes.NUMBER} {...register('min')} label="Min value" />
      <NumberInput type={InputTypes.NUMBER} {...register('max')} label="Max value" />
    </>
  );
};
