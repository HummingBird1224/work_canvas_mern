import React from 'react';

const IndividualPlan = ({ plan }) => (
  <li >
    <div className={plan.senior && 'is__senior'}>{plan.degree}</div>
    <div>
      <span className="price__emphasis">{plan.price}</span>万円(税込)
    </div>
    {plan.license ? <div className="has__license">{plan.license}</div> : <div></div>}
  </li>
)

const PlanListWrapper = ({ props }) => {
  return (
    <div className="list__plan__wrapper text-default" id="planHairdresser">
      <h3 className="fw-700"><span>{props.business_type}</span></h3>
      <div className="list__plan__contents">
        <ul className="list__plan__prise">
          <IndividualPlan plan={props.plan1} />
          <IndividualPlan plan={props.plan2} />
          <IndividualPlan plan={props.plan3} />
          <IndividualPlan plan={props.plan4} />
        </ul>
      </div>
    </div>
  )
}

export default PlanListWrapper;