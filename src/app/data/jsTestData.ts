export const jsTestData = [
  {
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
    question: 'Какой вариант правильно объявляет функцию f, возвращающую сумму двух аргументов ?',
    code: '',
    answerOptions: {
      all: ['let f = new Function("a,b", "return a+b")',
        'let f = new Function("a", "b", "return a+b")',
      'let f = (a, b) => { a + b }',
        'let f = function(a,b) { return a+b }'],
      correct: 'let f = function(a,b) { return a+b }'
    },
  },
  {
    question: 'Какой код корректно найдёт максимальное значение в непустом массиве arr?',
    code: '',
    answerOptions: {
      all: ['Math.max.apply(null, arr)',
        'Math.max(arr)', 'arr.findMax()',
        'arr.reduce(function(prev, item) { return Math.max(prev, item) })'
      ],
      correct: 'arr.reduce(function(prev, item) { return Math.max(prev, item) })',
    },
  },
  {
    question: 'Чему равен typeof null в режиме use strict?',
    code: '',
    answerOptions: {
      all: ['null', 'undefined', 'string', 'object'],
      correct: 'object',
    },
  },
  {
    question: 'Чему равно 0 || 1 && 2 || 3 ?',
    code: '',
    answerOptions: {
      all: ['0', '1', '2', '3', 'true', 'false'],
      correct: '2',
    },
  },
  {
    question: 'Объявлена функция:',
    code: 'function F() {} ' +
      'Чем является F.prototype?',
    answerOptions: {
      all: ['Функцией.', 'Обычным объектом.', 'Равен undefined.'],
      correct: 'Обычным объектом.',
    },
  },
  {
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
    question: 'Правда ли что a == b?',
    code: 'a = [1, 2, 3];\n' +
      'b = [1, 2, 3];',
    answerOptions: {
      all: ['Правда.', 'Неправда.', 'Как повезёт.'],
      correct: 'Неправда.',
    },
  },
];
