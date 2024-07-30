import { ComponentProps, forwardRef } from 'react';
import { useFormContext, get } from 'react-hook-form';
import { TextArea } from '../atoms/TextArea/TextArea';

type Props = ComponentProps<typeof TextArea> & {
  name: string;
};

const InnerFormTextAreaField = (
  props: Props,
  ref: React.ForwardedRef<HTMLTextAreaElement>,
) => {
  const { register, formState } = useFormContext();
  const { touchedFields, errors } = formState;
  const methods = register(props.name);

  return (
    <TextArea
      {...props}
      isError={get(errors, props.name)}
      touched={get(touchedFields, props.name)}
      name={methods.name}
      ref={(el: any) => {
        methods.ref(el);
        if (typeof ref === 'function') {
          ref(el);
          return;
        }
        if (ref) {
          ref.current = el;
        }
      }}
      onChange={(e:any) => {
        methods.onChange(e);
        props.onChange && props.onChange(e);
      }}
      onBlur={(e: any) => {
        methods.onBlur(e);
        props.onBlur && props.onBlur(e);
      }}
    />
  );
};

export const FormTextArea = forwardRef(InnerFormTextAreaField);