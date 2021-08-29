import React from 'react';
import MaterialTable, { Action, Column, DetailPanel, Options } from 'material-table';
import { Container } from './styles';

interface TableProps {
  title?: string;
  columns: Column<Record<string, unknown>>[];
  data: Record<string, unknown>[];
  actions?: (
    | Action<Record<string, unknown>>
    | ((rowData: Record<string, unknown>) => Action<Record<string, unknown>>)
  )[];
  options?: Options<Record<string, unknown>>;
  panel?:
    | ((rowData: Record<string, unknown>) => React.ReactNode)
    | (
        | DetailPanel<Record<string, unknown>>
        | ((rowData: Record<string, unknown>) => DetailPanel<Record<string, unknown>>)
      )[];
}

const Table: React.FC<TableProps> = ({ title, columns, data, options, panel, actions }) => {
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
