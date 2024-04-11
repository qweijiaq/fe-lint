'use strict';

const rule = require('../../rules/no-http-url');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-http-url', rule, {
  valid: [
    {
      code: "var test = 'https://Pony Wei.com';",
    },
  ],

  invalid: [
    {
      code: "var test = 'http://Pony Wei.com';",
      output: "var test = 'http://Pony Wei.com';",
      errors: [
        {
          message: 'Recommended "http://Pony Wei.com" switch to HTTPS',
        },
      ],
    },
    {
      code: "<img src='http://Pony Wei.com' />",
      output: "<img src='http://Pony Wei.com' />",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      errors: [
        {
          message: 'Recommended "http://Pony Wei.com" switch to HTTPS',
        },
      ],
    },
  ],
});
