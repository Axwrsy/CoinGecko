# Projeto CoinGecko

Este projeto é um dashboard de criptomoedas construído com React, que consome a API pública da CoinGecko. Ele foi desenvolvido com o propósito de aprimorar habilidades em React, gerenciamento de estado, rotas, e consumo de APIs externas.

##  Funcionalidades

O projeto permite ao usuário:

- **Visualizar a Lista:** Ver uma lista das principais criptomoedas do mercado, exibindo o nome, preço atual, variação nas últimas 24 horas e um ícone para cada moeda.
- **Pesquisar Moedas:** Buscar por moedas específicas usando o nome ou o símbolo na barra de pesquisa.
- **Ver Detalhes:** Clicar em uma moeda para visualizar uma página de detalhes com um gráfico de variação de preço dos últimos 7 dias.
- **[Funcionalidade em desenvolvimento]** Marcar moedas como favoritas para acesso rápido.

##  Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para construção da interface do usuário.
- **`Vite`:** Ferramenta de build para um ambiente de desenvolvimento rápido.
- **`axios`:** Cliente HTTP para fazer requisições à API da CoinGecko.
- **`react-router-dom`:** Biblioteca para gerenciar as rotas de navegação da aplicação.
- **`recharts`:** Biblioteca de gráficos baseada em React para visualização de dados.

##  Instalação e Execução

Para rodar este projeto em sua máquina local, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-projeto.git](https://github.com/seu-usuario/nome-do-projeto.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd nome-do-projeto
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

O aplicativo estará disponível em `http://localhost:5173/` (ou em outra porta, conforme a configuração do Vite).


##  API Utilizada

O projeto utiliza a API pública e gratuita da **CoinGecko**.

- **Endpoint principal:** `https://api.coingecko.com/api/v3/coins/markets`
- **Parâmetros utilizados:**
  - `vs_currency=brl`: Para obter os preços em Real Brasileiro.
  - `order=market_cap_desc`: Ordenar por capitalização de mercado em ordem decrescente.
  - `per_page=10`: Limitar a quantidade de moedas por página.
 
    
    ![Tela inicial do projeto](assets/tela-inicial.png)

##  Próximos Passos (Funcionalidades a serem implementadas)

- [ ] Implementar a funcionalidade de "Favoritar" moedas.
- [ ] Criar uma página dedicada para exibir a lista de moedas favoritas.
- [ ] Aprimorar a estilização e a responsividade da aplicação.
- [ ] Adicionar mais informações na página de detalhes da moeda (volume, capitalização de mercado, etc.).
