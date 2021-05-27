export default {
  //* ------------- USER CONTROLLER -------------- */
  userIndex: {
    code: 1010,
    message: 'Erro ao buscar dados de todos os usuários',
  },
  userShow: {
    code: 1011,
    message: 'Erro ao buscar os dados do usuário',
  },
  userStore: {
    code: 1012,
    message: 'Erro ao cadastrar os dados do usuário',
  },
  userUpdate: {
    code: 1013,
    message: 'Erro ao atualizar dados do usuário',
  },
  userAlreadyRegistered: {
    code: 1014,
    message: 'Usuário já cadastrado',
  },
  userUnauth: {
    code: 1015,
    message: 'Você não possui credenciais de administrador',
  },
  validateUser: {
    code: 1016,
    message: 'Erro ao validar dados do usuário',
  },
  //* ------------- CAR CONTROLLER -------------- */
  carIndex: {
    code: 1020,
    message: 'Erro ao buscar dados de todos os carros',
  },
  carShow: {
    code: 1021,
    message: 'Erro ao buscar dados do carro',
  },
  carStore: {
    code: 1022,
    message: 'Erro ao cadastrar os dados do carro',
  },
  carUpdate: {
    code: 1023,
    message: 'Erro ao atualizar os dados do carro',
  },
  carDelete: {
    code: 1024,
    message: 'Erro ao deletar os dados do carro',
  },
  //* ------------- VALIDATORS MESSAGES -------------- */
};
