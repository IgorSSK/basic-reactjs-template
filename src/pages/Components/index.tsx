import React from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import IconButton from '../../components/IconButton';
import Table from '../../components/Table';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';

// import { Container } from './styles';

const Components: React.FC = () => {
  const { data, get } = useFetch(api, '/todos/1');
  console.log(data);
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
        <Button title="Test API Call" onClick={() => get('')} />
        <code></code>
      </Card>
    </div>
  );
};

export default Components;
