import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function FullPie(): React.ReactElement {
  const [pie, setPie] = React.useState<{
    imageUrl: string;
    name: string;
    description: string;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPie() {
      try {
        const { data } = await axios.get(
          'https://67b7a06d2bddacfb270f8961.mockapi.io/items/' + id
        );
        setPie(data);
      } catch (error) {
        console.log('Помилка');
        navigate('/');
      }
    }
    fetchPie();
  }, [id, navigate]);
  //  }, []); било так
  if (!pie) {
    return <>Завантажую....</>;
  }
  return (
    <div className="container">
      <div className="pie-wrapper">
        <div className="pie-wrapper__imgWrapper">
          <img
            className="pie-wrapper__image"
            src={pie.imageUrl}
            alt={pie.name}
          />
        </div>
        <div className="pie-wrapper-text">
          <h4 className="pie-wrapper-text__title">{pie.name}</h4>
          <p>{pie.description}</p>
          <div>
            <Link to="/" className="button button--black">
              <span>Повернутися назад</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullPie;
