const errorMessages = {
  notFound: 'Путь не найден',
  unauthorized: 'Пользователь не авторизован на сервере',
  conflict: 'При регистрации указан email, который уже существует на сервере',
  badRequestSignup: 'Переданы некорректные данные при создании пользователя',
  unauthorizedSignin: 'Неправильная почта или пароль',
  notFoundUser: 'Пользователь c запрошенным id не найден',
  badRequestUserId: 'Запрошенный id пользователя является некорректным',
  badRequestUserData: 'Переданы некорректные данные при обновлении профиля',
  notFoundFilm: 'Фильм c запрошенным id не найден',
  badRequestFilmId: 'Запрошенный id фильма является некорректным',
  badRequestFilmData: 'Переданы некорректные данные при создании фильма',
  forbiddenFilm: 'Запрещается удалять чужой фильм',
  invalidLink: 'некорректная ссылка!',
  invalidEmail: 'некорректный адрес электронной почты!',
  internalServer: 'На сервере произошла ошибка',
};

module.exports = errorMessages;
