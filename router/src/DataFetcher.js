import App from './App';
import withFetcher from './components/withFetcher';
const DataFetcher = withFetcher({
  url: '/articles.json',
  collName: 'articles'
})(App);
export default DataFetcher;
