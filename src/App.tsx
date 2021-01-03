import React, { FunctionComponent } from 'react';
import PokemonList from './pages/pokemon-list';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import PokemonDetail from './pages/pokemon-detail';
import PageNotFund from './pages/page_not_found';
import PokemonEdit from './pages/pokemon-edit';

const App: FunctionComponent = () => {
     
     return (
         <Router>
              <div>
                    { /*La barre de navigation commun a toutes les pages*/ }
                    <nav>
                         <div className="nav-wrapper teal">
                              <Link to="/" className="brand-logo center">Pokédex</Link>
                         </div>
                    </nav>
                    { /*Le système de gestion des routes de notre application*/ }
                    <Switch>
                         <Route exact path="/" component={ PokemonList }/>
                         <Route exact path="/pokemons" component={ PokemonList }/>
                         <Route exact path="/pokemons/edit/:id" component={ PokemonEdit }/>
                         <Route exact path="/pokemon/:id" component={ PokemonDetail }/>
                         <Route component={ PageNotFund }/>
                    </Switch>
              </div>
         </Router>
     )
};

export default App;