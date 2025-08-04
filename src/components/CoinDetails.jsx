import React from 'react';
// importa react

import { useParams } from 'react-router-dom';
// importa hook useParams para acessar parâmetros da rota

import CoinChart from './CoinChart';
// importa o componente CoinChart para mostrar o gráfico da moeda

function CoinDetails() {
  // componente funcional que mostra os detalhes da moeda

  const { id } = useParams()
  // obtém o parâmetro 'id' da url via useParams (ex: /coin/bitcoin => id = 'bitcoin')

  return (
    <div style={{ padding: '20px' }}>
      {/* container com padding para espaçamento */}

      <h2>Detalhes da Moeda: {id}</h2>
      {/* título que exibe o id da moeda */}

      <CoinChart coinId={id} />
      {/* exibe o gráfico da moeda, passando o id como prop coinId */}
    </div>
  )
}

export default CoinDetails
// exporta o componente para uso em outras partes do app
