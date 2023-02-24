import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cardapio from './pages/Cardapio'
import Promocoes from './pages/Promocoes';
import AffiliatePage from './pages/AffiliatePage'
import WorkWithUsPage from './pages/WorkWithUsPage';
import AboutPage from './pages/AboutPage';
import PressAccessoriesPage from './pages/PressAccessoriesPage';
import EvaluationPage from './pages/EvaluationPage';
import ContactUsPage from './pages/ContactUsPage';
import Home from './pages/Home/Home';
import Members from './pages/Members';
import Member from './pages/Members/Member';

const Routes = (props) => {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} {...props} />
      <Route exact path='/cardapio' render={(props) => <Cardapio {...props} name='Cardapio' />} name='Cardapio' />
      <Route exact path='/membros' render={(props) => <Members {...props} name='Membros' />} name='Membros' />
      <Route exact path='/membro/:id' render={(props) => <Member {...props} name='Membro' />} name='Membro' />

      {/* <Route path="/cardapio" component={Cardapio} {...props} /> */}
      <Route path="/promocoes" component={Promocoes} {...props} />
      <Route path="/sobre-nos" component={AboutPage} {...props} />
      <Route path="/imprensa" component={PressAccessoriesPage} {...props} />
      <Route path="/trabalhe-conosco" component={WorkWithUsPage} {...props} />
      <Route path="/afiliado" component={AffiliatePage} {...props} />
      <Route exact path={'/pesquisa' || '/pesquisa/'} render={(props) => <EvaluationPage {...props} name='EvaluationPage' />} name='EvaluationPage' />
      {/* <Route path="/pesquisa/" component={EvaluationPage} {...props} /> */}
      <Route exact path='/fale-conosco' render={(props) => <ContactUsPage {...props} name='ContactUs' />} name='ContactUs' />
    </Switch>
  </BrowserRouter>
}

export default Routes
