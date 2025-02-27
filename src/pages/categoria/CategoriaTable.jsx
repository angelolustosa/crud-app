import React, { useEffect, useState } from 'react';
import TableComponent from '../../component/table/TableTemplate';
import { NavLink } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

const CategoriaTable = () => {
    const [Data, setData] = useState([])

    useEffect(() => {
      
    }, [])
    
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',  // Centraliza a tabela e o conteúdo verticalmente
                justifyContent: 'center',
                minHeight: '100vh',
                padding: 2,
                textAlign: 'center'
            }}
        >
            {/* Box para alinhar h1 e link lado a lado */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
                <Typography variant="h4">Categoria</Typography>
                <NavLink to="/categoria/novo">
                    <Button variant="contained" color="primary">
                        + Novo
                    </Button>
                </NavLink>
            </Box>
            
            <TableComponent />
        </Box>
    );
};

export default CategoriaTable;
