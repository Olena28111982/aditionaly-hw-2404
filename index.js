////написати функцію яка буде повертати об'єкт, який описує подарунок на дн
//в подарунка обов'язкова властивість name
//і ще мінімум 2 властивості
//запитати в користувача скількі властивостей йому потрібно для опису подарунка (якщо ввів неправильне значеня лишаємо 2 за замовчуванням)
//і ключі і значення запитувати в користувача доки не введе правильні значення
//ключем в об'єкті є назва властивості (color)
//значенням в об'єкті є значення властивості (black)

// const gift = {
//   name: 'dress',
//   color: 'black',
//   length: 'maxi',
//   'max price': 1230,
// };

function isErrorNumberInputGift(value) {
  return (
    value === "" ||
    value === null ||
    Number.isNaN(Number(value)) ||
    Number.isInteger(Number(value)) === false ||
    Number(value) < 2
  );
}
//перевірка на порожній рядок і не число
function isErrorString(value) {
  return (
    value === "" || value === null || Number.isNaN(Number(value)) === false
  );
}

// 1. запитуємо у користувача скільки властивостей йому потрібно для того щоб він описав подарунок
// 2. якщо він ввів число (4) то ми і повинні виводити стільки разів властивості і значення
// 3.якщо ввів не правильне значення то лишаємо 2 властивості
// 4. у подарунка обовязкова властивість name
// 4. запитуємо властивості і значення властивості до того моменту поки він не введе без помилок
// 5. передаємо дані в об'єкт

function getGift() {
  const gift = {};
  const userInputPowerGift = prompt(
    "вкажіть кількість властивостей необхідних Вам для вибору подарунку",
    2
  );
  const userPowerGift = isErrorNumberInputGift(userInputPowerGift)? 2 : Number(userInputPowerGift);

  let powerGift;
  let meaningsPowerGift;

  let nameGift= (['назва подарунку:']);
  let propertyNameGift= prompt ('введіть який ви хочете отримати подарунок');

  gift[nameGift] = propertyNameGift;

  for (let i = 0; i < userPowerGift; i++) {
    
        while (true) {
      powerGift = prompt(["Властивість"]);
      if (isErrorString(powerGift)) {
        continue;
      }
      break;
    }
    while (true) {
      meaningsPowerGift = prompt("Значення властивості");
      if (isErrorString(meaningsPowerGift)) {
        continue;
      }
      break;
    }

    gift[powerGift] = meaningsPowerGift;
  }
  return gift;
}
console.log(getGift());
