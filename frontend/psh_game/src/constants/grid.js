export const columns = [
    { field: 'profileImage', headerName: 'Avatar', width: 90, flex: 1, align: 'center',headerAlign:'center', renderCell: (params) => <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
    <img src={params.value} />
    </div> },
    { field: 'nickname', headerName: 'Nickname', width: 150, flex: 1, align: 'center',headerAlign:'center' },
    { field: 'score', headerName: 'Score', width: 150, flex: 1, align: 'center',headerAlign:'center' },
    { field: 'dateStat', headerName: 'Date', width: 150, flex: 1, align: 'center', headerAlign:'center' },
];

export const headers = [
  { label: 'Nickname', key: 'nickname', align: 'center' },
  { label: 'Score', key: 'score', align: 'center' },
  { label: 'Date', key: 'dateStat', align: 'center' }
];