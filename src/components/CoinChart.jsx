import React, { useEffect, useState } from 'react';
// importa react e hooks useEffect e useState

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
// importa componentes do recharts para construir o gráfico de linha

const CoinChart = ({ coinId }) => {
  // componente funcional que recebe a prop coinId para saber qual moeda buscar os dados

  const [data, setData] = useState([]);
  // estado local 'data' para armazenar os dados do gráfico, inicialmente vazio

  useEffect(() => {
    // hook que executa efeito colateral ao montar o componente ou quando coinId muda

    const fetchChartData = async () => {
      // função assíncrona para buscar os dados do gráfico na API do CoinGecko

      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=brl&days=7`
      );
      // faz requisição para a api buscando dados de preço da moeda nos últimos 7 dias em reais (brl)

      const result = await res.json();
      // transforma a resposta em json

      const formattedData = result.prices.map(([timestamp, price]) => ({
        // percorre o array de preços (cada item é um array com timestamp e preço)
        date: new Date(timestamp).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
        // formata a data para string dd/mm no formato brasileiro
        price: price.toFixed(2),
        // formata o preço para ter 2 casas decimais como string
      }));

      setData(formattedData);
      // atualiza o estado com os dados formatados para exibir no gráfico
    };

    fetchChartData();
    // chama a função para buscar os dados

  }, [coinId]);
  // o efeito roda sempre que coinId muda, para atualizar os dados do gráfico

  return (
    <div style={{ width: '100%', height: 300 }}>
      {/* div container com largura 100% e altura fixa 300px para o gráfico */}

      <ResponsiveContainer>
        {/* container responsivo que adapta o gráfico ao tamanho do container pai */}

        <LineChart data={data}>
          {/* gráfico de linha que recebe os dados para plotar */}

          <XAxis dataKey="date" />
          {/* eixo X usando a chave 'date' para mostrar as datas */}

          <YAxis domain={['auto', 'auto']} />
          {/* eixo Y com domínio automático conforme os dados */}

          <Tooltip />
          {/* tooltip que aparece ao passar o mouse mostrando valores */}

          <Line type="monotone" dataKey="price" stroke="#82ca9d" strokeWidth={2} />
          {/* linha do gráfico com suavização monotone, cor verde e largura 2 */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CoinChart;
// exporta o componente para uso em outros arquivos
