import { FormProvider, useForm } from "react-hook-form"
import { FormContainer } from "../../forms/FormContainer";
import { FormTitle } from "../../forms/FormTitle";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { color } from "../../../styles/theme";
import { FormLabel } from "../../forms/FormLabel";
import { FormTextField } from "../../forms/FormTextField";
import { useRef } from "react";
import { FormErrorMessage } from "../../forms/FormErrorMessage";
import { FormTextArea } from "../../forms/FormTextArea";
import { Button } from "../../atoms/Button/Button";
import { Post } from "../../../repositories/PostRepository";

type Props = {
    onSubmit: (data: Post) => void;
    success: any;
};

export const PostCreateForm = (props: Props) => {
    const methods = useForm({
        // resolver: yupResolver(validationSchema),
        mode: 'onChange',
    });

    const inputRef = useRef<HTMLInputElement>(null);

    const { handleSubmit } = methods;

    return (
        <>
            <FormProvider {...methods}>
                <FormContainer>
                    <div css={formTitleContainer}>
                        <FormTitle>Post Create</FormTitle>
                    </div>
                    <form onSubmit={handleSubmit(props.onSubmit)}>
                        {props.success && <p css={errorMessage}>{props.success}</p>}
                        <div css={inputContainer}>
                            <FormLabel>Title</FormLabel>
                            <FormTextField 
                                name="title"
                                css={input}
                                type="text"
                                ref={inputRef}
                                autoFocus
                            />
                            <FormErrorMessage name="title" />
                        </div>
                        <div css={inputContainer}>
                            <FormLabel>Description</FormLabel>
                            <FormTextArea name="description" css={input} />
                            <FormErrorMessage name="description" />
                        </div>
                        <Button variant="contained" css={createButton} type="submit">Create</Button>
                    </form>
                </FormContainer>
            </FormProvider>
        </>
    )
}

const createButton = css({
    width: 350,
    borderRadius: 4,
    fontSize: 16,
    padding: '12px 40px',
    marginTop: 5,
});
  
const inputContainer = css({
    marginBottom: 25,
    position: 'relative',
});
  
const input = css({
    maxWidth: 350,
    width: '100%',
    height: 44,
    padding: '0 10px',
    marginTop: 5,
    borderRadius: 4,
    position: 'relative',
    border: '1px solid' + color.silver,
    boxShadow:
      'inset 0 1px 2px rgba(203, 203, 210, 0.4), inset 0 0 10px 1000px #FFFEDB',
});
  
  // const iconStyle = css({
  //   position: 'absolute',
  //   top: 39,
  //   left: 8,
  //   color: color.darkTangerine,
  // });
  
const formTitleContainer = css({
    marginBottom: 45,
});
  
const signUpText = css({
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
});
  
const errorMessage = css({
    backgroundColor: color.venetianRed,
    borderColor: color.candyPink,
    color: color.cherryRed,
    textAlign: 'center',
    border: '1px solid',
    padding: 6,
    marginBottom: 20,
    borderRadius: 4,
    fontSize: 14,
    lineHeight: 2,
});
  
const text = css({
    textAlign: 'center',
    paddingTop: 10,
    lineHeight: 2,
});