const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const reactPlugin = require('eslint-plugin-react');
const reactNativePlugin = require('eslint-plugin-react-native');
const prettierPlugin = require('eslint-plugin-prettier');

/ @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [{
    files: ['/*.{js,ts,jsx,tsx}'],
    languageOptions: {
        parser: tsParser,
        parserOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            ecmaFeatures: {
                jsx: true,
            },
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: {
        '@typescript-eslint': tsPlugin,
        react: reactPlugin,
        'react-native': reactNativePlugin,
        prettier: prettierPlugin,
    },
    rules: {
        // Prettier
        'prettier/prettier': [
            'error',
            {
                singleQuote: true, //bittalik qo'shtirnoq bo'lishi kerak
                useTabs: true, // ishlatilganda har bir funksiya ichida bittada tab qo'shib beradi
                semi: true, // har bir qatordan keyin ( ; ) nuqta vergul qo'yish kerak
                trailingComma: 'all', //ro'yhat, obyekt,funksiyadagi oxirgi elementga vergul berishimiz kerak
                bracketSpacing: true, // massivlar, qavslar ichida bo'sh joy bo'sin
                printWidth: 100, //har bir qator maksimal 100 ta belgi bo'lsin  
                endOfLine: 'auto', //Prettier kod satrlarini har bir operatsion tizimga mos ravishda yakunlasin degani.
            },
        ],

        // React Native specific
        'react-native/no-unused-styles': 2, //bu yerda StyleSheetda o'zgaruvch berilmaganligi uchun xato beradi
        'react-native/split-platform-components': 2, //bu yerda import qilinganda (.js, tsx) shu kabi belgi yozmaymiz
        'react-native/no-inline-styles': 2, //bu yerda to'g'ridan to'g'ri style={color, size} ichiga rang, razmer, bera olmaymiz bizga xato beradi.
        'react-native/no-color-literals': 2, //bu yerda o'zgaruvchiga rangni saqlashimiz kerak
        'react-native/no-raw-text': 2, //bu yerda to'g'ridan tog'ri text yoza olmaymiz faqatgina <Text>{ Welcome }</Text> shunday yozamiz
        'react-native/no-single-element-style-arrays': 2, //agar style ichida 1ta styles berayotgan bolsak, array(massiv)ga olish kerak emas

        // TypeScript specific
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
}, ];