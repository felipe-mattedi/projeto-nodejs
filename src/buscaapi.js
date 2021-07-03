/* eslint-disable */
import axios from 'axios' 

export const executa_busca_preco = async (origem, destino, data) => {
  let url_fixa = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/BR/BRL/pt-BR/${origem}-sky/${destino}-sky/${data}`

  let options = {
    method: 'GET',
    url: url_fixa,
    headers: {
      'x-rapidapi-key': '948c30a8abmsh5648b380888f52bp1feb10jsn3ada46112d41',
      'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
    }
  };

  let dados = await axios.request(options).then(function(response) {
    return (response.data)})

    let data_ida = dados.Quotes[0].OutboundLeg.DepartureDate.substring(0,10)
    let cia_aerea =  dados.Carriers[0].Name
    let origem_iata = dados.Places[0].IataCode
    let origem_cidade = dados.Places[0].CityName
    let destino_iata = dados.Places[1].IataCode
    let destino_cidade = dados.Places[1].CityName
    let moeda = dados.Currencies[0].Symbol
    let preco_min = dados.Routes[0].Price

    return {data_ida, cia_aerea, origem_iata, origem_cidade, destino_iata, destino_cidade, moeda, preco_min}
  
}


export const executa_busca_empresa = async (empresa_procurada) => {
  let dados = await axios.get("http://airlab.co/api/v7/airlines?api_key=b6e2a93d-a7b4-407d-9003-a39aa8d4aac9").then(function(response) {
    return (response.data)})
    let dados_final = dados.response.filter(function(empresa){
      return (empresa.name.toLowerCase().search(empresa_procurada.toLowerCase()) != -1)})
    return dados_final}


export const executa_busca_cidade = async (cidade_procurada) => {
  let dados = await axios.get("http://airlabs.com/api/v6/cities?api_key=b6e2a93d-a7b4-407d-9003-a39aa8d4aac9").then(function(response) {
    return (response.data)})
    let dados_final = dados.response.filter(function(cidade){
      return (cidade.name.toLowerCase().search(cidade_procurada.toLowerCase()) != -1)})
    return dados_final}


export const executa_busca_voo = async (dep = '',arr = '',voo = '') => {
  let dados = await axios.get(`http://api.aviationstack.com/v1/flights?access_key=5bdae6e7e718aa52bd43ee675820064e&dep_iata=${dep}&arr_iata=${arr}&flight_iata=${voo}`).then(function(response) {
    return (response.data)})
  let dados_final = dados.data.map(function(voo){
      return({ data: voo.flight_date, status: voo.flight_status, partida: voo.departure.iata, chegada: voo.arrival.iata, partida_est: voo.departure.estimated, partida_atual: voo.departure.actual, chegada_est: voo.arrival.estimated ,chegada_atual:voo.arrival.actual ,empresa: voo.airline.name, voo: voo.flight.number, codeshare: voo.flight.codeshared})})
     return dados_final}
