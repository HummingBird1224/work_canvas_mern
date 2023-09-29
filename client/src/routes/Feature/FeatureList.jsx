import {  useEffect, useState } from "react";

import FeatureCard from '../../components/Card/FeatureCard/FeatureCard';
import InfoAlert from '../../components/Alert/InfoAlert'
import ActionAlert from '../../components/Alert/ActionAlert'
import './Feature.css';

const cardInfo=[
  {
    title: '交通費・社会保険',
    status: false,
    id: 1,    
  },
  {
    title: '休暇の取得',
    status: false,
    id: 2, 
  },
  {
    title: '勤務スタイル・選考の補足',
    status: false,
    id: 3, 
  },
  {
    title: '制度・設備',
    status: false,
    id: 4, 
  },
  {
    title: '選考方法',
    status: true,
    id: 5, 
  },
  {
    title: '【美容師】採用の要件',
    status: false,
    id: 6, 
  },
  {
    title: '【美容師】業務委託スタイリストの待遇',
    status: false,
    id: 7, 
  },
  {
    title: '【美容師】正社員スタイリストの待遇',
    status: false,
    id: 8, 
  },
  {
    title: '【美容師】正社員アシスタントの待遇',
    status: false,
    id: 9, 
  },
  {
    title: '【美容師】メニュー及び専門業務について',
    status: false,
    id: 10, 
  },
  {
    title: '【美容師】その他の特徴',
    status: false,
    id: 11, 
  },
  {
    title: '【美容師】アルバイト/パートの待遇',
    status: false,
    id: 12, 
  },
  {
    title: '【美容師】教育・勤務例',
    status: true,
    id: 13, 
  },
  {
    title: '【アイリスト】採用の要件',
    status: true,
    id: 14, 
  },
  {
    title: '【アイリスト】正社員(経験者)の待遇',
    status: true,
    id: 15, 
  },
  {
    title: '【アイリスト】正社員(未経験者)の待遇',
    status: true,
    id: 16, 
  },
  {
    title: '【アイリスト】業務委託の待遇',
    status: true,
    id: 17, 
  },
  {
    title: '【アイリスト】アルバイト/パートの待遇',
    status: true,
    id: 18, 
  },
  {
    title: '【アイリスト】教育・勤務例',
    status: true,
    id: 19, 
  },
  {
    title: '【アイリスト】その他の特徴',
    status: true,
    id: 20, 
  },
  {
    title: '【アイリスト】メニュー及び専門業務',
    status: true,
    id: 21, 
  }
];

const FeatureList = () => {

  return (
    <div className="enterprise__container">
      <div className="enterprise__box ">
        <h1 className='title__lv1 '>特徴管理</h1>
        <InfoAlert 
          text='サロンの特徴をご回答いただくことで紹介の精度が高くなります。'
          className='mb-10'
          />
        <ActionAlert 
          text='確認が必要な質問があります。'
          className='mb-10'
          link={cardInfo[0].id}
          />
        <div className="d-flex flex-wrap justify-content-between">
        {cardInfo.map((cInfo)=>(
          <FeatureCard key={cInfo.id} props={cInfo}/>
        ))}
        </div>
      </div>
    </div> 
  );
}
 
export default FeatureList;