// Obter o ID do agente da URL
const urlParams = new URLSearchParams(window.location.search);
const agentId = urlParams.get('id');

// Função para exibir as informações detalhadas do agente
function showAgentDetails(agent) {
  // Exibir as informações detalhadas do agente no layout desejado
  document.getElementById('agentName').textContent = agent.name;
  document.getElementById('agentPhoto').src = agent.photo;
  // Outros elementos HTML para exibir informações adicionais do agente
}

// Chamada para obter os detalhes do agente correspondente ao ID
agtApi.getAgenteDetail({ uuid: agentId }).then((agent) => {
  showAgentDetails(agent);
});