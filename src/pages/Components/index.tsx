import React from 'react';
import Card from '../../components/Card';
import IconButton from '../../components/IconButton';
import Table from '../../components/Table';

// import { Container } from './styles';

const Components: React.FC = () => {
  return <div>
    <Card>
      <Table
        columns={[{ field: 'name', title: 'Name' }, { field: 'language', title: 'Language' }]}
        data={[{ name: 'Goku', language: 'Typescript' }]}
      />
    </Card>
    <Card>
      <IconButton icon="folder" />
    </Card>
  </div>;
}

export default Components;