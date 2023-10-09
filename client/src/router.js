import React from 'react';
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import Auth from './utils/Auth';

import HomeLayout from './layout/HomeLayout.js';
import FeatureLayout from './layout/FeatureLayout.js';
import AuthLayout from './layout/AuthLayout.js';

import Home from './routes/Enterprise/Home.jsx';
import SelectEnterprise from './routes/Enterprise/SelectEnterprise.jsx';
import Profile from './routes/Profile/Profile.jsx';
import Member from './routes/Member/Member.jsx';
import Store from './routes/Store/Store.jsx';
import Recruitment from './routes/Recruitment/Recruitment.jsx';
import FeatureList from './routes/Feature/FeatureList.jsx';
import EntriesList from './routes/Entry/EntriesList.jsx';
import ScoutsList from './routes/Scout/ScoutsList.jsx';
import Plan from './routes/Plan/Plan.jsx';
import Payment from './routes/Payment/Payment.jsx';
import Manual from './routes/Manual/Manual';
import Term from './routes/Term/Term';
import PaidTerm from './routes/Term/PaidTerm';
import CampaignPaidTerm from './routes/Term/CampaignPaidTerm';
import Notification from './routes/Notification/Notification';
import Features from './routes/Feature/Features';

import Login from './routes/Auth/Login.jsx';
import Register from './routes/Auth/Register';
import Step from './routes/Auth/Step';
import MailSended from './routes/Auth/MailSended';
import MailVerify from './routes/Auth/MailVerify';
import InviteLogin from './routes/Auth/Invite/InviteLogin';
import InviteRegister from './routes/Auth/Invite/InviteRegister';
import Invite from './routes/Auth/Invite/Invite';
import InviteConfirm from './routes/Auth/Invite/InviteConfirm';

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

const StepRouter = ({ component, ...options }) => {
  const finalComponent =
    localStorage.getItem('user_id') == undefined || localStorage.getItem('company_id') == undefined ? (
      <Redirect to="/enterprise/login" />
    ) : (
      <Route {...options} component={component} />
    );

  return finalComponent;
}

