module.exports = {
    base: '/vue-learn/',
    dest: './docs/',
    title: 'vue-learn',
    markdown: {
        toc: {
            includeLevel: [2, 3, 4, 5],
        },
        extendMarkdown: md => {
            // 使用更多的 markdown-it 插件!
            md.use(require('markdown-it-plantuml'))
        }
    },
    plugins: ['@vuepress/active-header-links'],
    themeConfig: {
        sidebar: [
            '/',
            'vue-reactive-in-vue',
            'vue-compile-render',
            'vue-mounting-process',
            'react-compare-vue'
        ],
        sidebarDepth: 3,
    }
};