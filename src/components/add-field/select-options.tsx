import { useState } from 'react';
import { TextInput } from '../inputs/text';
import { InputTypes } from '../../types';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { AddFieldFormProps } from './add-field';
import { stringToCharArray } from '../../utils';
import { SecondaryButton } from '../styled';

interface SelectOptionsProps {
  register: UseFormRegister<AddFieldFormProps>;
  errors: FieldErrors<AddFieldFormProps>;
}

export const SelectOptions = ({ register, errors }: SelectOptionsProps) => {
  const [selectOptions, setSelectOptions] = useState(['Option 0']);

  const handleAddOption = () => {
    setSelectOptions([...selectOptions, `Option ${selectOptions.length}`]);
  };

  const handleRemoveOption = (index: number) => {
    setSelectOptions(selectOptions.filter((options, optionIndex) => optionIndex !== index));
  };

  return (
    <>
      {selectOptions.map((option, index) => {
        const optionKey = stringToCharArray(option);
        return (
          <TextInput
            key={index}
            type={InputTypes.TEXT}
            {...register(`options.${optionKey}`, { required: 'Option must have a value' })}
            label={option}
            error={errors.options && errors.options[optionKey]?.message}
          />
        );
      })}
      <SecondaryButton type="button" onClick={handleAddOption}>
        Add option
      </SecondaryButton>
      <SecondaryButton
        type="button"
        onClick={() => handleRemoveOption(selectOptions.length - 1)}
        disabled={selectOptions.length === 1}
      >
        Remove last option
      </SecondaryButton>
    </>
  );
};
