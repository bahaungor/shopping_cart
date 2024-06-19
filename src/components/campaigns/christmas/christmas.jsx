import { useNavigate } from 'react-router-dom';
import './christmas.css';
import flyer from './christmas_flyer_cropped.png';

export default function Christmas() {
  const navigate = useNavigate();
  const handleClick = () => navigate('/shop');
  
  return (
    <div className="flyer_container">
      <img src={flyer} alt="christmas deal" onClick={handleClick} />
    </div>

  );
}
