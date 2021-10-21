export const carregaPessoas = (urlApi) => () =>
  fetch(urlApi).then((res) => res.json());
