# Estudo ReactJS - Aprimoramento de Conceitos

Este projeto foi desenvolvido com o objetivo de estudar, praticar e aprimorar os conhecimentos fundamentais do ReactJS. O foco principal é o entendimento do ciclo de vida dos componentes, gerenciamento de estado e interação com o usuário.

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Create React App](https://github.com/facebook/create-react-app)
- JavaScript (ES6+)
- SCSS (Sass)

## 📋 Funcionalidades e Conceitos Praticados

O projeto (especificamente a página de Variáveis de Estado) serve como um laboratório para os seguintes conceitos:

### 1. Gerenciamento de Estado (`useState`)
- Utilização do Hook `useState` para armazenar e atualizar dados dinâmicos.
- Manipulação de diferentes tipos de dados no estado: `strings`, `numbers`, `booleans` e `arrays`.

### 2. Manipulação de Eventos
- Captura de eventos de clique (`onClick`) para disparar ações.
- Captura de mudanças em inputs (`onChange`) para criar componentes controlados (Controlled Components).
- Captura de eventos de teclado (`onKeyUp`) para funcionalidades como "pressionar Enter para adicionar".

### 3. Renderização de Listas e Arrays
- Uso da função `.map()` para renderizar listas dinâmicas de componentes.
- Manipulação de arrays no estado para adicionar, remover e editar itens (CRUD em memória).
- Uso correto da prop `key` para otimização da renderização.

### 4. Renderização Condicional
- Exibição de textos ou elementos baseados em valores booleanos do estado (ex: Operador ternário).

### 5. Lógica de Negócio e Cálculos
- Implementação de funções para realizar cálculos em tempo real baseados no input do usuário (ex: Calculadora, Venda de Ingressos).
- Formatação de números e validações simples.

## 🛠️ Como Executar o Projeto

No diretório do projeto, você pode rodar os seguintes comandos:

### `npm start`

Roda o aplicativo no modo de desenvolvimento.\
Abra http://localhost:3000 para visualizar no navegador.

A página irá recarregar automaticamente se você fizer edições no código.

### `npm run build`

Constrói o aplicativo para produção na pasta `build`.\
Isso otimiza o React para a melhor performance possível.

## 📚 Estrutura de Exemplos

O projeto conta com seções práticas como:
- **Planos Atuais**: Adição de objetos complexos em listas.
- **Metas**: Lista de tarefas com funcionalidades de adicionar, editar e remover.
- **Calculadora**: Operações matemáticas simples com estado.
- **Venda de Ingressos**: Cálculo de totais com condicionais (meia-entrada, cupom).
- **Contador**: Exemplo clássico de incremento e decremento de estado.

---

Desenvolvido para fins de estudo.
