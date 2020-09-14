import React from 'react';
import MaterialTable, {
  Action,
  Column,
  DetailPanel,
  Options
} from 'material-table';

interface TableProps {
  title: string;
  columns: Column<object>[];
  data: object[];
  actions: (Action<object> | ((rowData: object) => Action<object>))[];
  options: Options<object>;
  panel:
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
  const opt = options
    ? options
    : {
        toolbar: false,
        paging: false,
        sorting: false,
        draggable: false,
        headerStyle: { fontWeight: 'bold' },
        rowStyle: { fontSize: '10px' }
      };
  return (
    <MaterialTable
      title={title || ''}
      columns={columns}
      data={data}
      actions={actions}
      options={{
        toolbar: false,
        paging: false,
        sorting: false,
        draggable: false,
        headerStyle: { fontWeight: 'bold' },
        rowStyle: { fontSize: '10px' },
        ...options
      }}
      detailPanel={panel}
      localization={localization}
    />
  );
};

export default Table;
