import { useEffect } from 'react';
import { Control, useController } from 'react-hook-form';
import { useIMask } from 'react-imask';

export type InputControlProps = {
  control?: Control;
};
export type InputMaskProps = {
  options?: IMask.AnyMaskedOptions;
  type?: 'currency';
};

function apply<T = any>(
  Component: React.FC<T>,
  control?: Control,
  mask?: InputMaskProps
): React.FC<T & { name: string }> {
  return props => {
    if (!control) return <Component {...props} />;

    const { field, fieldState } = useController({ name: props.name, control });
    const { ref } = useIMask(
      { ...mask?.options },
      {
        onAccept: val => field.onChange(val)
      }
    );

    useEffect(() => {
      if (mask?.type === 'currency') handleFieldChange(field.value);
    }, [field.value]);

    const handleFieldChange = (inputValue: string) => {
      if (!inputValue) return;

      const value = inputValue.replaceAll(/\D/gi, '');

      if (parseInt(value) <= 0) {
        field.onChange(0);
        return;
      }
      const currency = (parseInt(value) / 100).toFixed(2);

      const formated = Intl.NumberFormat('pt-BR', {
        style: 'decimal',
        currency: 'BRL',
        maximumFractionDigits: 2
      }).format(parseFloat(currency));

      field.onChange(formated);
    };

    return (
      <Component
        {...props}
        {...field}
        inputRef={ref}
        error={!!fieldState.error}
        helperText={fieldState.error?.message}
      />
    );
  };
}

export default apply;
