const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;
app.use(cors());
app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));

app.get('/api/teams',(req, res)=>{
    const teams = [
        {
            id:1,
            name: 'Inter',
            rating: 10,
            league: 'Serie A',

        },
        {
            id:2,
            name: 'Milan',
            rating: 8,
            league: 'Serie A',
            
        },
        {
            id:3,
            name: 'Juventus',
            rating: 10,
            league: 'Serie A',
            
        }
    ];

    res.json(teams);
})