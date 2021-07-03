=== PROGRAMA PARA BUSCA DE PASSAGENS E STATUS DE VOOS ===

Este programa tem por objetivo verificar status de voos e buscar o melhor preço de uma passagem aérea em uma determinada rota/data.

É possível verificar o status de um voo específico ou de uma localidade, dependendo da origem ou destino.

O programa utiliza códigos de empresas aéreas e de cidades. Caso o usuário não saiba os códigos existe a opção de fazer a busca pelo nome.

O programa é encerrado ao fim de uma requisição ou em caso de falha na consulta de API ou formatador de telas.

Modulos:
index.js = Módulo principal que trata os menus e submenus
funcoesnegocio.js = Após o usuário selecionar uma opção este módulo irá tratar os dados de entrada do usuário.
buscaapi.js = Módulo responsável por efetuar as buscas nas APIs.
formatadores.js = Módulo que trata o retorno das APIs e formata os dados na tela.
telas.js = Módulo responsável por agrupar mensagens fixas que serão exibidas na tela.