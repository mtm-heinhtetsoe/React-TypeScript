import { ComponentProps, forwardRef, ForwardedRef } from 'react';
import { useFormContext, get } from 'react-hook-form';
import { TextField } from '../atoms/TextField/TextField';


type Props = ComponentProps<typeof TextField> & {
  name: string;
};

const InnerFormTextField = (
  props: Props,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const { register, formState } = useFormContext();
  const { touchedFields, errors } = formState;
  const methods = register(props.name);

  return (
    <TextField
      {...props}
      isError={get(errors, props.name)}
      touched={get(touchedFields, props.name)}
      name={methods.name}
      ref={(el) => {
        methods.ref(el);
        if (typeof ref === 'function') {
          ref(el);
          return;
        }
        if (ref) {
          ref.current = el;
        }
      }}
      onChange={(e) => {
        methods.onChange(e);
        props.onChange && props.onChange(e);
      }}
      onBlur={(e) => {
        methods.onBlur(e);
        props.onBlur && props.onBlur(e);
      }}
    />
  );
};

export const FormTextField = forwardRef(InnerFormTextField);