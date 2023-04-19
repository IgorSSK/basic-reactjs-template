import { DataGrid, DataGridProps, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import React from 'react';

import noRowsImg from '../../assets/img/empty_table.png';
import { Container, Overlay } from './styles';

type TableProps = {
  rows: GridRowsProp;
  columns: GridColDef[];
} & DataGridProps;

const Table: React.FC<TableProps> = ({ rows, columns, components, ...props }) => {
  return (
    <Container>
      <DataGrid
        {...props}
        components={{
          ...components,
          NoRowsOverlay: () => (
            <Overlay>
              <img src={noRowsImg} alt="" />
            </Overlay>
          )
        }}
        columns={columns}
        rows={rows}
        pageSizeOptions={[5, 10, 20, 50, 100]}
      />
    </Container>
  );
};

export default Table;
