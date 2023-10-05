import { useState } from "react";
import {Link} from 'react-router-dom';

import ManualCard from '../../components/Card/ManualCard/ManualCard';
import './Manual.css'

const cardInfo=[
  {
    image:'manual_image_1.jpg',
    title:'見学面談・面接マニュアル',
    link:'https://drive.google.com/file/d/1y5gmg7y5ze4XVQFgI84ONAkde7aq7iJs/view',
    id:1
  },
  {
    image:'manual_image_2.jpg',
    title:'採用後、定着マニュアル',
    link:'https://bit.ly/3rmUZbg',
    id:2
  },
]

const termCardInfo=[
  {
    id:1,
    title:'企業向け利用規約',
    link:'terms'
  },
  {
    id:2,
    title:'有料プラン（ご紹介プラン）利用規約',
    link:'paid_terms'
  },
  {
    id:3,
    title:'初期費用無料キャンペーン利用規約',
    link:'campaign_paid_terms'
  },
]

const Manual = () => {
  const [cards, setCards]=useState(cardInfo);
  const [termCards, setTermCards]=useState(termCardInfo);
  return ( 
    <div className="enterprise__container">
      <div className="enterprise__box ">
        <h1 className='title__lv1 '>マニュアル・規約</h1>
        <h2 className="modal__title smaller fw-700">マニュアル</h2>
        <ul className="d-flex w-100 p-0 mt-40 flex-wrap justify-content-between">
          {cards.map((card)=>(
            <ManualCard props={card} key={card.id} prelink='/enterprise/plan?type='/> 
          ))}
        </ul>
        <h2 className="modal__title smaller fw-700 mt-60">規約</h2>
        <ul className="d-flex w-100 p-0 mt-40 flex-wrap justify-content-between">
          {termCards.map((tCard)=>(
            <Link to={'/enterprise/'+tCard.link} className='termcard text-center bg-white' key={tCard.id}>
              {tCard.title}
            </Link> 
          ))}
        </ul>
      </div>
    </div>
  );
}
 
export default Manual;