import { Link } from 'react-router-dom';

const Note = (content) => {

  return(
    <tr className={content.status}>
      <td className="notification_inner">
        <div>
          <Link to={content.dataLink} className="notification_link" data-id={content.id}>
            <figure className="notification_thumb avatar">
              <img src="https://cdn1.work-canvas.com/assets/images/default_profile.png?14" alt="" />
            </figure>
            <p className="notification_message">
              <div dangerouslySetInnerHTML={{ __html: content.message }}></div>
            </p>
            <p className="notification_elapsed_time">{content.elapsedtime}</p>
          </Link>
        </div>
      </td>
    </tr>
  )
}

export default Note;