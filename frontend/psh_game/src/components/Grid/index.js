import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function DataGridDemo({ rows, columns, maxElements }) {

  const pageSizeOptions = [maxElements || 10]; 

  return (
    <Box className="custom-container">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: pageSizeOptions[0],
            },
          },
        }}
        pageSizeOptions={pageSizeOptions}
        checkboxSelection={false}
        disableRowSelectionOnClick
        style={{ width: '100%' }}
      />
    </Box>
  );
}