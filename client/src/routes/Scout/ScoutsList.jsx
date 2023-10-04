import {  useEffect, useState } from "react";

import TabContainer from '../../components/Tab/TabContainer';
import './Scout.css';

const initalCategories=[
  {
    id:1,
    name:'すべて'
  },
  {
    id:2,
    name:'未対応の求職者'
  },
  {
    id:3,
    name:'スカウト済'
  },
  {
    id:4,
    name:'見送り'
  }
]

const ScoutsList = () => {
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
        <h1 className='title__lv1 '>スカウト機能（β版）</h1>
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
            求職者
          </div>
          <div className="entries__th">
            希望条件
          </div>
          <div className="entries__th">
            経験のある仕事・スキル
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
 
export default ScoutsList;