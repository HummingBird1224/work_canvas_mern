import React , { useState} from 'react';

import Auth from '../../utils/Auth';

const SelectEnterprise=()=>{
  const [corporates, setCorporates]=useState(Auth.getUserDetails().corporates&&Auth.getUserDetails().corporates);
  if(Auth.getUserDetails().corporates){
    const enterpriseClick=(corporate)=>{
      const userDetails = Auth.getUserDetails();
      userDetails.company_id=corporate.company_id;
      userDetails.corporate_name=corporate.corporate_name;
      Auth.setUserToken(userDetails);
      window.location.href='/enterprise';
    }
    return(
      <main className="" role="main">
        <div className="e--c enterprise_signin">
          <section>
            <table className="table--staff">
                <tr>
                  <th>
                    <h1 className="u-fs-xl">企業を選んでください</h1>
                  </th>
                </tr>
                {corporates.length>0&&corporates.map(corporate=>(
                  <tr key={corporate.company_id} onClick={()=>enterpriseClick(corporate)} className='cursor-pointer'>
                    <td>
                      <div className="enterprise-staff">
                        {/* <a href="" className="changeUserRole" data-id="ieu4wY6kHLcnCdyu4"> */}
                          <figure className='mr-2'>
                            <img src="/asset/img/default_enterprise.png" alt={corporate.company_id} />
                          </figure>
                          {corporate.corporate_name}
                        {/* </a> */}
                      </div>
                    </td>
                  </tr>
                ))}
            </table>
          </section>
        </div>
      </main>
    );
  }
  else {
    window.location.href='/enterprise';
  }
}

export default SelectEnterprise;