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
    message:
      'Erro ao cadastrar os dados do usuário. Só permitido para maiores de 18 anos',
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
  //* ------------- VALIDATORS MESSAGES OF USERS-------------- */
  //? ---------------- FIRST NAME MESSAGES ----------------- */
  validateRequiredFirstName: {
    code: 1100,
    message: 'É preciso informar um nome',
  },
  validateMinCarachtersFirstName: {
    code: 1101,
    message: 'O nome deve conter no mínimo 1 caracter',
  },
  validatMaxCarachtersFirstName: {
    code: 1102,
    message: 'O nome não deve exceder 30 caracteres',
  },
  //? ---------------- LAST NAME MESSAGES ----------------- */
  validateRequiredLastName: {
    code: 1103,
    message: 'É preciso informar um sobrenome',
  },
  validateMinCarachtersLastName: {
    code: 1104,
    message: 'O sobrenome deve conter no mínimo 1 caracter',
  },
  validatMaxCarachtersLastName: {
    code: 1105,
    message: 'O sobrenome não deve exceder 30 caracteres',
  },
  //? ---------------- AGE MESSAGES ----------------- */
  validateRequiredAge: {
    code: 1106,
    message: 'É preciso informar sua idade',
  },
  validateMinAge: {
    code: 1107,
    message: 'É preciso que você seja maior de 18 anos',
  },
  validatMaxAge: {
    code: 1108,
    message: 'Informe idade menor que 120 anos',
  },
  //? ---------------- CPF MESSAGES ----------------- */
  validateRequiredCpf: {
    code: 1109,
    message: 'É preciso informar seu CPF',
  },
  validateMinCarachtersCpf: {
    code: 1110,
    message: 'O CPF deve conter 11 caracteres',
  },
  validatMaxCarachtersCpf: {
    code: 1111,
    message: 'O CPF deve conter 11 caracteres',
  },
  //? ---------------- PHONE MESSAGES ----------------- */
  validateRequiredPhone: {
    code: 1112,
    message: 'É preciso informar um telefone',
  },
  validateMinCarachtersPhone: {
    code: 1113,
    message: 'O telefone deve conter no mínimo 9 caracteres',
  },
  validateMaxCarachtersPhone: {
    code: 1114,
    message: 'O telefone não deve exceder 15 caracteres',
  },
  //? ---------------- EMAIL MESSAGES ----------------- */
  validateRequiredEmail: {
    code: 1115,
    message: 'É preciso informar um e-mail',
  },
  validateValidEmail: {
    code: 1116,
    message: 'Informe um e-mail válido',
  },
  //? ---------------- USER TYPE MESSAGES ----------------- */
  validateRequiredUserType: {
    code: 1117,
    message: 'Informe se você é administrador',
  },
  //? ---------------- PASSW MESSAGES ----------------- */
  validateRequiredPassw: {
    code: 1120,
    message: 'É preciso informar uma senha',
  },
  validateMinCarachtersPassw: {
    code: 1121,
    message: 'A senha deve conter no mínimo 4 caracteres',
  },
  validateMaxCarachtersPassw: {
    code: 1112,
    message: 'A senha não deve exceder 8 caracteres',
  },
  //* ------------- VALIDATORS MESSAGES OF CARS -------------- */
  //? ---------------- CAR NAME MESSAGES ----------------- */
  validateRequiredCarName: {
    code: 1202,
    message: 'É preciso informar o nome do carro',
  },
  validateMinCarachtersCarName: {
    code: 1203,
    message: 'O nome do carro deve conter no mínimo 1 caracter',
  },
  validatMaxCarachtersCarName: {
    code: 1204,
    message: 'O nome do carro não deve exceder 30 caracteres',
  },
  //? ---------------- BRAND MESSAGES ----------------- */
  validateRequiredBrand: {
    code: 1205,
    message: 'É preciso informar a marca do carro',
  },
  validateMinCarachtersBrand: {
    code: 1206,
    message: 'A marca do carro deve conter no mínimo 1 caracter',
  },
  validatMaxCarachtersBrand: {
    code: 1207,
    message: 'A marca do carro não deve exceder 30 caracteres',
  },
  //? ---------------- YEAR MANUFACT. MESSAGES ----------------- */
  validateRequiredYearManufact: {
    code: 1208,
    message: 'É preciso informar o ano de fabricação do carro',
  },
  validateMinYearManufact: {
    code: 1209,
    message: 'O ano mínimo de fabricação do carro é 1950',
  },
  validatMaxYearManufact: {
    code: 1210,
    message: 'O ano mínimo de fabricação do carro é 2021',
  },
  //? ---------------- PURCHASE PRICE MESSAGES ----------------- */
  validateRequiredPurchasePrice: {
    code: 1211,
    message: 'É preciso informar o valor de compra do carro',
  },
  validateMinCarachtersPurchasePrice: {
    code: 1212,
    message: 'O valor de compra do carro deve conter no mínimo 4 caracteres',
  },
  validateMaxCarachtersPurchasePrice: {
    code: 1213,
    message: 'O valor de compra do carro não deve exceder 30 caracteres',
  },
  //? ---------------- LICENSE PLATE MESSAGES ----------------- */
  validateRequiredLicensePlate: {
    code: 1214,
    message: 'É preciso informar a placa do carro',
  },
  validateMinCarachtersLicensePlate: {
    code: 1215,
    message: 'A placa do carro deve conter no mínimo 7 caracteres',
  },
  validateMaxCarachtersLicensePlate: {
    code: 1216,
    message: 'A placa do carro não deve exceder 10 caracteres',
  },
  //? ---------------- USER UID MESSAGES ----------------- */
  validateRequiredUserUid: {
    code: 1217,
    message: 'É preciso informar o usuário',
  },
};
