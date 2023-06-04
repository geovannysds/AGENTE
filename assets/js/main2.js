
// Função para converter o agente em um item de lista HTML
function covertAgenteToLi(agente) {
    return `
      <li class="agente">
        <span class="name">${agente.name}</span>
        <div class="detail">
          <img src="${agente.fullportrait}" alt="${agente.fullportrait}" class="photo">
          <span class="roles">${agente.roleNames}</span>
        </div>
      </li>
    `;
  }
  
  // Função para renderizar a lista de agentes
  function renderAgentList() {
    const agentelist = document.getElementById('agentelist');
  
    agtApi.getAgents().then((agentes = []) => {
      const newHtml = agentes.map(covertAgenteToLi).join('');
      agentelist.innerHTML = newHtml;
    });
  }
  
  // Chamada da função quando a página é carregada
  window.addEventListener('DOMContentLoaded', renderAgentList);
  