// const FeatureRoutes = [
//   {
//     path: '/enterprise/basicSurveyEnquete/:id',
//     exact: true,
//     layout: FeatureLayout,
//     component: Features
//   },
//   {
//     path: '/enterprise/basicSurveyEnquete/2',
//     exact: true,
//     layout: FeatureLayout,
//     component: Vacation
//   },
//   {
//     path: '/enterprise/basicSurveyEnquete/3',
//     exact: true,
//     layout: FeatureLayout,
//     component: Workstyle
//   },
//   {
//     path: '/enterprise/basicSurveyEnquete/4',
//     exact: true,
//     layout: FeatureLayout,
//     component: Equipment
//   },
//   {
//     path: '/enterprise/basicSurveyEnquete/5',
//     exact: true,
//     layout: FeatureLayout,
//     component: SelectionMethod
//   },
//   {
//     path: '/enterprise/basicSurveyEnquete/6',
//     exact: true,
//     layout: FeatureLayout,
//     component: StylistEmploymentRequirement
//   },
//   {
//     path: '/enterprise/basicSurveyEnquete/7',
//     exact: true,
//     layout: FeatureLayout,
//     component: StylistOutsourcingTreatment
//   },
//   {
//     path: '/enterprise/basicSurveyEnquete/8',
//     exact: true,
//     layout: FeatureLayout,
//     component: StylistFulltimeTreatment
//   },
//   {
//     path: '/enterprise/basicSurveyEnquete/9',
//     exact: true,
//     layout: FeatureLayout,
//     component: StylistAssistantTreatment
//   },
//   {
//     path: '/enterprise/basicSurveyEnquete/10',
//     exact: true,
//     layout: FeatureLayout,
//     component: StylistSpecialService
//   },
//   {
//     path: '/enterprise/basicSurveyEnquete/11',
//     exact: true,
//     layout: FeatureLayout,
//     component: StylistExtraCharacter
//   },
//   {
//     path: '/enterprise/basicSurveyEnquete/12',
//     exact: true,
//     layout: FeatureLayout,
//     component: StylistArbeitTreatment
//   },
//   {
//     path: '/enterprise/basicSurveyEnquete/13',
//     exact: true,
//     layout: FeatureLayout,
//     component: StylistEducation
//   },
//   {
//     path: '/enterprise/basicSurveyEnquete/14',
//     exact: true,
//     layout: FeatureLayout,
//     component: IlistEmploymentRequirement
//   },
//   {
//     path: '/enterprise/basicSurveyEnquete/15',
//     exact: true,
//     layout: FeatureLayout,
//     component: IlistExperiencedTreatment
//   },
//   {
//     path: '/enterprise/basicSurveyEnquete/16',
//     exact: true,
//     layout: FeatureLayout,
//     component: IlistUnexperiencedTreatment
//   },
//   {
//     path: '/enterprise/basicSurveyEnquete/17',
//     exact: true,
//     layout: FeatureLayout,
//     component: IlistOutsourcingTreatment
//   },
//   {
//     path: '/enterprise/basicSurveyEnquete/18',
//     exact: true,
//     layout: FeatureLayout,
//     component: IlistArbeitTreatment
//   },
//   {
//     path: '/enterprise/basicSurveyEnquete/19',
//     exact: true,
//     layout: FeatureLayout,
//     component: IlistEducation
//   },
//   {
//     path: '/enterprise/basicSurveyEnquete/20',
//     exact: true,
//     layout: FeatureLayout,
//     component: IlistExtraCharacter
//   },
//   {
//     path: '/enterprise/basicSurveyEnquete/21',
//     exact: true,
//     layout: FeatureLayout,
//     component: IlistSpecialService
//   },
// ];

const HomeRoutes = [
  {
    path: '/enterprise',
    exact: true,
    layout: HomeLayout,
    component: Home
  },
  {
    path: '/select',
    exact: true,
    layout: AuthLayout,
    component: SelectEnterprise
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
    layout: FeatureLayout,
    component: FeatureList
  },
  {
    path: '/enterprise/basicSurveyEnquete/:id',
    exact: true,
    layout: FeatureLayout,
    component: Features
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
  {
    path: '/enterprise/notifications',
    exact: true,
    layout: HomeLayout,
    component: Notification
  },
];

const AuthRoutes = [
  {
    path: '/enterprise/login',
    exact: true,
    layout: AuthLayout,
    component: Login,
    register: false
  },
  {
    path: '/enterprise/register',
    exact: true,
    layout: AuthLayout,
    component: Register,
    register: true
  },
  {
    path: '/enterprise/mailsended',
    exact: true,
    layout: AuthLayout,
    component: MailSended
  },
  {
    path: '/enterprise/verify-email/:token',
    exact: true,
    layout: AuthLayout,
    component: MailVerify
  },
]

const InviteRoutes = [
  {
    path: '/invite/register',
    exact: true,
    component: InviteRegister
  },
  {
    path: '/invite/login',
    exact: true,
    component: InviteLogin
  },
  {
    path: '/invite/confirm',
    exact: true,
    component: InviteConfirm
  },
  {
    path: '/invite/:inviteId',
    exact: true,
    component: Invite
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
        <StepRouter
          path={'/enterprise/step'}
          exact={true}
          component={props => {
            return (
              <AuthLayout {...props}>
                <Step {...props} />
              </AuthLayout>
            );
          }}
        />
        {InviteRoutes.map((inviteRoute, index) => {
          return (
            <Route
              key={index}
              path={inviteRoute.path}
              exact={inviteRoute.exact}
              component={inviteRoute.component}
            />
          );
        })}
      </Switch>
    </Router>
  )
}

export default Routes;
