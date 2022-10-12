import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { device } from 'vqp-common'
import { HeaderBox } from './components/header'
import { NavBar } from './components/navigation'
import NotificationCenter from './components/common/NotificationCenter'
import { useDispatch } from 'react-redux'
import { fetchStoreInformation } from './redux/actions/store';
import ReactLoading from "react-loading";

import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import ClientsPage from './pages/ClientsPage'
import OrdersPage from './pages/OrdersPage'
import ProductsPage from './pages/ProductsPage'
import SettingsPage from './pages/Settings/Settings'
import CouponsCreatePage from './pages/Cupons/Create/CouponsCreate'
import CouponsSearchPage from './pages/Cupons/Search/CouponsSearch'

import { THEME } from './config'
import isLoggedIn from './components/login/utilities/isLoggedIn'
import {GetQueryString} from './utils/QueryString'
import { setAccessToken, startApp } from './redux/actions/auth'

const Wrapper = styled.div`
  background: #fff;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center
`

const MainContainer = styled.div`
  display: flex
  flex-direction: row
`

const Content = styled.div`
  position: absolute;
  top: ${props => props.theme.dimensions.headerHeightDesktop}px;
  left: ${props => props.theme.dimensions.navBarWidth}px;
  width: calc(100% - ${props => props.theme.dimensions.navBarWidth}px);
  overflow-y: auto;
  overflow-x: hidden;

  @media ${device.mobile} {
    width: 100%;
    left: 0;
  }
`

const MainApp = ({storeInfo}) => {
    const dispatch = useDispatch()
    const [error, setError] = useState('')
    const localAccess = localStorage.getItem('auth') ? localStorage.getItem('auth') : null
    const logout = localStorage.getItem('logout') ? localStorage.getItem('logout') : null
    const [loading, setLoading] = useState(true)

    useEffect(() => {      
      const qs = GetQueryString()

      const {token = ''} = qs

      async function postAccessToken(accessToken) {
        setError()
        const response = await dispatch(setAccessToken(accessToken));

        if (response.success) {
          const infoResponse = await dispatch(fetchStoreInformation())  
          if (infoResponse.success) {
            setLoading(false)
          }else{
            setLoading(false)
            setError(infoResponse.error)
          }
        }
      }

      if(logout){
        dispatch(startApp(false))
      }

      if(!localAccess && !logout){
        if (token) {
          postAccessToken(token)
        }else{
          setLoading(false)
        }  
      }else{
        setLoading(false)
      }  
        
    }, [logout, localAccess, dispatch])

    const combineThemes = () => {
        const newTheme = JSON.parse(JSON.stringify(THEME))
        if (!storeInfo) return newTheme
        
        if (storeInfo.primaryColor) {
          newTheme.colors.primary = storeInfo.primaryColor
        }
        if (storeInfo.secondaryColor) {
          newTheme.colors.secondary = storeInfo.secondaryColor
        }
        if (storeInfo.storeLogo) {
          newTheme.logoImage = storeInfo.storeLogo
        }
        if (storeInfo.storeName) {
          newTheme.storeName = storeInfo.storeName
        }
        return newTheme
    }
    if(loading){
      return(
        <Wrapper>
          <ReactLoading type="spin" color="#173A6D" height={'3%'} width={'3%'} />
        </Wrapper>
      )
    }else if (!isLoggedIn()) {
        return (
              <ThemeProvider theme={THEME}>
                  <NotificationCenter />
                  <div className="App">
                    { error }
                    <LoginPage />
                  </div>
              </ThemeProvider>
          )
    } else {
        return (
            <ThemeProvider theme={combineThemes(storeInfo)}>
                <Helmet>
                  <title>{process.env.REACT_APP_TITLE} - {storeInfo.storeName}</title>    
                </Helmet>
                <NotificationCenter />
                <Router>
                    <div className="App">
                        <HeaderBox />
                        <MainContainer>
                            <NavBar />
                            <Content>    
                            <Switch>              
                                <Route path="/products" component={ProductsPage} />
                                <Route path="/orders" component={OrdersPage} />       
                                <Route path="/clients" component={ClientsPage} />
                                <Route path="/dashboard" component={DashboardPage} />
                                <Route path="/settings" component={SettingsPage} />
                                <Route path="/cupom-consulta" component={CouponsSearchPage} />
                                <Route path="/cupom-cadastro" component={CouponsCreatePage} />
                                <Route path="/" component={DashboardPage} />
                            </Switch>
                            </Content>
                        </MainContainer>
                    </div>
                </Router>
            </ThemeProvider>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    storeInfo: state && state.storeInfo
  }
}

export default connect(mapStateToProps, {})(MainApp)
