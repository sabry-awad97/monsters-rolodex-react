import './App.css';

import { useState } from 'react';

import CardList from './components/card-list/CardList';
import Fetch from './components/fetch/Fetch';
import SearchBox from './components/search-box/SearchBox';

import type { Monster } from './types/Monster';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [searchField, setSearchField] = useState('');

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder="Search Monsters"
        handleChange={e => setSearchField(e.target.value)}
      />
      <Fetch<Monster[]>
        url="https://jsonplaceholder.typicode.com/users"
        loadingFallback={<h1>loading...</h1>}
        onError={error => <h1>Something went wrong... {error.message}</h1>}
        onSuccess={monsters => (
          <CardList
            monsters={monsters.filter(m =>
              m.name.toLowerCase().includes(searchField.toLowerCase())
            )}
          />
        )}
      />
    </div>
  );
};

export default App;
