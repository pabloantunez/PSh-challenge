import React,  { useEffect, useState } from 'react';
import DataGridDemo from '../../../components/Grid';
import BasicButtons from '../../../components/Button';
import { getPlayerStats } from '../../../constants/urls';
import { formatDate } from '../../../utils/date';
import axios from 'axios';


const PlayerStats = () => {
    const [rows, setRows] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const fetchPlayers = async () => {
        try{
            const response = await axios.get(getPlayerStats);
            // verificar los 10 mas altos.
            const mappedRows = response.data.map(player_stat => ({
                id: player_stat.id,
                profileImage: player_stat.player.profile_image,
                nickname:player_stat.player.nickname,
                score: player_stat.score,
                dateStat: formatDate(player_stat.creation_date)
            }));

            setRows(mappedRows);
            } catch (error) {
            setError(error.message);
            } finally {
            setLoading(false);
            }
        };

    useEffect(() => {
        fetchPlayers();
        }, []);
    
    const columns = [
        { field: 'profileImage', headerName: 'Avatar', width: 90, flex: 1, renderCell: (params) => <img src={params.value} /> },
        { field: 'nickname', headerName: 'Nickname', width: 150, flex: 1 },
        { field: 'score', headerName: 'Score', width: 150, flex: 1 },
        { field: 'dateStat', headerName: 'Date', width: 150, flex: 1 },
    ];

  return (
    <div className='container mx-auto h-full items-center flex flex-col'>
      <h1 className='text-red-psh font-bold text-3xl mb-8 mt-2'>Player Statistics</h1>

      <DataGridDemo 
        rows={rows}
        columns={columns}
        maxElements={10}
      />

      <BasicButtons 
        className='!my-8'
        label='Export to CSV'
        variant='contained'
        size='large'
      />
    </div>
  );
};

export default PlayerStats;