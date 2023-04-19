import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup, { RadioGroupProps } from '@mui/material/RadioGroup';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

import { RadioContainer, RadioField } from './styles';

interface RadioProps {
  options: {
    id: string;
    label: string;
    value: any;
  }[];
}

const Radio: React.FC<RadioProps & RadioGroupProps> = ({
  options,
  name = '',
  onChange,
  value,
  ...props
}) => {
  const [currentChecked, setCurrentChecked] = useState('');

  const inputRefs = useRef<HTMLInputElement[]>([]);

  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.find(ref => ref.checked)?.value;
      },
      clearValue: (refs: HTMLInputElement[]) => {
        refs.forEach(ref => {
          ref.checked = false;
        });
      }
    });
  }, [fieldName, registerField]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentChecked(event.target.value);
    inputRefs.current.forEach(ref => {
      const value = event.target.value as typeof ref.value;
      ref.checked = ref.value === value ? true : false;
    });
  };

  const currentValue = inputRefs.current.find(ref => ref.checked)?.value;
  return (
    <RadioContainer>
      <RadioGroup value={currentChecked as typeof currentValue} onChange={handleChange} {...props}>
        {options.map(({ id, label, value }, index) => (
          <FormControlLabel
            key={id}
            value={String(value)}
            label={label}
            inputRef={ref => (inputRefs.current[index] = ref as HTMLInputElement)}
            control={<RadioField />}
          />
        ))}
      </RadioGroup>
    </RadioContainer>
  );
};

export default Radio;
function useField(name: string): { fieldName: any; registerField: any } {
  throw new Error('Function not implemented.');
}
