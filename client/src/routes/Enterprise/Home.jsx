import {  useEffect, useState } from "react";
import {PermContactCalendarOutlined,
        PeopleOutlineOutlined,
        FaceOutlined,
        StoreMallDirectoryOutlined,
        FactCheckOutlined
      } from '@mui/icons-material';

import {getMainData} from '../../actions/action';
import Auth from '../../utils/Auth';
import EnterpriseCard from '../../components/Card/EnterpriseCard/EnterpriseCard';
import './Home.css';

const staticCardsInfo=[
  {
    name: '応募者一覧',
    path: 'entriesList',
    icon: <PermContactCalendarOutlined/>,
    strong:'応募者の情報や応募状況を確認',
    after:'できます。',
    small:'早めに日程調整をしていただければ、求職者様の意欲も高まり、入社の可能性が上がります。',
    info:[
      {
        name:'日程調整必要',
        number:0
      },
      {
        name:'面談予定',
        number:0
      },
      {
        name:'面談後結果入力待ち',
        number:0
      },
    ],
    link:'応募者確認',
    widthFit:true
  },
  {
    name: 'スカウト機能（β版）',
    path: 'scoutsList',
    icon: <PeopleOutlineOutlined/>,
    strong:'近隣の求職者を確認',
    after:'できます。',
    small:'早めにオファーすれば、求職者様の云々',
    info:[
      {
        name:'近隣の求職者',
        number:0
      },
      {
        name:'スカウト済（直近１週間）',
        number:0
      },
      {
        name:'見送り済（直近１週間）',
        number:0
      },
    ],
    link:'近隣の求職者を確認する',
    widthFit:true
  },
  {
    name: '特徴管理',
    path: 'feature',
    icon: <FactCheckOutlined/>,
    before:'採用状況基本情報以外に',
    strong:'サロンの特徴',
    medium:'をご記載いただくことで紹介精度が上がります。',
    after:'をご記載いただくことで紹介精度が上がります。',
    // info:[
    //   {
    //     name:'店舗登録済',
    //     number:0
    //   },
    // ],
    link:'特徴修正',
    widthFit:false
  }
]

const memberCardInfo={
  name: 'スタッフ管理',
  path: 'member',
  icon: <FaceOutlined/>,
  before:'所属している',
  strong:'スタッフの追加・削除・権限の変更',
  after:'などができます。',
  info:[
    {
      name:'スタッフ登録済',
      number:2
    },
  ],
  link:'スタッフの追加',
  widthFit:false
};

const storeCardInfo= {
  name: '店舗一覧',
  path: 'stores',
  icon: <StoreMallDirectoryOutlined/>,
  strong:'店舗の基本情報',
  after:'を確認できます。',
  info:[
    {
      name:'店舗登録済',
      number:0
    },
  ],
  link:'店舗確認',
  widthFit:false
};

const Home = () => {
  const [staticCards, setStaticCards]=useState(staticCardsInfo);
  const [memberCard, setMemberCard]=useState(memberCardInfo);
  const [storeCard, setStoreCard]=useState(storeCardInfo);
  const companyId=Auth.getCompanyId();
  useEffect(() => {
    async function getData(){
      companyId && await getMainData(companyId)
        .then(res=>{
          if(res.status == '200'){
            setMemberCard({
              ...memberCard, info:[
                {
                  name:'スタッフ登録済',
                  number:res.data.members
                },
              ]
            });
            setStoreCard({
              ...storeCard, info:[
                {
                  name:'店舗登録済',
                  number:res.data.stores
                },
              ]
            });
          }
        });
    }
    getData();
  }, [])

  return ( 
    <div className="enterprise__container">
      <div className="enterprise__box d-flex flex-wrap justify-content-between">
        <EnterpriseCard  props={staticCards[0]}/>
        <EnterpriseCard  props={staticCards[1]}/>
        <EnterpriseCard  props={memberCard}/>
        <EnterpriseCard  props={storeCard}/>
        <EnterpriseCard  props={staticCards[2]}/>
      </div>
    </div>
  );
}
 
export default Home;