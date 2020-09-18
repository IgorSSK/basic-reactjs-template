import React from 'react';
import MaterialTable, {
  Action,
  Column,
  DetailPanel,
  Options
} from 'material-table';
import { Container } from './styles';

interface TableProps {
  title?: string;
  columns: Column<object>[];
  data: object[];
  actions?: (Action<object> | ((rowData: object) => Action<object>))[];
  options?: Options<object>;
  panel?:
    | ((rowData: object) => React.ReactNode)
    | (DetailPanel<object> | ((rowData: object) => DetailPanel<object>))[];
}

const Table: React.FC<TableProps> = ({
  title,
  columns,
  data,
  options,
  panel,
  actions
}) => {
  const localization = {
    body: {
      emptyDataSourceMessage: 'Não há dados para serem mostrados!'
    },
    header: {
      actions: ''
    },
    toolbar: {
      searchTooltip: 'Filtrar',
      searchPlaceholder: 'Digite algo para filtrar...'
    }
  };
  options = {
    toolbar: false,
    paging: false,
    sorting: false,
    draggable: false,
    headerStyle: { fontWeight: 'bold' },
    ...options
  };
  return (
    <Container>
      <MaterialTable
        title={title || ''}
        columns={columns}
        data={data}
        actions={actions}
        options={options}
        detailPanel={panel}
        localization={localization}
      />
    </Container>
  );
};

export default Table;
