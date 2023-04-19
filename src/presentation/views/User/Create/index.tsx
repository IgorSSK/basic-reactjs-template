import Button from '@presentation/components/Button';
import Checkbox from '@presentation/components/Checkbox';
import Form from '@presentation/components/Form';
import Input from '@presentation/components/Input';
import Select from '@presentation/components/Select';
import Switch from '@presentation/components/Switch';
import Table from '@presentation/components/Table';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type CreateUserViewProps = {};

const CreateUserView: React.FC<CreateUserViewProps> = () => {
  const [formValues, setFormValues] = useState({});
  const { control, handleSubmit } = useForm();
  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit(fields => setFormValues(fields))}>
        <Form.Box>
          <Input name="name" label="Name" control={control} />
          <Input
            name="cpf"
            label="CPF"
            mask={{
              options: { mask: [{ mask: '000.000.000-00' }, { mask: '00.000.000/0000-00' }] }
            }}
            control={control}
          />
        </Form.Box>
        <Form.Box>
          <Input name="email" label="E-mail" control={control} />
          <Input name="username" label="Username" control={control} />
          <Select
            name="type"
            label="Tipo Documento"
            control={control}
            options={[
              { id: 1, label: 'CPF', value: 'cpf' },
              { id: 2, label: 'CNPJ', value: 'cnpj' }
            ]}
          />
        </Form.Box>
        <Form.Box>
          <Input
            name="salary"
            label="Salário"
            mask={{
              type: 'currency'
            }}
            control={control}
          />
        </Form.Box>
        <Switch name="accept-terms" label="Aceitar Termos" control={control} />
        <Checkbox.Group title="Tipo Regime">
          <Checkbox name="work-type" label="Presencial" control={control} />
          <Checkbox name="work-type" label="Não Presencial" control={control} />
        </Checkbox.Group>
        <Button type="submit" title="Submit" />
      </Form>
      <pre>
        <code>{JSON.stringify(formValues, null, 2)}</code>
      </pre>
      <Table
        columns={[
          { field: 'name', headerName: 'Nome' },
          { field: 'document', headerName: 'Documento' }
        ]}
        rows={[]}
      />
    </React.Fragment>
  );
};

export default CreateUserView;
