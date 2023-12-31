import { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';

import Auth from '../../utils/Auth'
import LineIcon from '../../asset/img/icon-line.svg'
import './Sidebar.css'
import LineModal from '../Modal/LineModal'

const topMenu = [
  {
    name: '企業プロフィール',
    path: 'profile'
  },
  {
    name: 'スタッフ管理',
    path: 'member'
  },
  {
    name: '店舗一覧',
    path: 'stores'
  },
  {
    name: '店舗一覧',
    path: 'recruitments'
  },
]

const mainMenu = [
  {
    name: '特徴管理',
    path: 'feature/list',
    icon: <FactCheckOutlinedIcon />
    // icon: <Icon fontSize="small">dashboard</Icon>
  },
  {
    name: '応募者一覧',
    path: 'entriesList',
    icon: <PermContactCalendarOutlinedIcon />
  },
  {
    name: 'スカウト機能（β版）',
    path: 'scoutsList',
    icon: <PeopleOutlineOutlinedIcon />
  },
  {
    name: 'プラン情報',
    path: 'plan',
    icon: <ContactsOutlinedIcon />,
    subMenu: [
      {
        name: '料金プラン',
        path: 'planList'
      },
      {
        name: '現在ご利用中のプラン',
        path: 'currentPlan'
      },
    ]
  },
  {
    name: '請求情報',
    path: 'payment',
    icon: <CreditCardOutlinedIcon />,
    subMenu: [
      {
        name: '会社・請求先情報',
        path: 'billingInfo'
      },
      {
        name: 'お支払い方法',
        path: 'method'
      },
      {
        name: '請求・入金一覧',
        path: 'statement'
      },
      {
        name: '紹介手数料返金口座',
        path: 'bankInfo'
      },
    ]
  },
  {
    name: 'マニュアル・規約',
    path: 'manual',
    icon: <MenuBookOutlinedIcon />
  },
  {
    name: '公式ヘルプ・使い方の案内',
    path: 'https://gramn.notion.site/WORKCANVAS-2d319d5bd60d4f0f8b48784ca30d0b0c',
    icon: <HelpOutlineOutlinedIcon />
  },
]

const TopMenu = ({ menu }) => (
  <List className={`py-0 pb-10 w-100 top__menu ${menu ? '' : 'ml-3'}`}>
    <div className='dropdown__profile'>
      {topMenu.map((tMenu) => (
        <ListItem key={tMenu.path} disablePadding>
          <ListItemButton className={`py-0 ${menu} ? 'pl-20' : 'pl-30'`}>
            <ListItemText className='my-0 py-0.5'>
              <Link to={'/enterprise/' + tMenu.path} className="top__menu__text">{tMenu.name}</Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </div>
  </List>
)

const SubMenu = ({ subMenu, preLink, menu }) => {
  return (
    <List className='py-0 pb-10'>
      {subMenu.map((sMenu) => (
        <ListItem key={sMenu.path} className={menu && 'py-0'} >
          <ListItemButton className='pl-30 py-0'>
            <ListItemText className='my-0 py-0.5 '>
              <Link to={preLink + '?type=' + sMenu.path} className='top__menu__text w-100 ' style={{ display: 'block' }}>{sMenu.name}</Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

const MainMenu = ({ menu }) => {
  const logout = () => {
    Auth.logout();
    window.location.href = '/enterprise/login';
  }
  return (
    <List className={`full-width main__menu ${menu}?'':'py-15'`}>
      {mainMenu.map((mMenu) => (
        <ListItem key={mMenu.path} disablePadding>
          {mMenu.path.includes('http') ?
            <a href={mMenu.path} className="top__menu__text" target="_blank">
              <ListItemButton className={`black__text ${menu && 'p-0'}`}>
                <ListItemIcon className='text-default icon'>
                  {mMenu.icon}
                </ListItemIcon>
                <ListItemText className='my-0 py-0.5 main__menu__text'>
                  {mMenu.name}
                </ListItemText>
              </ListItemButton>
            </a> :
            <Link to={'/enterprise/' + mMenu.path} >
              <ListItemButton className={`black__text ${menu && 'p-0'}`}>
                <ListItemIcon className='black__text icon'>
                  {mMenu.icon}
                </ListItemIcon>
                <ListItemText className='my-0 py-0.5 main__menu__text'>
                  {mMenu.name}
                </ListItemText>
              </ListItemButton>
              {mMenu.subMenu && <SubMenu subMenu={mMenu.subMenu} preLink={'/enterprise/' + mMenu.path} menu={menu ? menu : false} />}
            </Link>
          }
        </ListItem>
      ))}
      {menu &&
        <ListItem disablePadding>
          <div onClick={logout} className="top__menu__text" >
            <ListItemButton className='black__text p-0'>
              <ListItemIcon className='text-default icon'>
                <LogoutOutlinedIcon />
              </ListItemIcon>
              <ListItemText className='my-0 py-0.5 main__menu__text'>
                ログアウト
              </ListItemText>
            </ListItemButton>
          </div>
        </ListItem>
      }
    </List>
  )
}

const LineMenu = (props) => (
  <Box className="line__container">
    <div className='d-flex align-items-start'>
      <h6>
        紹介担当者からの連絡を、 <br />LINEで迅速に受け取る
      </h6>
      <img src={LineIcon} alt='line-icon' width={18} height={18} />
    </div>
    <p>
      LINE友達追加をすれば、求職者様から質問や応募があった際、
      紹介担当者から情報共有やご相談を、LINEにて迅速にお送りさせていただきます。
    </p>
    <button
      type='button'
      className='line__button d-flex align-items-center justify-content-center'
      onClick={() => props.showModal(true)}
    >
      詳しくはこちら</button>
  </Box>
)

const Sidebar = ({ menu }) => {
  const [alertOpen, setAlertOpen] = useState(false);
  return (
    <Box
      sx={{ zIndex: 100 }}
      role="presentation"
      className={menu ? 'menubar' : 'sidebar'}
    >
      <h6 className={menu ? 'brand' : 'px-20 pt-20 pb-10 mb-0'} style={{ fontSize: 14 }}>{Auth.getCorporateName()}</h6>
      <TopMenu menu={menu ? menu : false} />
      {!menu && <Divider className='border-gray pt-10' />}
      <MainMenu menu={menu ? menu : false} />
      {!menu && <LineMenu showModal={(open) => setAlertOpen(open)} />}
      <List>
        <ListItem disablePadding>
          {/* <Control /> */}
        </ListItem>
      </List>
      <List>
        <ListItem>
          <div className="search__drawer">
            {/* <Form /> */}
          </div>
        </ListItem>
      </List>
      <LineModal open={alertOpen} handleChange={(open) => setAlertOpen(open)} />
    </Box>
  );
}

export default Sidebar;