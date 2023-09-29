import { Link } from 'react-router-dom';
import { TaskOutlined, StickyNote2Outlined } from '@mui/icons-material';

import './FeatureCard.css'

const FeatureCard = ({ props }) => {
  return (
    <div className={`feature__card cursor-pointer bl-pink ${props.status && 'bl-gray'}`}>
      <Link to={'/enterprise/basicSurveyEnquete/' + props.id}>
        <dl className='d-flex align-items-center mb-0'>
          <dt>
            <div>
              {props.status ?
                <TaskOutlined sx={{ color: '#ff6c8a' }} /> :
                <StickyNote2Outlined sx={{ color: '#ff6c8a' }} />
              }
            </div>
          </dt>
          <dd className='text-default mb-0 ml-3'>
            <p className='font-800 fs-14 mb-0'>{props.title}</p>
            <p className=' mb-0'>
              {props.status ?
                <span className='fc-pink font-800 fs-10 mb-0 fc-gray'>回答完了</span> :
                <span className='fc-pink font-800 fs-10 mb-0'>未回答</span>
              }
            </p>
          </dd>
        </dl>
      </Link>
    </div>
  );
}

export default FeatureCard;