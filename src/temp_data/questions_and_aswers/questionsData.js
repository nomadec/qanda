export const jsQuestions = [
  // ! JS
  'Что такое переменные? Для чего они нужны?',
  'Через какие ключевые слова можно объявлять переменные в JS?',
  'Что такое const и чем он отличается от let?',
  'Можно ли повторно объявлять переменные?',
  'Как не следует объявлять переменные в JS?',
  'Сколько типов данных есть в JS?',
  'Что такое typeof?',
  "Какой тип выведет следующий код console.log(typeof '23')?",
  'Какой оператор используется для присваивания в JS?',
  'Какой оператор используется для сравнивания?',
  'Для чего нужны операторы “+”, “-”, “%”, “/”?',
  'Каким сочетанием горячих клавиш можно закомментировать код?',
  'Какие виды комментариев вы знаете?',
  'Чем отличается // от /* */?',
  'Что такое alert, prompt, confirm?',
  'Что вернет confirm если нажать отмена?',
  'Что вернет prompt если нажать отмена или esc?',

  // ! Условные и логические операторы +
  'Что такое условный оператор?',
  'Какие формы условных операторов бывают?',
  'Каков синтаксис условного оператора if?',
  'Для чего используется оператор if...else?',
  'В каком случае используем тернарный оператор?',
  'Для чего предназначен оператор switch?',
  'Для чего используется ключевое слово default в switch?',
  'Зачем нам нужны логические операторы?',
  'Какие типы логических операторов бывают?',
  'Как работает оператор ‘&&’ (и)?',
  'Как работает оператор ‘||’ (или)?',
  'Как работает оператор ‘!’ (не)?',

  // ! Циклы
  'Что такое цикл ?',
  'Как работает цикл “while”?',
  'Как работает цикл “do while”? В чём отличие от “while”?',
  'Как работает цикл “for”? В чём отличие от “while”?',
  'Что делает “break”?',
  'Что делает “continue”?',
  'Как работает “for ... of”? В чём отличие от “for”?',
  'Как работает “for ... in”? В чём отличие от “for ... of”?',

  // ! Массивы
  'Что такое массив?',
  'Что такое индекс?',
  'Что такое length?',
  'Как вытащить значение из массива?',

  // ! Методы массива
  'Как работают .pop(), .push() ?',
  'Как работают .shift(), .unshift() ?',
  'Как работает .concat() ?',
  'Как работает .indexOf() ?',
  'Как работает .reverse() ?',
  'Как работает .slice() ?',
  'Как работает .splice() ? В чём отличие от .slice() ?',
  'Как работает .join() ?',

  'Как работает .forEach() ?',
  'Как работает .map() ? В чём отличие от forEach() ?',
  'Как работает .filter() ?',
  'Как работает .findIndex() ? В чём отличие от .indexOf() ?',
  'Как работает .find() и что он возвращает?',
  'Как работает .includes() ?',
  'Что делает метод reduce()? Какие аргументы принимает reduce() и какие аргументы принимает callback функция reduce()?',

  // ! Функции
  'Что такое функции?',
  'Виды функций и различия между ними.',
  'Что такое глобальная и локальная область видимости?',
  'Различия var, let и const.',
  'Что такое hoisting?',

  // ! Рекурсия и замыкание
  'Что такое рекурсия?',
  'Каким двум требованиям должна соответствовать функция, чтобы она считалось полноценной рекурсией?',
  'Чем отличается локальная область видимости от глобальной?',
  'Что означает термин замыкание?',
  'В каких случаях мы получаем ошибку Stack OverFlow (заполнение стека)?',
  'В каких случаях лучше использовать рекурсию, а в каких цикл?',

  // ! Стрелочные функции
  'В чем удобство стрелочных функции?',
  'Различия между стрелочными функциями и другими видами функции?',
  'Есть ли у стрелочной функции объект arguments?',
  'Как объекту добавить метод? и как его вызвать?',
  'Что такое this? И зачем он нужен?',
  'Какими способами можно написать стрелочную функцию?',

  // ! RegExp
  'Что такое RegExp?',
  'Для чего нам могут понадобится регулярные выражения?',
  'Что означает флаг “g”?',
  'Что означает флаг “i”?',
  'Как создать RegExp?',
  'Что означают следующие символы: w, W, d, D,{5},[abc], [^abc], d+, ?, [a-z]?',
  'Как работает метод match() в RegExp?',
  'Как работает метод replace() в RegExp?',
  'Как работает метод test() в RegExp?',

  // ! Деструктуризация
  'Как вы понимаете термин деструктуризация, в каких случаях это может быть удобно?',
  'Каков синтаксис деструктуризации?',
  'Чем отличается деструктуризация объектов от массивов?',
  'Что такое spread оператор?',
  'Что произойдет с копией объекта, если мы изменим оригинал? P.S. Рассматривается случай поверхностной копии.',
  'Как вы понимаете термин глубокое копирование?',
  'Как в JS можно добиться глубокого копирования?',
];

export const domQuestions = [
  // ! DOM
  'Что означает аббревиатура DOM? И что этот объект из себя представляет?',
  'Какой структурой данных считается DOM?',
  'Что такое Node?',
  'Как создать новый элемент?',
  'Как удалить элемент?',
  'Чем отличается innerText от innerHtml?',
  'Что возвращает element.children?',
  'Какие геттеры (все что начинается с get...) вы знаете?',
  'Какие есть методы добавления элементов на страницу?',
  'Чем отличается querySelector от querySelectorAll?',

  // ! Native JS Events

  'Что же такое HTML DOM Events?',
  'Чем отличается передача функции обработчика в метод addEventListener() от передачи ее в качестве HTML атрибута на какое-либо событие?',
  'Как зарегистрировать клик пользователя?',
  'Как зарегистрировать движение курсора и вывести координаты?',
  'Как зарегистрировать фокус на элемент?',
  'Что такое DOMContentLoaded и когда его можно использовать?',
  'Чем является первый аргумент функции обработчика события?',
  'Как я могу обработать изменение инпута, и выводить в консоль значение инпута при каждом его изменении?',
];