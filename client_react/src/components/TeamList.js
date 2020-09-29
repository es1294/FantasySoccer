import React, { useEffect, useState } from 'react';
import css from 'styled-jsx/css'

const TeamList = ()=>{
    const [teams, setTeams] = useState([]);

    useEffect(()=>{
        console.log('Render');
        fetch('http://localhost:5000/api/teams ').then(res=>res.json()).then(teams=>setTeams(teams));
    },[]);


    const {className:containerClass, styles:containerStyle} = css.resolve`
        * {
            background-color: #333;
            color: #fff;
        }
    `;

    return(
        <div>
            {teams.map(({name, rating, league})=>{
                return(
                    <div className={containerClass} key={name}>
                        <h2>{`Team:${name}`}</h2>
                        <p>{`Rating:${rating}`}</p>
                        <p>{`League:${league}`}</p>
                    </div>
                )
            })}
            {containerStyle}
        </div>
    )
};

export default TeamList;