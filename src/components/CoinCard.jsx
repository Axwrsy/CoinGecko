import { Link } from 'react-router-dom';
// importa Link para navegação entre páginas

import '../style/CoinCard.css';
// importa arquivo css para estilização do componente

const CryptoCard = ({ coin }) => {
  // componente funcional que recebe a prop 'coin' com os dados da moeda

  return (
    <div className="crypto-card">
      {/* container do card da moeda com classe para estilo */}

      <img src={coin.image} alt={coin.name} />
      {/* imagem da moeda, usa o nome como texto alternativo */}

      <h3>{coin.name}</h3>
      {/* nome da moeda em título */}

      <p>Preço: ${coin.current_price.toLocaleString()}</p>
      {/* exibe o preço atual formatado com separador de milhares */}

      <p className={coin.price_change_percentage_24h >= 0 ? 'up' : 'down'}>
        {/* parágrafo que muda a classe para 'up' se o preço subiu, ou 'down' se caiu */}

        24h: {coin.price_change_percentage_24h.toFixed(2)}%
        {/* mostra a variação percentual das últimas 24 horas com 2 casas decimais */}
      </p>

      <Link to={`/coin/${coin.id}`} className="see-more">
        {/* link para página de detalhes da moeda, usando o id dela na URL */}

        Ver detalhes
      </Link>
    </div>
  );
};

export default CryptoCard;
// exporta o componente para uso em outros arquivos
