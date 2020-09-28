export const jsTestData = [
  {
    _id: 1,
    question: 'Какие конструкции для циклов есть в javascript?',
    code: '',
    answerOptions: {
      all: ['Только две: for и while.',
        'Только одна: for.',
      'Три: for, while и do...while.'],
      correct: 'Три: for, while и do...while.',
    },
  },
  {
    _id: 2,
    question: 'Какой вариант правильно объявляет функцию f, возвращающую сумму двух аргументов ?',
    code: '',
    answerOptions: {
      all: ['let f = new Function("a,b", "return a+b")',
        'let f = new Function("a", "b", "return a+b")',
      'let f = (a, b) => { a + b }',
        'let f = function(a,b) ' +
        '{ return a+b }'],
      correct: 'let f = function(a,b) { return a+b }'
    },
  },
  {
    _id: 3,
    question: 'Какой код корректно найдёт максимальное значение в непустом массиве arr?',
    code: '',
    answerOptions: {
      all: ['Math.max.apply(null, arr)',
        'Math.max(arr)', 'arr.findMax()',
        'arr.reduce(function(prev, item) ' +
        '{ return Math.max(prev, item) })'
      ],
      correct: 'arr.reduce(function(prev, item) ' +
        '{ return Math.max(prev, item) })',
    },
  },
  {
    _id: 4,
    question: 'Чему равен typeof null в режиме use strict?',
    code: '',
    answerOptions: {
      all: ['null', 'undefined', 'string', 'object'],
      correct: 'object',
    },
  },
  {
    _id: 5,
    question: 'Чему равно 0 || 1 && 2 || 3 ?',
    code: '',
    answerOptions: {
      all: ['0', '1', '2', '3', 'true', 'false'],
      correct: '2',
    },
  },
  {
    _id: 6,
    question: 'Объявлена функция:',
    code: 'function F() {} ' +
      'Чем является F.prototype?',
    answerOptions: {
      all: ['Функцией.', 'Обычным объектом.', 'Равен undefined.'],
      correct: 'Обычным объектом.',
    },
  },
  {
    _id: 7,
    question: 'Чему равно i в конце кода?',
    code: 'for(var i=0; i<10; i++) {\n' +
      '  console.log(i);\n' +
      '}\n' +
      '// i = ?',
    answerOptions: {
      all: ['undefined', '9', '10', 'Нет такой переменной после цикла.'],
      correct: '10',
    },
  },
  {
    _id: 8,
    question: 'Правда ли что a == b?',
    code: 'a = [1, 2, 3];\n' +
      'b = [1, 2, 3];',
    answerOptions: {
      all: ['Правда.', 'Неправда.', 'Как повезёт.'],
      correct: 'Неправда.',
    },
  },
];
