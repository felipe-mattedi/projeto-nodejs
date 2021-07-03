/* eslint-disable */
import input from 'readline-sync';
import  logger  from './logger.js'
import { cabecalho_principal, cabecalho, menu_precos, menu_voo, opcao_invalida, menu_voo_1, menu_voo_2 } from './telas.js'
import { busca_empresa_codigo, busca_aeroporto_codigo, busca_destino, busca_origem, busca_preco_rota, busca_rota_codigo, busca_voo_codigo } from './funcoesnegocio.js'

//* ESTA EH A PARTE PRINCIPAL QUE VAI ORQUESTRAR TODO O PROGRAMA *//

logger.info('Inicio de execução')
cabecalho_principal()
menu_inicial()

async function menu_inicial() {
  try {
    cabecalho()
    let escolha = input.question(' OPCAO: ')
    switch (escolha) {
      case "1": await status_voo()
        break

      case "2": await busca_de_passagens()
        break

      case "3":
        break

      default:
        opcao_invalida()
        menu_inicial()
    }
  }
  catch (e) {
    logger.error('Programa finalizando por erro')
    logger.error(e.message)
    console.log(e.message)
  }
}

//* ABAIXO ESTÃO OUTRAS FUNCOES RESPONSAVEIS PELOS SUBMENUS *//

async function status_voo() {
  logger.info('Status de voo')
  menu_voo()
  let escolha_2 = input.question(' OPCAO: ')
  switch (escolha_2) {
    case "1":
      await busca_voo()
      break

    case "2":
      await busca_rota()
      break

    case "3":
      await busca_por_origem()
      break

    case "4":
      await busca_por_destino()
      break

    case "5": menu_inicial()
      break

    default:
      opcao_invalida()
      status_voo()
  }
}


async function busca_voo() {
  logger.info('Busca de voo')
  menu_voo_1()
  let escolha_3 = input.question(' OPCAO: ')
  switch (escolha_3) {
    case "1": await busca_voo_codigo()
      break

    case "2": await busca_empresa_codigo()
      busca_voo()
      break

    case "3": status_voo()
      break

    default:
      opcao_invalida()
      busca_voo()
  }
}

async function busca_rota() {
  logger.info('Busca por rota')
  menu_voo_2()
  let escolha_4 = input.question(' OPCAO: ')
  switch (escolha_4) {
    case "1": await busca_rota_codigo()
      break

    case "2": await busca_aeroporto_codigo()
      busca_rota()
      break

    case "3": status_voo()
      break

    default:
      opcao_invalida()
      busca_rota()
  }
}

async function busca_por_origem() {
  logger.info('Busca por origem')
  menu_voo_2()
  let escolha_5 = input.question(' OPCAO: ')
  switch (escolha_5) {
    case "1": await busca_origem()
      break

    case "2": await busca_aeroporto_codigo()
      busca_por_origem()
      break

    case "3": status_voo()
      break

    default:
      opcao_invalida()
      busca_por_origem()
  }
}

async function busca_por_destino() {
  logger.info('Busca por destino')
  menu_voo_2()
  let escolha_6 = input.question(' OPCAO: ')
  switch (escolha_6) {
    case "1": await busca_destino()
      break

    case "2": await busca_aeroporto_codigo()
      busca_por_destino()
      break

    case "3": status_voo()
      break

    default:
      opcao_invalida()
      busca_por_destino()
  }
}

async function busca_de_passagens() {
  logger.info('Busca por preço de passagem')
  menu_precos()
  menu_voo_2()
  let escolha_7 = input.question(' OPCAO: ')
  switch (escolha_7) {
    case "1": await busca_preco_rota()
      break

    case "2": await busca_aeroporto_codigo()
      busca_de_passagens()
      break

    case "3": menu_inicial()
      break

    default:
      opcao_invalida()
      busca_de_passagens()
  }
}