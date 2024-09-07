function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById ("campo-pesquisa") .value ;
    if (campoPesquisa == "") {
        section.innerHTML = "<p>nada foi encontrado</p>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulos = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada elemento (dado) da lista de dados
    for (let dado of dados) {
        titulos = dado.titulos.toLowerCase ()
        descricao = dado.descricao.toLowerCase ()
        tags = dado.tags.toLowerCase ()
     if   (titulos.includes(campoPesquisa) || descricao.includes (campoPesquisa)
            || tags.includes (campoPesquisa)) {
            // Constrói o HTML para cada item do resultado da pesquisa
       resultados += `
      <div class="item-resultado">
            <h2> <a href="#" target="_blank">${dado.titulos}</a> </h2>
           <p class="descrição-meta">${dado.descricao}</p> 
           <a href=${dado.link} target="">Saiba mais em nossas Redes sociais.</a>
      </div>
         `;
        }
        
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}
//console.log(dados); // Supõe que a variável 'dados' contém uma lista de objetos com as propriedades 'titulos', 'descricao' e 'link'

