import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { InputProps, InputTypes } from './types';
import { ViewWrapper, WidthWrapper } from './components/styled';
import { AddField } from './components/add-field/add-field';
import { MainForm } from './components/main-form/main-form';

const initialFormFields: InputProps[] = [
  {
    type: InputTypes.TEXT,
    name: 'name',
    label: 'Name',
  },
  {
    type: InputTypes.CHECKBOX,
    name: 'available',
    label: 'Currently available for work',
  },
  {
    type: InputTypes.NUMBER,
    name: 'yearsExperience',
    label: 'Years of experience',
    min: 0,
    max: 20,
  },
  {
    type: InputTypes.SELECT,
    name: 'position',
    label: 'Position',
    options: [
      { value: 'frontend', label: 'Frontend' },
      { value: 'backend', label: 'Backend' },
      { value: 'fullstack', label: 'Full-stack' },
      { value: 'devops', label: 'Dev-ops' },
      { value: 'design', label: 'UX/UI design' },
    ],
  },
];

export interface FormFieldsProps {
  [key: string]: string;
}

const App = () => {
  const {
    register,
    unregister,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFieldsProps>({
    mode: 'onSubmit',
  });

  const [formFields, setFormFields] = useState<InputProps[]>(initialFormFields);

  const onSubmit: SubmitHandler<FormFieldsProps> = (data) => {
    // eslint-disable-next-line no-console
    console.log('submitted form: ', data);
  };

  const handleAddField = (field: InputProps) => {
    setFormFields([...formFields, field]);
  };

  const handleRemoveField = (index: number) => {
    unregister(formFields[index].name);
    setFormFields(formFields.filter((field, i) => i !== index));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WidthWrapper>
        <ViewWrapper>
          <MainForm
            fields={formFields}
            errors={errors}
            register={register}
            onSubmit={handleSubmit(onSubmit)}
            onRemove={handleRemoveField}
          />
          <AddField onAdd={handleAddField} fieldNames={formFields.map((field) => field.name)} />
        </ViewWrapper>
      </WidthWrapper>
    </ThemeProvider>
  );
};

export default App;
