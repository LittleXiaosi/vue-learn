module.exports = {
    base: '/',
    dest: './docs/',
    title: 'vue-learn',
    markdown: {
        toc: {
            includeLevel: [2, 3, 4, 5],
        }
    },
    plugins: ['@vuepress/active-header-links']
};