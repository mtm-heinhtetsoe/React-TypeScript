import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// import { RegisterRepository } from '@/repositories';
import { SignUpForm } from './SignUpForm';
// import { MainTemplate } from '@/components/templates';

export const SignUpPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState(false);
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

    const handleSignUpSubmit: SubmitHandler<any> = (data) => {
        // RegisterRepository.register(data)
        //     .then((response) => {
        //         setResponse(response.data);
        //         let msg = 'Register Successful.';
        //         setSuccess(msg);
        //         setTimeout(() => {
        //         navigate(PAGE_URL.LOGIN);
        //         }, 3000);
        //     })
        //     .catch((response) => {
        //         setSuccess(response);
        // });
    };
    return (
    <>
      {/* <MainTemplate> */}
        {loading && (
          <div css={container}>
            <SignUpForm onSubmit={handleSignUpSubmit} success={success} />
          </div>
        )}
      {/* </MainTemplate> */}
    </>
  );
};

const container = css({
  padding: '0 0 70px',
});