import { Link } from 'react-router-dom';
// importa Link para navegação entre páginas

import '../style/CoinCard.css';
// importa arquivo css para estilização do componente

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CryptoCard = ({ coin }) => {
  return (
    <Card style={{ width: '18rem' }} className="crypto-card">
      <Card.Img 
        variant="top" 
        src={coin.image} 
        alt={coin.name} 
        style={{ height: '180px', objectFit: 'contain', padding: '10px' }} 
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-center">{coin.name}</Card.Title>
        
        <Card.Text className="text-center fw-bold">
          Preço: ${coin.current_price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </Card.Text>

        <Card.Text 
          className={`text-center fw-bold ${
            coin.price_change_percentage_24h >= 0 ? 'text-success' : 'text-danger'
          }`}
        >
          24h: {coin.price_change_percentage_24h >= 0 ? '+' : ''}
          {coin.price_change_percentage_24h.toFixed(2)}%
        </Card.Text>

        <Link to={`/coin/${coin.id}`} className="mt-auto">
          <Button variant="primary" className="w-100">
            Ver detalhes
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CryptoCard;