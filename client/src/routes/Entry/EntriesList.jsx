import {  useEffect, useState } from "react";

import TabContainer from '../../components/Tab/TabContainer';
import InfoAlert from '../../components/Alert/InfoAlert'
import './Entry.css';

const initalCategories=[
  {
    id:1,
    name:'すべて'
  },
  {
    id:2,
    name:'日程調整'
  },
  {
    id:3,
    name:'見学面談・面接',
    manual:{
      name:'マニュアルを確認する',
      link:'https://drive.google.com/file/d/1y5gmg7y5ze4XVQFgI84ONAkde7aq7iJs/view'
    }
  },
  {
    id:4,
    name:'内定'
  },
  {
    id:5,
    name:'入社',
    manual:{
      name:'採用後、定着マニュアル',
      link:'https://bit.ly/3rmUZbg'
    }
  },
  {
    id:6,
    name:'辞退・落選'
  },
  {
    id:7,
    name:'退社'
  },
]

const EntriesList = () => {
  const [categories, setCategories]=useState(initalCategories);
  const [data, setData]=useState([]);
  const [categoryId, setCategoryId]=useState([]);
  const categoryClick=(id)=>{
    // console.log(id);
    setCategoryId(id);
  }
  return ( 
    <div className="enterprise__container">
      <div className="enterprise__box ">
        <h1 className='title__lv1 '>応募者一覧</h1>
        <InfoAlert 
          text='早めに日程調整をしていただければ、求職者様の意欲も高まり、入社の可能性が上がります。'
          className='mb-10'
          />
        <TabContainer categories={categories} categoryClick={categoryClick}/>
        {categories.map((category)=>(
          <div className="d-flex justify-content-center" key={category.id}>
          {category.manual&&category.id == categoryId&&
          <a className="modal__button text__default" href={category.manual.link} target="_blank">
            <div>{category.manual.name}</div>
          </a>}
          </div>
        ))}
        <div className="enterprise__thead w-100 fs-12">
          <div className="entries__th">
            更新日
          </div>
          <div className="entries__th">
            応募者
          </div>
          <div className="entries__th">
            希望条件
          </div>
          <div className="entries__th">
            応募店舗
          </div>
          <div className="entries__th">
            ステータス
          </div>
        </div>
        {data.length == 0 &&
          <div className='guide text-center mt-30'>
            該当の求職者はいません
          </div>
        }
      </div>
    </div>
  );
}
 
export default EntriesList;