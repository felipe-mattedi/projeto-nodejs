/* eslint-disable */
import input from 'readline-sync';
import { executa_busca_cidade, executa_busca_empresa, executa_busca_preco, executa_busca_voo } from './buscaapi.js'
import { formata_tela, formata_tela_cidade, formata_tela_empresa, formata_tela_preco} from './formatadores.js'

export const busca_empresa_codigo = async () => {
  let empresa = input.question(' DIGITE PARTE DO NOME DA EMPRESA: ')
    try{
      let dados = await executa_busca_empresa(empresa)
      formata_tela_empresa(dados)
    }
    catch {
      throw Error ('Erro durante consulta da empresa aerea')
    }
}

 export const busca_aeroporto_codigo = async () => {
  let cidade = input.question(' DIGITE PARTE DO NOME DA CIDADE: ')

  try{
    let dados = await executa_busca_cidade(cidade)
    formata_tela_cidade(dados)
  }
  catch{
    throw Error ('Erro durante consulta da cidade')
  }
}

 export const busca_voo_codigo = async () => {
  let cia = input.question(' DIGITE O CODIGO DA EMPRESA AEREA: ')
  let voo = input.question(' DIGITE O NUMERO DO VOO: ')

  try{
    let dados = await executa_busca_voo('','',(cia+voo))
    formata_tela(dados)
  }
  catch{
    throw Error ('Erro durante consulta do voo')
  }
}

export const busca_rota_codigo = async () => {
  let dep = input.question(' DIGITE O AEROPORTO DE PARTIDA: ')
  let arr = input.question(' DIGITE O AEROPORTO DE DESTINO: ')
  try{
    let dados = await executa_busca_voo(dep,arr)
    formata_tela(dados)
  }
  catch{
    throw Error ('Erro durante consulta do voo')
  }
}

export const busca_origem = async () => {
  let origem = input.question(' DIGITE O AEROPORTO DESEJADO: ')
  try{
    let dados = await executa_busca_voo(origem,'','')
    formata_tela(dados)
  }
  catch{
    throw Error ('Erro durante consulta dos voos')
  }
}

export const busca_destino = async () => {
  let destino = input.question(' DIGITE O AEROPORTO DESEJADO: ')
  try{
    let dados = await executa_busca_voo('', destino,'')
    formata_tela(dados)
  }
  catch{
    throw Error ('Erro durante consulta dos voos')
  }
}

export const busca_preco_rota = async () => {
  let origem = input.question(' DIGITE O AEROPORTO DE ORIGEM: ')
  let destino = input.question(' DIGITE O AEROPORTO DE DESTINO: ')
  let data =  input.question(' DIGITE A DATA NO FORMATO AAAA-MM-DD: ')
  try{
    let dados = await executa_busca_preco(origem, destino, data)
    formata_tela_preco(dados)
  }
  catch{
    throw Error ('Erro durante consulta dos precos')
  }

}
