import React,  { useEffect, useState } from 'react';
import DataGridDemo from '../../../components/Grid';
import BasicButtons from '../../../components/Button';
import { getPlayerStats } from '../../../constants/urls';
import { formatDate } from '../../../utils/date';
import axios from 'axios';
import { CSVLink } from "react-csv";
import { columns, headers } from '../../../constants/grid';

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

  return (
    <div className='container mx-auto h-full items-center flex flex-col'>
      <h1 className='text-white font-bold text-3xl mb-8 mt-2'>Players Statistics Report</h1>
      {loading && <div class="flex items-center justify-center h-screen">
      <div class="w-16 h-16 border-8 border-t-8 border-gray-200 rounded-full animate-spin border-t-gray-900"></div>
      </div>}

      <DataGridDemo 
        rows={rows}
        columns={columns}
        maxElements={10}
      />
      {error && <span>{error}</span>}
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