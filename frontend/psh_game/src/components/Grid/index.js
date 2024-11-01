import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function DataGridDemo({ rows, columns, maxElements }) {

  const pageSizeOptions = [maxElements || 10]; 

  return (
    <Box className="custom-container" sx={{ height: 650, width: '100%' }}>
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
        sx={{
          '& .MuiDataGrid-container--top [role=row], & .MuiDataGrid-container--bottom [role=row]': {
            backgroundColor: 'transparent',
          },
          '& .MuiDataGrid-cell': {
            color: 'white',
          },
          '&.Mui-disabled': {
            color: 'white',
          },
          '& .MuiDataGrid-columnHeader': {
            color: 'white',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          },

          '& .MuiDataGrid-root': {
            backgroundColor: 'transparent',
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: 'purple-psh',
          },
          '& .MuiButtonBase-root': {
            color: 'white',
          },
          '& .MuiDataGrid-paginationButton': {
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          },
          '& .MuiDataGrid-footer': {
            color: 'white', 
          },
          '& .MuiDataGrid-pagination': {
            color: 'white', 
          },
          '& .MuiTablePagination-displayedRows': {
            color: 'white', 
          },
        }}
      />
    </Box>
  );
}