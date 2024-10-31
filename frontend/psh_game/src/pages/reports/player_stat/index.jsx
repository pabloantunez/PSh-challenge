import React,  { useEffect, useState } from 'react';
import DataGridDemo from '../../../components/Grid';
import BasicButtons from '../../../components/Button';
import { getPlayerStats } from '../../../constants/urls';
import { formatDate } from '../../../utils/date';
import axios from 'axios';
import { CSVLink } from "react-csv";


const PlayerStats = () => {
    const [rows, setRows] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const fetchPlayers = async () => {
        try{
            const response = await axios.get(getPlayerStats);

            const mappedRows = response.data.map(player_stat => ({
                id: player_stat.id,
                profileImage: player_stat.player.profile_image,
                nickname:player_stat.player.nickname,
                score: player_stat.score,
                dateStat: formatDate(player_stat.creation_date)
            })).sort((a,b) => b.score - a.score);

            setRows(mappedRows);
            } catch (error) {
            setError(error.message);
            } finally {
            setLoading(false);
            }
        };

    useEffect(() => {
        fetchPlayers();
        const interval = setInterval(fetchPlayers, 10000);

        return () => clearInterval(interval);
      }, []);
    
    const columns = [
        { field: 'profileImage', headerName: 'Avatar', width: 90, flex: 1, renderCell: (params) => <img src={params.value} /> },
        { field: 'nickname', headerName: 'Nickname', width: 150, flex: 1 },
        { field: 'score', headerName: 'Score', width: 150, flex: 1 },
        { field: 'dateStat', headerName: 'Date', width: 150, flex: 1 },
    ];

    const headers = [
      { label: 'Nickname', key: 'nickname' },
      { label: 'Score', key: 'score' },
      { label: 'Date', key: 'dateStat' }
    ];


  return (
    <div className='container mx-auto h-full items-center flex flex-col'>
      <h1 className='text-red-psh font-bold text-3xl mb-8 mt-2'>Players Statistics Report</h1>

      <DataGridDemo 
        rows={rows}
        columns={columns}
        maxElements={10}
      />
      <div className="flex flex-row justify-center gap-4 mt-8">
        <CSVLink 
            data={rows} 
            headers={headers} 
            filename="player_stats.csv" 
            separator=";"
            style={{ textDecoration: 'none' }}
        >
            <BasicButtons 
                className='!my-8'
                label='Export to CSV'
                variant='contained'
                size='large'
            />
        </CSVLink>
      </div>
    </div>
  );
};

export default PlayerStats;