/* eslint-disable */
export const formata_tela = (dados) => {
  console.log(
    `
    =======================================================================================================================
    =    DATA    | ORIGEM | DESTINO | PART. EST | PART. ATUAL | CHEG. EST | CHEG. ATUAL | STATUS    |  VOO   | EMPRESA      =
    =======================================================================================================================
    `)
  
    dados.forEach(function(valor,indice){
      if (valor.codeshare === null){
      let partest = valor.partida_est.substring(11,16)
      let partconf = valor.partida_atual === null ? '-----' : valor.partida_atual.substring(11,16)
      let chegest = valor.chegada_est.substring(11,16)
      let chegconf = valor.chegada_atual === null ? '-----' : valor.chegada_atual.substring(11,16)

    console.log(`    * ${valor.data} |  ${valor.partida}   |   ${valor.chegada}   |   ${partest}   |    ${partconf}    |   ${chegest}   |    ${chegconf}    | ${valor.status} |   ${valor.voo}  | ${valor.empresa}  `)
    }})

    console.log(
    `
    =======================================================================================================================
    `)
}

export const formata_tela_cidade = (dados) => {
console.log(
  `
  ========================================================
  = CODIGO ICAO | PAIS | CIDADE                          =  
  ======================================================== `
)

dados.forEach(function(valor,indice){
  console.log(`  *     ${valor.code}     |  ${valor.country_code}  | ${valor.name}`)
})

console.log("  ========================================================")

}

export const formata_tela_empresa = (dados) => {
  console.log(
    `
    ========================================================
    = CODIGO ICAO | EMPRESA                                =  
    ======================================================== `
  )
  
  dados.forEach(function(valor,indice){
    let iata = valor.iata_code === null ? '--' : valor.iata_code
    console.log(`    *     ${iata}      |  ${valor.name}`)
  })
  
  console.log("    ========================================================")
  
}

export const formata_tela_preco = (dados) => {
  console.log(
    `
    ====== DADOS DO MELHOR PRECO ENCONTRADO ====
    DATA      = ${dados.data_ida}
    ORIGEM    = ${dados.origem_iata} - ${dados.origem_cidade}
    DESTINO   = ${dados.destino_iata} - ${dados.destino_cidade}
    PRECO     = ${dados.moeda} ${dados.preco_min}
    CIA AEREA = ${dados.cia_aerea}
    ============================================
    `
  )
}

export default formata_tela