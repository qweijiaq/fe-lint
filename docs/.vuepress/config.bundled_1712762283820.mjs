// docs/.vuepress/config.ts
import { defineConfig4CustomTheme } from 'vuepress/config';
var config_default = defineConfig4CustomTheme({
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '\u5370\u5BA2\u5B66\u9662',
      description: '\u524D\u7AEF\u7F16\u7801\u89C4\u8303\u5DE5\u7A0B\u5316',
    },
  },
  base: '/fe-spec/',
  themeConfig: {
    nav: [
      { text: '\u9996\u9875', link: '/index.md' },
      {
        text: '\u7F16\u7801\u89C4\u8303',
        items: [
          { text: 'HTML \u7F16\u7801\u89C4\u8303', link: '/coding/html.md' },
          { text: 'CSS \u7F16\u7801\u89C4\u8303', link: '/coding/css.md' },
          { text: 'JavaScript \u7F16\u7801\u89C4\u8303', link: '/coding/javascript.md' },
          { text: 'Typescript \u7F16\u7801\u89C4\u8303', link: '/coding/typescript.md' },
          { text: 'Node \u7F16\u7801\u89C4\u8303', link: '/coding/node.md' },
        ],
      },
      {
        text: '\u5DE5\u7A0B\u89C4\u8303',
        items: [
          { text: 'Git \u89C4\u8303', link: '/engineering/git.md' },
          { text: '\u6587\u6863\u89C4\u8303', link: '/engineering/doc.md' },
          { text: 'CHANGELOG \u89C4\u8303', link: '/engineering/changelog.md' },
        ],
      },
      {
        text: 'NPM\u5305',
        items: [
          { text: 'wj-fe-eslint-config', link: '/npm/eslint.md' },
          { text: 'wj-fe-stylelint-config', link: '/npm/stylelint.md' },
          { text: 'wj-fe-commitlint-config', link: '/npm/commitlint.md' },
          { text: 'wj-fe-markdownlint-config', link: '/npm/markdownlint.md' },
          { text: 'wj-fe-eslint-plugin', link: '/npm/eslint-plugin.md' },
        ],
      },
      {
        text: '\u811A\u624B\u67B6',
        items: [{ text: 'wj-fe-lint', link: '/cli/wj-fe-lint.md' }],
      },
    ],
    sidebar: [
      {
        title: '\u7F16\u7801\u89C4\u8303',
        children: [
          {
            title: 'HTML \u7F16\u7801\u89C4\u8303',
            path: '/coding/html.md',
          },
          {
            title: 'CSS \u7F16\u7801\u89C4\u8303',
            path: '/coding/css.md',
          },
          {
            title: 'JavaScript \u7F16\u7801\u89C4\u8303',
            path: '/coding/javascript.md',
          },
          {
            title: 'Typescript \u7F16\u7801\u89C4\u8303',
            path: '/coding/typescript.md',
          },
          {
            title: 'Node \u7F16\u7801\u89C4\u8303',
            path: '/coding/node.md',
          },
        ],
      },
      {
        title: '\u5DE5\u7A0B\u89C4\u8303',
        children: [
          {
            title: 'Git \u89C4\u8303',
            path: '/engineering/git.md',
          },
          {
            title: '\u6587\u6863\u89C4\u8303',
            path: '/engineering/doc.md',
          },
          {
            title: 'CHANGELOG \u89C4\u8303',
            path: '/engineering/changelog.md',
          },
        ],
      },
      {
        title: 'NPM\u5305',
        children: [
          { title: 'wj-fe-eslint-config', path: '/npm/eslint.md' },
          { title: 'wj-fe-stylelint-config', path: '/npm/stylelint.md' },
          { title: 'wj-fe-commitlint-config', path: '/npm/commitlint.md' },
          { title: 'wj-fe-markdownlint-config', path: '/npm/markdownlint.md' },
          { title: 'wj-fe-eslint-plugin', path: '/npm/eslint-plugin.md' },
        ],
      },
      {
        title: '\u811A\u624B\u67B6',
        children: [{ title: 'wj-fe-lint', path: '/cli/wj-fe-lint.md' }],
      },
    ],
    logo: '/img/logo.png',
    repo: 'https://github.com/qweijiaq/fe-lint',
    searchMaxSuggestions: 10,
    docsDir: 'docs',
    footer: {
      createYear: 2024,
      copyrightInfo: 'Pony Wei | <a href="https://github.com/qweijiaq" target="_blank">github</a>',
    },
    extendFrontmatter: {
      author: {
        name: 'Pony Wei',
        link: 'https://github.com/qweijiaq/fe-lint',
      },
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }],
    [
      'meta',
      {
        name: 'keywords',
        content: '\u524D\u7AEF\u7F16\u7801\u89C4\u8303\u5DE5\u7A0B\u5316',
      },
    ],
  ],
  plugins: [
    [
      'one-click-copy',
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
        copyMessage: '\u590D\u5236\u6210\u529F',
        duration: 1e3,
        showInMobile: false,
      },
    ],
    [
      'vuepress-plugin-zooming',
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
  ],
  extraWatchFiles: ['.vuepress/config.ts'],
});
export { config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBkZWZpbmVDb25maWc0Q3VzdG9tVGhlbWUsIFVzZXJQbHVnaW5zIH0gZnJvbSAndnVlcHJlc3MvY29uZmlnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZzRDdXN0b21UaGVtZSh7XHJcbiAgbG9jYWxlczoge1xyXG4gICAgJy8nOiB7XHJcbiAgICAgIGxhbmc6ICd6aC1DTicsXHJcbiAgICAgIHRpdGxlOiAnXHU1MzcwXHU1QkEyXHU1QjY2XHU5NjYyJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdcdTUyNERcdTdBRUZcdTdGMTZcdTc4MDFcdTg5QzRcdTgzMDNcdTVERTVcdTdBMEJcdTUzMTYnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJhc2U6ICcvZmUtc3BlYy8nLFxyXG4gIHRoZW1lQ29uZmlnOiB7XHJcbiAgICBuYXY6IFtcclxuICAgICAgeyB0ZXh0OiAnXHU5OTk2XHU5ODc1JywgbGluazogJy9pbmRleC5tZCcgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdcdTdGMTZcdTc4MDFcdTg5QzRcdTgzMDMnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IHRleHQ6ICdIVE1MIFx1N0YxNlx1NzgwMVx1ODlDNFx1ODMwMycsIGxpbms6ICcvY29kaW5nL2h0bWwubWQnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdDU1MgXHU3RjE2XHU3ODAxXHU4OUM0XHU4MzAzJywgbGluazogJy9jb2RpbmcvY3NzLm1kJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnSmF2YVNjcmlwdCBcdTdGMTZcdTc4MDFcdTg5QzRcdTgzMDMnLCBsaW5rOiAnL2NvZGluZy9qYXZhc2NyaXB0Lm1kJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnVHlwZXNjcmlwdCBcdTdGMTZcdTc4MDFcdTg5QzRcdTgzMDMnLCBsaW5rOiAnL2NvZGluZy90eXBlc2NyaXB0Lm1kJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnTm9kZSBcdTdGMTZcdTc4MDFcdTg5QzRcdTgzMDMnLCBsaW5rOiAnL2NvZGluZy9ub2RlLm1kJyB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnXHU1REU1XHU3QTBCXHU4OUM0XHU4MzAzJyxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyB0ZXh0OiAnR2l0IFx1ODlDNFx1ODMwMycsIGxpbms6ICcvZW5naW5lZXJpbmcvZ2l0Lm1kJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU2NTg3XHU2ODYzXHU4OUM0XHU4MzAzJywgbGluazogJy9lbmdpbmVlcmluZy9kb2MubWQnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdDSEFOR0VMT0cgXHU4OUM0XHU4MzAzJywgbGluazogJy9lbmdpbmVlcmluZy9jaGFuZ2Vsb2cubWQnIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdOUE1cdTUzMDUnLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IHRleHQ6ICdlbmNvZGUtZmUtZXNsaW50LWNvbmZpZycsIGxpbms6ICcvbnBtL2VzbGludC5tZCcgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ2VuY29kZS1mZS1zdHlsZWxpbnQtY29uZmlnJywgbGluazogJy9ucG0vc3R5bGVsaW50Lm1kJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnZW5jb2RlLWZlLWNvbW1pdGxpbnQtY29uZmlnJywgbGluazogJy9ucG0vY29tbWl0bGludC5tZCcgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ2VuY29kZS1mZS1tYXJrZG93bmxpbnQtY29uZmlnJywgbGluazogJy9ucG0vbWFya2Rvd25saW50Lm1kJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnZW5jb2RlLWZlLWVzbGludC1wbHVnaW4nLCBsaW5rOiAnL25wbS9lc2xpbnQtcGx1Z2luLm1kJyB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnXHU4MTFBXHU2MjRCXHU2N0I2JyxcclxuICAgICAgICBpdGVtczogW3sgdGV4dDogJ2VuY29kZS1mZS1saW50JywgbGluazogJy9jbGkvZW5jb2RlLWZlLWxpbnQubWQnIH1dLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIHNpZGViYXI6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnXHU3RjE2XHU3ODAxXHU4OUM0XHU4MzAzJyxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0hUTUwgXHU3RjE2XHU3ODAxXHU4OUM0XHU4MzAzJyxcclxuICAgICAgICAgICAgcGF0aDogJy9jb2RpbmcvaHRtbC5tZCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NTUyBcdTdGMTZcdTc4MDFcdTg5QzRcdTgzMDMnLFxyXG4gICAgICAgICAgICBwYXRoOiAnL2NvZGluZy9jc3MubWQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdKYXZhU2NyaXB0IFx1N0YxNlx1NzgwMVx1ODlDNFx1ODMwMycsXHJcbiAgICAgICAgICAgIHBhdGg6ICcvY29kaW5nL2phdmFzY3JpcHQubWQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdUeXBlc2NyaXB0IFx1N0YxNlx1NzgwMVx1ODlDNFx1ODMwMycsXHJcbiAgICAgICAgICAgIHBhdGg6ICcvY29kaW5nL3R5cGVzY3JpcHQubWQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdOb2RlIFx1N0YxNlx1NzgwMVx1ODlDNFx1ODMwMycsXHJcbiAgICAgICAgICAgIHBhdGg6ICcvY29kaW5nL25vZGUubWQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdcdTVERTVcdTdBMEJcdTg5QzRcdTgzMDMnLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnR2l0IFx1ODlDNFx1ODMwMycsXHJcbiAgICAgICAgICAgIHBhdGg6ICcvZW5naW5lZXJpbmcvZ2l0Lm1kJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnXHU2NTg3XHU2ODYzXHU4OUM0XHU4MzAzJyxcclxuICAgICAgICAgICAgcGF0aDogJy9lbmdpbmVlcmluZy9kb2MubWQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDSEFOR0VMT0cgXHU4OUM0XHU4MzAzJyxcclxuICAgICAgICAgICAgcGF0aDogJy9lbmdpbmVlcmluZy9jaGFuZ2Vsb2cubWQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdOUE1cdTUzMDUnLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICB7IHRpdGxlOiAnZW5jb2RlLWZlLWVzbGludC1jb25maWcnLCBwYXRoOiAnL25wbS9lc2xpbnQubWQnIH0sXHJcbiAgICAgICAgICB7IHRpdGxlOiAnZW5jb2RlLWZlLXN0eWxlbGludC1jb25maWcnLCBwYXRoOiAnL25wbS9zdHlsZWxpbnQubWQnIH0sXHJcbiAgICAgICAgICB7IHRpdGxlOiAnZW5jb2RlLWZlLWNvbW1pdGxpbnQtY29uZmlnJywgcGF0aDogJy9ucG0vY29tbWl0bGludC5tZCcgfSxcclxuICAgICAgICAgIHsgdGl0bGU6ICdlbmNvZGUtZmUtbWFya2Rvd25saW50LWNvbmZpZycsIHBhdGg6ICcvbnBtL21hcmtkb3dubGludC5tZCcgfSxcclxuICAgICAgICAgIHsgdGl0bGU6ICdlbmNvZGUtZmUtZXNsaW50LXBsdWdpbicsIHBhdGg6ICcvbnBtL2VzbGludC1wbHVnaW4ubWQnIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnXHU4MTFBXHU2MjRCXHU2N0I2JyxcclxuICAgICAgICBjaGlsZHJlbjogW3sgdGl0bGU6ICdlbmNvZGUtZmUtbGludCcsIHBhdGg6ICcvY2xpL2VuY29kZS1mZS1saW50Lm1kJyB9XSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBsb2dvOiAnL2ltZy9sb2dvLnBuZycsXHJcbiAgICByZXBvOiAnZW5jb2RlLXN0dWRpby1mZS9mZS1zcGVjJyxcclxuICAgIHNlYXJjaE1heFN1Z2dlc3Rpb25zOiAxMCxcclxuICAgIGRvY3NEaXI6ICdkb2NzJyxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICBjcmVhdGVZZWFyOiAyMDIzLFxyXG4gICAgICBjb3B5cmlnaHRJbmZvOlxyXG4gICAgICAgICdlbmNvZGUgc3R1ZGlvIHwgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9lbmNvZGUtc3R1ZGlvLWZlL2ZlLXNwZWNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5naXRodWI8L2E+JyxcclxuICAgIH0sXHJcblxyXG4gICAgZXh0ZW5kRnJvbnRtYXR0ZXI6IHtcclxuICAgICAgYXV0aG9yOiB7XHJcbiAgICAgICAgbmFtZTogJ1BvbnkgV2VpJyxcclxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2VuY29kZS1zdHVkaW8tZmUvZmUtc2VwYycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGhlYWQ6IFtcclxuICAgIFsnbGluaycsIHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvaW1nL2xvZ28ucG5nJyB9XSxcclxuICAgIFtcclxuICAgICAgJ21ldGEnLFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ2tleXdvcmRzJyxcclxuICAgICAgICBjb250ZW50OiAnXHU1MjREXHU3QUVGXHU3RjE2XHU3ODAxXHU4OUM0XHU4MzAzXHU1REU1XHU3QTBCXHU1MzE2JyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgXSxcclxuXHJcbiAgcGx1Z2luczogPFVzZXJQbHVnaW5zPltcclxuICAgIFtcclxuICAgICAgJ29uZS1jbGljay1jb3B5JyxcclxuICAgICAge1xyXG4gICAgICAgIGNvcHlTZWxlY3RvcjogWydkaXZbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHByZScsICdkaXZbY2xhc3MqPVwiYXNpZGUtY29kZVwiXSBhc2lkZSddLFxyXG4gICAgICAgIGNvcHlNZXNzYWdlOiAnXHU1OTBEXHU1MjM2XHU2MjEwXHU1MjlGJyxcclxuICAgICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICBzaG93SW5Nb2JpbGU6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuXHJcbiAgICBbXHJcbiAgICAgICd2dWVwcmVzcy1wbHVnaW4tem9vbWluZycsXHJcbiAgICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogJy50aGVtZS12ZG9pbmctY29udGVudCBpbWc6bm90KC5uby16b29tKScsXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgYmdDb2xvcjogJ3JnYmEoMCwwLDAsMC42KScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgXSxcclxuICBleHRyYVdhdGNoRmlsZXM6IFsnLnZ1ZXByZXNzL2NvbmZpZy50cyddLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBO0FBRUEsSUFBTyxpQkFBUSx5QkFBeUI7QUFBQSxFQUN0QyxTQUFTO0FBQUEsSUFDUCxLQUFLO0FBQUEsTUFDSCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUE7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
