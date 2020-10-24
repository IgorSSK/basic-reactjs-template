import React, { useRef, useState } from 'react';
import Card from '../../components/Card';
import IconButton from '../../components/IconButton';
import Input from '../../components/Input';
import Table from '../../components/Table';
// import { useFetch } from '../../hooks/useFetch';
// import api from '../../services/api';
import * as Yup from 'yup';
import { MdEmail } from 'react-icons/md'
import Radio from '../../components/Radio';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import Button from '../../components/Button';
// import { Container } from './styles';

interface DataProps {
  name: string;
  email: string;
  signType: 0 | 1;
}

const Components: React.FC = () => {
  const [formResult, setFormResult] = useState<DataProps>();

  const formRef = useRef<FormHandles>(null);

  //const { data } = useFetch(api, '/todos/1');

  const handleSubmit: SubmitHandler<DataProps> = async (data, helpers, event) => {
    const schema = Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email().required()
    })

    try {
      await schema.validate(data, {
        abortEarly: false
      });

      setFormResult(data);
      helpers.reset();
    } catch (error) {
      const formErrors: any = {};

      if (error instanceof Yup.ValidationError)
        error.inner.forEach(err => {
          formErrors[err.path] = err.message;
        })
      
      formRef.current?.setErrors(formErrors)
    }
  }

  return (
    <div>
      <Card>
        <Table
          columns={[
            { field: 'name', title: 'Name' },
            { field: 'language', title: 'Language' }
          ]}
          data={[{ name: 'Goku', language: 'Typescript' }]}
        />
      </Card>
      <Card>
        <IconButton icon="folder" />
      </Card>
      <Card>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={{name:"Igor Souza", email:""}}>
          <Input placeholder="Name" label="Name" name="name" startAdornment="+55" />
          <Input placeholder="E-mail" label="E-mail" name="email" mask="******@hotm\ail.com" startAdornment={<MdEmail />} />
          <Radio options={[{id:'t1', label: 'E-mail', value: 0}, {id:'t2', label: 'Phone', value: 1}]} name="signType" />
          <Button title="Submit" type="submit" />
        </Form>
        <span>{JSON.stringify(formResult)}</span>
      </Card>
    </div>
  );
};

export default Components;