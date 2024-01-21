import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const Character = () => {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=ee17bb5eb193560352b47115265aee4f&hash=617bdee7116a797260ea70909aeeb088`);
      setItem(res.data.data.results[0]);
    };

    fetchData();
  }, [id]); 

  return (
    <>
    {
      (!item)? "":(
        <div className="box-content">
          <div className="right-box">
          <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
          </div>
          <div className="left-box">
            <h1>{item.name}</h1>
            <h4>{item.description}</h4>
          </div>
        </div>
      )
    }
    </>

  );
};
