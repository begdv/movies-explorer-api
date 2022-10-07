const errorMessages = {
  notFound: 'Страница по указанному маршруту не найдена',
  tokenNotSended: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате',
  tokenUncorrect: 'При авторизации произошла ошибка. Переданный токен некорректен',
  conflictEmail: 'Пользователь с таким email уже существует',
  badRequestSignup: 'При регистрации пользователя произошла ошибка',
  unauthorizedSignin: 'Вы ввели неправильный логин или пароль',
  notFoundUser: 'Пользователь c запрошенным id не найден',
  badRequestUserId: 'Запрошенный id пользователя является некорректным',
  badRequestUserData: 'При обновлении профиля произошла ошибка',
  notFoundFilm: 'Фильм c запрошенным id не найден',
  badRequestFilmId: 'Запрошенный id фильма является некорректным',
  badRequestFilmData: 'Переданы некорректные данные при создании фильма',
  forbiddenFilm: 'Запрещается удалять чужой фильм',
  invalidLink: 'некорректная ссылка!',
  invalidEmail: 'некорректный адрес электронной почты!',
  internalServer: 'На сервере произошла ошибка',
};

module.exports = errorMessages;
