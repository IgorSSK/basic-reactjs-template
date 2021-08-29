import React, { FormEvent, useRef } from 'react';
import { Form as Unform } from '@unform/web';

import { FormContainer } from './styles';
import { FormHandles, FormProps } from '@unform/core';

const Form: React.FC<FormProps> = ({ children, onSubmit, ref, ...props }) => {
  const formRef = useRef<FormHandles>(null);

  return (
    <Unform ref={formRef} onSubmit={onSubmit} {...props}>
      {children}
    </Unform>
  );
};

exports = { Form };
