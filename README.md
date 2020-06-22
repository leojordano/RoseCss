# RoseCss | version 1.0.7
Biblioteca criada para ajudar a manipular o  **css** utilizando atributos do HTML.

### CND
Está dispónivel através do npm com **npm i rocecss**

**JavaCript** https://unpkg.com/rocecss@1.0.0/script.js

**CSS** https://unpkg.com/rocecss@1.0.0/style.css

## Background Color

```html
  <div bg='red'></div>
  <div bg='rgb(255,0,0)'></div>
  <div bg='#ff0000'></div>
 ```
  colocará uma color de fundo *vermelha* no objeto HTML, o atributo **bg** pode receber valores *rgba* também.
  
  Existem valores **default** também, passando 
  **bg-green,** 
  **bg-red,** 
  **bg-blue,**
  **bg-salmon,**
  **bg-brown**
  
 ## WIDTH E HEIGHT
 
 ```html
    <div w='10px' h='100%'></div>
    <div w='10%' h='100px'></div>
    <div w='500px' h='100px'></div>
    <div w='100%' h='10%'></div>
 ```
 adiciona a *altura(height)* e a *largura(width)* ao objeto. 
 
 ## RESET DO HTML
 
 ```html
  <body reset>
  ...
  </body>
  ```
  Esse atributo somente faz o **reset** dos estilos padrão do html, inclusive todas as tags *a* (links) são resetados, ele não recebe nenhum valor.
  
  ## FLEXBOX
  ```html
    <ul flex='column'>
      <li>item1</li>
      <li>item2</li>
      <li>item3</li>
    </ul>
  ```
  
  Adiciona o **display: flex** do *css*, o valor significa o **flex-direction**, por padrão ele é **row** porém você os valores padrão do css.
  
  ### JUSTIFY CONTENT E ALIGN ITEMS
  
  ```html
    <ul flex fj='center' fa='center'>
      <li>item1</li>
      <li>item2</li>
      <li>item3</li>
    </ul>
  ```
  **fj** é o equivalente à **justify-content** e **fa** ao **align-items** do *css*, voçê pode passar os valores padão do css nos atributos.
  
  ## CENTER
  
  ```html
    <ul center>
      <li>item1</li>
      <li>item2</li>
      <li>item3</li>
    </ul>
  ```
  É o equivalente ao **margin: 0px auto** no css.

  ## PADDING E MARGIN

   ```html
    <div p='10px' m='10px'></div>
  ```
  Essa propriedade adicionará um *padding(p)* e uma *margin(m)* com o valor de **10**, você pode substituir esse valor por qualquer outro.

  ## FONT SIZE

   ```html
    <p fontSize='10rem'></p>
  ```

  Você pode alterar o valor ao seu querer, **rem** está só como exemplo.
  _____________________________________________________________________________________________________________________
  
  Não conhece alguma tag css acima?
  Dá uma olhada nesse site https://www.w3schools.com/css/default.asp
  _____________________________________________________________________________________________________________________
  
  ## Como Contribuir

Contribuições fazem com que a comunidade open source seja um lugar incrível para aprender, inspirar e criar. Todas contribuições
são **extremamente apreciadas**

1. Realize um Fork do projeto
2. Crie um branch com a nova feature (`git checkout -b feat/feature-css`)
3. Realize o Commit (`git commit -m 'Add some feature-css'`)
4. Realize o Push no Branch (`git push origin feat/feature-css`)
5. Abra um Pull Request
  
  
