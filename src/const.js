export const textSizes = {
  small: {
    fontSize: "12px",
    fontWeight: "400",
  },
  smallHeader: {
    fontSize: "14px",
    fontWeight: "400",
  },
  medium: {
    fontSize: "16px",
    fontWeight: "600",
  },
  largeH2: {
    fontSize: "24px",
    fontWeight: "700",
  },

  largeH1: {
    fontSize: "32px",
    fontWeight: "700",
  },
  mobileH2: {
    fontSize: "20px",
  },
  mobileText: {
    fontSize: "10px",
  },
};

// Апи для регистрации и авторизации пользователя
export const API_URL = "https://wedev-api.sky.pro/api/user";

// Апи для получения всех данных с сервера и создания нового расхода
export const API_URL_NEW = "https://wedev-api.sky.pro/api/transactions";

// Eindpoints для адресной строки
export const RoutesApp = {
  MAIN: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  NOT_FOUND: "/*",
  LOGIN: "/login",
  ANALYSIS: "/analysis",
};

//Обьект ошибок
export const textErrors = {
  signInAndSignUpError:
    "Упс! Введенные вами данные не корректны. Введите данные корректно и повторите попытку.",
  addExpenseError: "Ошибка добавления расхода",
  updateExpenseError: "Ошибка редактирования расхода",
  deleteExpenseError: "Ошибка удаления расхода",
  getExpenseError: "Ошибка при загрузке расходов",
  addExpense: "Ошибка при обновлении расходов",
};

export const inputColors = {
  static: {
    background: "transparent",
    border: "#999999",
  },
  active: {
    background: " #DBFFE9",
    border: "#1FA46C",
  },
  error: {
    background: " #FFEBEB",
    border: "#F25050",
  },
};

export const buttonStyles = {
  active: {
    color: "#1fa46c",
  },
  error: {
    color: "#999999",
  },
  mobile: {
    with: "343px",
  },
  desktop: {
    with: "100%",
  },
};

// Массив обьектов для категорий расходов
export const categorieName = [
  {
    id: 1,
    name: "Еда",
    value: "food",
    srcIcon: {
      default: "../src/assets/food/default.svg",
    },
  },
  {
    id: 2,
    name: "Транспорт",
    value: "transport",
    srcIcon: {
      default: "../src/assets/transport/default.svg",
    },
  },
  {
    id: 3,
    name: "Жилье",
    value: "housing",
    srcIcon: {
      default: "../src/assets/housing/default.svg",
    },
  },
  {
    id: 4,
    name: "Развлечения",
    value: "joy",
    srcIcon: {
      default: "../src/assets/joy/default.svg",
    },
  },
  {
    id: 5,
    name: "Образование",
    value: "education",
    srcIcon: {
      default: "../src/assets/education/default.svg",
    },
  },
  {
    id: 6,
    name: "Другое",
    value: "others",
    srcIcon: {
      default: "../src/assets/others/default.svg",
    },
  },
];

export const categoryTranslations = {
  food: "Еда",
  transport: "Транспорт",
  housing: "Жилье",
  joy: "Развлечение",
  education: "Образование",
  others: "Другое",
};
