import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import SavedGames from './pages/SavedGames';
import NotFound from './pages/NotFound';
import AppNavBar from './components/AppNavbar';
import Xbox from './pages/Xbox';
import Playstation from './pages/Playstation';
import Switch from './pages/Switch';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
          <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <AppNavBar />
            <Routes>
              <Route 
                path="/" 
                element={<Home />}
              />
              <Route 
                path="/xbox" 
                element={<Xbox />}
              />
              <Route 
                path="/playstation" 
                element={<Playstation />}
              />
              <Route 
                path="/switch" 
                element={<Switch />}
              />
              <Route 
                path="/saved" 
                element={<SavedGames />}
              />
              <Route 
                path="*"
                element={<NotFound />}
              />
            </Routes>
          </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

