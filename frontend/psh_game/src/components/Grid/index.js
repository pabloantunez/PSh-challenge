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
            backgroundColor: 'transparent', // O el color que desees
          },
          '& .MuiDataGrid-cell': {
            color: 'white', // Color del texto de las celdas
          },
          '&.Mui-disabled': {
            color: 'white', // Cambia el color a blanco cuando está deshabilitado
          },
          '& .MuiDataGrid-columnHeader': {
            color: 'white', // Color del texto de los encabezados
            backgroundColor: 'transparent', // Fondo transparente para los encabezados
            '&:hover': {
              backgroundColor: 'transparent', // Fondo transparente al pasar el mouse
            },
          },

          '& .MuiDataGrid-root': {
            backgroundColor: 'transparent', // Fondo transparente para el DataGrid
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: 'purple-psh', // Fondo del pie de página del DataGrid
          },
          '& .MuiButtonBase-root': {
            color: 'white', // Color del texto de los botones de paginación
          },
          '& .MuiDataGrid-paginationButton': {
            color: 'white', // Color del texto de los botones de paginación
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)', // Fondo al pasar el mouse (opcional)
            },
          },
          '& .MuiDataGrid-footer': {
            color: 'white', // Color del texto de la paginación
          },
          '& .MuiDataGrid-pagination': {
            color: 'white', // Color del texto de la paginación "1–10 of 84"
          },
          '& .MuiTablePagination-displayedRows': {
            color: 'white', // Color del texto de la paginación "1–10 of 84"
          },
        }}
      />
    </Box>
  );
}