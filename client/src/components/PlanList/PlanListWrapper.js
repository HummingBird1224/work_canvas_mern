import React from 'react'

const PlanListWrapper = ({ props }) => {
  return (
    <div className="list__plan__wrapper text-default" id="planHairdresser">
      <h3 className="fw-700"><span>{props.title}</span></h3>
      <div classNameass="list__plan__contents">
        <ul className="list__plan__prise">
          {props.plans.map((plan) => (
            <li key={plan.id}>
              <div className={plan.senior && 'is__senior'}>{plan.job}</div>
              <div>
                <span className="price__emphasis">{plan.price}</span>万円(税込)
              </div>
              {plan.license ? <div className="has__license">{plan.license}</div> : <div></div>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PlanListWrapper;