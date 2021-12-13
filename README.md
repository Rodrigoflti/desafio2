# desafio2

Desafio referente ao Agilizei Bootcamp

Com objetivo de pratica dos conceitos estudados durante o capitulo.

Utilizado o sistema de publicação de artigos https://demo.realworld.io/#/


![9n6IM0sjxG](https://user-images.githubusercontent.com/54040974/145737888-fe5e396b-57be-4233-a76a-1c359d8a97bf.gif)


Instalando as dependências e execução
A instalação a seguir será referente ao sistema operacional Ubuntu

Instalar a linguagem (Node.js) que contempla o gerenciador de pacotes (NPM): https://nodejs.org

Na raiz do projeto, execute para realizar a instalação do projeto e dependências:

npm install
Execute o teste automatizado em modo headless:
npm run cy:run
Execute o comando a seguir para mesclar as saídas das spec em um único arquivo:
npm run report:merge
Execute o comando a seguir para gerar o relátorio em html dos resultados mergeados:
npm run report:mocha
Após a geração do relatório, execute o comando a seguir para excluir do projeto a sujeira da execução do teste:
npm run report:clean
É possivel executar o teste em modo interativo:
npm run cy:open

