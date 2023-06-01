function convertAgtApiDetailToAgente(agenteDetail) {
  console.log();
  const agente = new Agente();

  agente.name = agenteDetail.data.displayName;
  agente.photo = agenteDetail.data.displayIcon;
  agente.roleNames = agenteDetail.data.role.displayName;
  agente.icon = agenteDetail.data.role.displayIcon;
  agente.id = agenteDetail.data.uuid;
  agente.fullportrait = agenteDetail.data.fullPortrait;
  return agente;
}

const agtApi = {
  getAgenteDetail: (agente) => {
    const link = "https://valorant-api.com/v1/agents/";
    const url = `${link}${agente.uuid}`;

    ;
    return fetch(url)
      .then(response => response.json())
      .then(convertAgtApiDetailToAgente);
  },


  getAgents: (offset = 0, limit = 22) => {
    const url = "https://valorant-api.com/v1/agents/";
    const headers = {
      "Accept-Language": "pt-BR",
    };
    return fetch(url, { headers })
      .then(response => response.json())
      .then(jsonBody => jsonBody.data)
      .then(agentes => agentes.filter(agente => agente.isPlayableCharacter !== false))
      .then(agentes => agentes.map(agente => agtApi.getAgenteDetail(agente)))
      .then(detailRequests => Promise.all(detailRequests))
      .then(agentsDetails => agentsDetails);
  },
  
};
