## 🚀 Multiverso GTA: Gerador de Base de Conhecimento Ficcional

Este projeto **Node.js** implementa um **gerador autônomo** de dados estruturados focado em expandir uma base de conhecimento sobre a franquia **Grand Theft Auto (GTA)**. Ele utiliza a **Inteligência Artificial Generativa** para criar entradas verossímeis de jogos, DLCs e spin-offs que não existem, consolidando a informação em um formato consumível por aplicações front-end.

---

### 🛠️ Arquitetura e Ferramentas

O projeto é construído sobre uma arquitetura robusta de geração e persistência de dados, utilizando as seguintes tecnologias:

* **Node.js (Backend):** Plataforma de execução primária, responsável pelo gerenciamento de dependências e operações de I/O.
* **Gemini API (Google AI):** Serviço de **Inteligência Artificial Generativa** utilizado para criar o conteúdo textual (nomes, descrições) dos jogos fictícios.
* **JSON Schema:** Essencial para garantir a **integridade da base de dados**. A requisição à API impõe um esquema de saída rígido, garantindo que o modelo retorne sempre um array de objetos com as propriedades `nome`, `descricao`, `ano`, `link` e `tags` no formato JSON correto.
* **Persistência (FS/Promises):** Utiliza o módulo nativo `fs/promises` para operações **assíncronas e seguras** de leitura e escrita do arquivo `baseDeConhecimento.json`.
* **Estratégia de Mesclagem:** O *script* foi desenhado para **carregar o JSON existente**, gerar as novas entradas e, em seguida, **mesclar** as duas bases, evitando a perda de dados.
* **Robustez da API:** Implementa uma lógica de *retry* com **backoff exponencial** (`MAX_RETRIES` e `RETRY_DELAY_MS`) para aumentar a tolerância a falhas temporárias de rede ou limites de taxa da API.

---

### 🎯 Objetivo do Projeto

O principal objetivo do **Multiverso GTA** é demonstrar a capacidade da **IA como um motor de criação de dados** (`data seeding`) para aplicações de nicho. O resultado é um arquivo `baseDeConhecimento.json` que pode ser usado como **mock data** ou como a fonte de dados principal para um site interativo sobre o multiverso GTA.
