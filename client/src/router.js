import React from 'react';
import {
  Redirect, Outlet
} from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import Auth from './utils/Auth';

import HomeLayout from './layout/HomeLayout.js';
import AuthLayout from './layout/AuthLayout.js';
// import AdminLayout from './layout/AdminLayout.js';

import Home from './routes/Enterprise/Home.jsx';
import Profile from './routes/Profile/Profile.jsx';
import Member from './routes/Member/Member.jsx';
import Store from './routes/Store/Store.jsx';
import Recruitment from './routes/Recruitment/Recruitment.jsx';
import FeatureList from './routes/Feature/FeatureList.jsx';
import EntriesList from './routes/Entry/EntriesList.jsx';
import ScoutsList from './routes/Scout/ScoutsList.jsx';
import Plan from './routes/Plan/Plan.jsx';
import Payment from './routes/Payment/Payment.jsx';
import Manual from './routes/Manual/Manual.jsx';
import Term from './routes/Term/Term.jsx';
import PaidTerm from './routes/Term/PaidTerm.jsx';
import CampaignPaidTerm from './routes/Term/CampaignPaidTerm.jsx';

import Login from './routes/Auth/Login.jsx';

// import Point from './components/Account/Point/Point.js';
// import Purchase from './components/Account/Point/Purchase.js';
// import Address from './components/Account/Address/Address.js';
// import AddressEdit from './components/Account/Address/Edit.js';
// import ManageAccount from './components/Account/ManageAccount/ManageAccount';
// import History from './components/Account/History/History';
// import GiftList from './components/Account/Gift/List';
// import LotteryResult from './components/Result/Lottery/Result';
// import Result from './components/Result/Result';

// import MyAccount from './components/Account/MyAccount/MyAccount';
// import Shop from './components/Shop/Shop';
// import CategoryView from './routes/CategoryView';
// // import SearchView from './routes/Search';
// import CartItemsProvider from './Context/CartItemsProvider';
// import Login from './components/Authentication/Login/Login';
// import Register from './components/Authentication/Register/Register';
// import Wishlist from './components/Wishlist';
// import WishItemsProvider from './Context/WishItemsProvider';
// import DrawerNav from './components/Nav/DrawerNav/DrawerNav';
// import Checkout from './components/Checkout/Checkout';
// import SearchProvider from './Context/SearchProvider';

// import AccountManaging from './components/Admin/Account/AccountManaging';
// import GachaCategory from './components/Admin/GachaCategory/GachaCategory';
// import GachaCategoryEdit from './components/Admin/GachaCategory/Edit';
// import Gacha from './components/Admin/Gacha/Gacha';
// import GachaEdit from './components/Admin/Gacha/Edit';
// import GachaHistory from './components/Admin/Gacha/GachaHistory.js';
// import OrderList from './components/Admin/Gift/Order.js';

// import Auth from '../src/modules/Auth';

// const AdminRouter = ({ component, ...options }) => {
//   const finalComponent =
//     Auth.getUserDetails() !== undefined &&
//       Auth.getUserDetails() !== null &&
//       Auth.getUserRole() == 'admin' ? (
//       <Route {...options} component={component} />
//     ) : (
//       <Redirect to="/" />
//     );

//   return finalComponent;
// }

const HomeRouter = ({ component, ...options }) => {
  const finalComponent =
    Auth.getUserDetails() !== undefined && Auth.getUserDetails() !== null ? (
      <Route {...options} component={component} />
    ) : (
      <Redirect to="/enterprise/login" />
    );

  return finalComponent;
}

const AuthRouter = ({ component, ...options }) => {
  const finalComponent =
    Auth.getUserDetails() !== undefined && Auth.getUserDetails() !== null ? (
      <Redirect to="/enterprise" />
    ) : (
      <Route {...options} component={component} />
    );

  return finalComponent;
}

const HomeRoutes = [
  {
    path: '/enterprise',
    exact: true,
    layout: HomeLayout,
    component: Home
  },
  {
    path: '/enterprise/profile',
    exact: true,
    layout: HomeLayout,
    component: Profile
  },
  {
    path: '/enterprise/member',
    exact: true,
    layout: HomeLayout,
    component: Member
  },
  {
    path: '/enterprise/stores',
    exact: true,
    layout: HomeLayout,
    component: Store
  },
  {
    path: '/enterprise/recruitments',
    exact: true,
    layout: HomeLayout,
    component: Recruitment
  },
  {
    path: '/enterprise/feature/list',
    exact: true,
    layout: HomeLayout,
    component: FeatureList
  },
  {
    path: '/enterprise/entriesList',
    exact: true,
    layout: HomeLayout,
    component: EntriesList
  },
  {
    path: '/enterprise/scoutsList',
    exact: true,
    layout: HomeLayout,
    component: ScoutsList
  },
  {
    path: '/enterprise/plan',
    exact: true,
    layout: HomeLayout,
    component: Plan
  },
  {
    path: '/enterprise/payment',
    exact: true,
    layout: HomeLayout,
    component: Payment
  },
  {
    path: '/enterprise/manual',
    exact: true,
    layout: HomeLayout,
    component: Manual
  },
  {
    path: '/enterprise/terms',
    exact: true,
    layout: HomeLayout,
    component: Term
  },
  {
    path: '/enterprise/paid_terms',
    exact: true,
    layout: HomeLayout,
    component: PaidTerm
  },
  {
    path: '/enterprise/campaign_paid_terms',
    exact: true,
    layout: HomeLayout,
    component: CampaignPaidTerm
  },
];

const AuthRoutes = [
  {
    path: '/enterprise/login',
    exact: true,
    layout: AuthLayout,
    component: Login
  },
]

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/enterprise' />
        </Route>
        {AuthRoutes.map((authRoute, index) => {
          return (
            <AuthRouter
              key={index}
              path={authRoute.path}
              exact={authRoute.exact}
              component={props => {
                return (
                  <authRoute.layout {...props}>
                    <authRoute.component {...props} />
                  </authRoute.layout>
                );
              }}
            />
          );
        })}
        {HomeRoutes.map((homeRoute, index) => {
          return (
            <HomeRouter
              key={index}
              path={homeRoute.path}
              exact={homeRoute.exact}
              component={props => {
                return (
                  <homeRoute.layout {...props}>
                    <homeRoute.component {...props} />
                  </homeRoute.layout>
                );
              }}
            />
          );
        })}
        {/* {PrivateRoutes.map((privateRoute, index) => {
          return (
            <PrivateRouter
              key={index}
              path={privateRoute.path}
              exact={privateRoute.exact}
              component={props => {
                return (
                  <privateRoute.layout {...props}>
                    <privateRoute.component {...props} />
                  </privateRoute.layout>
                );
              }}
            />
          );
        })}
        {AdminRoutes.map((adminRoute, index) => {
          return (
            <AdminRouter
              key={index}
              path={adminRoute.path}
              exact={adminRoute.exact}
              component={props => {
                return (
                  <adminRoute.layout {...props}>
                    <adminRoute.component {...props} />
                  </adminRoute.layout>
                );
              }}
            />
          );
        })} */}
      </Switch>
      {/* <Footer /> */}
    </Router>
  )
}

export default Routes;
