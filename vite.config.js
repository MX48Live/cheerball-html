import { defineConfig } from 'vite'
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        article: './article.html',
        betNewsCategory: './bet-news-category.html',
        betNews: './bet-news.html',
        guru: './guru-prediction.html',
        hilightVideo: './hilight-video.html',
        hilightVideoCategory: './hilight-video-category.html',
        hilightVideoArticle: './hilight-video-article.html',
        index: './index.html',
        matchAnalyze: './matches-analyze.html',
        matchResult: './matches-result.html',
        matchResultDetail: './matches-result-detail.html',
        scoreBoard: './score-board.html'
      }
    }
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
    }),
  ],
})
