import API from '../utils/API';
import Auth from '../utils/Auth';

export const register = async (data) => {
  return await API({
    method: 'post',
    url: '/users/register',
    data: data
  })
    .then(({ data }) => {
      Auth.setUserToken(data);
      return true;
    })
    .catch(error => {
      return error.response.data;
    });
}

export const saveInitialData = async (data) => {
  console.log(data);
  return await API({
    method: 'post',
    url: '/initialData',
    data: { ...data, companyId: Auth.getCompanyId() }
  })
    .then((res) => {
      return { status: res.status, data: res.data };
    })
    .catch(error => {
      return error.response.data;
    });
}

export const login = async (data) => {
  // console.log(data)
  return await API({
    method: 'post',
    url: '/users/login',
    data: data
  })
    .then(({ data }) => {
      Auth.setUserToken(data);
      return true;
    })
    .catch(error => {
      return error.response.data;
    });
}

export const getMainData = async (companyId) => {
  return await API({
    method: 'get',
    url: '/mainData/' + companyId,
  })
    .then((res) => {
      return { status: res.status, data: res.data };
    })
    .catch(error => {
      return error.response.data;
    });
}

export const getCompanyData = async (companyId) => {
  return await API({
    method: 'get',
    url: '/company/' + companyId,
  })
    .then((res) => {
      return { status: res.status, data: res.data };
    })
    .catch(error => {
      return error.response.data;
    });
}

export const getBillingData = async (companyId) => {
  return await API({
    method: 'get',
    url: '/billing/' + companyId,
  })
    .then((res) => {
      return { status: res.status, data: res.data };
    })
    .catch(error => {
      return error.response.data;
    });
}

export const getBankData = async (companyId) => {
  return await API({
    method: 'get',
    url: '/bank/' + companyId,
  })
    .then((res) => {
      return { status: res.status, data: res.data };
    })
    .catch(error => {
      return error.response.data;
    });
}

export const editCompanyData = async (companyData) => {
  return await API({
    method: 'post',
    url: '/company/edit',
    data: companyData
  })
    .then((res) => {
      return { status: res.status, data: res.data };
    })
    .catch(error => {
      return error.response.data;
    });
}

export const editBillingData = async (billingData) => {
  return await API({
    method: 'post',
    url: '/billing/edit',
    data: billingData
  })
    .then((res) => {
      return { status: res.status, data: res.data };
    })
    .catch(error => {
      return error.response.data;
    });
}

export const editBankData = async (bankData) => {
  return await API({
    method: 'post',
    url: '/bank/edit',
    data: bankData
  })
    .then((res) => {
      return { status: res.status, data: res.data };
    })
    .catch(error => {
      return error.response.data;
    });
}

export const getMembersData = async (companyId) => {
  return await API({
    method: 'get',
    url: '/company/' + companyId + '/members',
  })
    .then((res) => {
      return { status: res.status, data: res.data };
    })
    .catch(error => {
      return error.response.data;
    });
}

export const getInviteId = async (companyId) => {
  return await API({
    method: 'get',
    url: '/company/' + companyId + '/inviteId',
  })
    .then((res) => {
      return { status: res.status, data: res.data };
    })
    .catch(error => {
      return error.response.data;
    });
}

export const changeRole = async (userId, role) => {
  return await API({
    method: 'post',
    url: '/members/' + userId + '/roleChange',
    data: { role: role, companyId: Auth.getCompanyId() }
  })
    .then((res) => {
      return { status: res.status, data: res.data };
    })
    .catch(error => {
      return error.response.data;
    });
}

export const updateMembersOrder = async (members) => {
  return await API({
    method: 'post',
    url: '/members/orderChange',
    data: { members: members }
  })
    .then((res) => {
      return { status: res.status, data: res.data };
    })
    .catch(error => {
      return error.response.data;
    });
}

export const deleteMember = async (memberId) => {
  return await API({
    method: 'get',
    url: '/members/' + memberId + '/delete/' + Auth.getCompanyId()
  })
    .then((res) => {
      return { status: res.status, data: res.data };
    })
    .catch(error => {
      return error.response.data;
    });
}

export const getPlans = async (planIds) => {
  return await API({
    method: 'post',
    url: '/plans',
    data: planIds
  })
    .then((res) => {
      return { status: res.status, data: res.data };
    })
    .catch(error => {
      return error.response.data;
    });
}

export const getAllPlans = async () => {
  return await API({
    method: 'get',
    url: '/plans',
  })
    .then((res) => {
      return { status: res.status, data: res.data };
    })
    .catch(error => {
      return error.response.data;
    });
}

export const getAppliedPlans = async (companyId) => {
  return await API({
    method: 'get',
    url: '/plans/applied/' + companyId,
  })
    .then((res) => {
      return { status: res.status, data: res.data };
    })
    .catch(error => {
      return error.response.data;
    });
}

export const changePlans = async (addedPlanIds) => {
  return await API({
    method: 'post',
    url: '/plans/change/' + Auth.getCompanyId(),
    data: addedPlanIds
  })
    .then((res) => {
      return { status: res.status, data: res.data };
    })
    .catch(error => {
      return error.response.data;
    });
}

















// export const registerAction = (data) => async (dispatch) => {
//   return await API({
//     method: 'post',
//     url: '/users/register',
//     data: data
//   })
//     .then(({ data }) => {
//       Auth.setUserToken(data);
//       localStorage.setItem('point', JSON.stringify(data.point));
//       return data;
//     })
//     .catch(error => {
//       console.log(error)
//       dispatch({
//         type: REGISTER_FAIL,
//         payload: { error }
//       });
//       return error.response;
//     });
// }

// export const getUsers = () => async (dispatch) => {
//   return await API({
//     method: 'get',
//     url: '/users',
//   })
//     .then(({ data }) => {
//       return data;
//     })
//     .catch(error => {
//       console.log(error)
//       if (error.response.status == 401) {
//         window.location.href = '/account/login';
//       }
//       return error.response;
//     });
// }

// export const getUser = (userId) => async (dispatch) => {
//   return await API({
//     method: 'get',
//     url: `/users/${userId}`,
//   })
//     .then(({ data }) => {
//       return data;
//     })
//     .catch(error => {
//       console.log(error)
//       if (error.response.status == 401) {
//         window.location.href = '/account/login';
//       }
//       return error.response;
//     });
// }

// export const editUser = (data) => async (dispatch) => {
//   return await API({
//     method: 'post',
//     url: `/users/${data.id}/edit`,
//     data: data
//   })
//     .then(({ data }) => {
//       return data;
//     })
//     .catch(error => {
//       console.log(error)
//       if (error.response.status == 401) {
//         window.location.href = '/account/login';
//       }
//       return error.response;
//     });
// }

// export const deleteUser = (id) => async (dispatch) => {
//   return await API({
//     method: 'get',
//     url: `/users/${id}/delete`,
//   })
//     .then(({ data }) => {
//       dispatch({
//         type: GET_USERS_SUCCESS,
//         payload: data
//       });
//       return data;
//     })
//     .catch(error => {
//       console.log(error)
//       if (error.response.status == 401) {
//         window.location.href = '/account/login';
//       }
//       dispatch({
//         type: GET_USERS_FAIL,
//         payload: { error }
//       });
//     });
// }

// export const getAddresses = (userId) => async (dispatch) => {
//   return await API({
//     method: 'get',
//     url: `/users/${userId}/addresses`,
//   })
//     .then(({ data }) => {
//       return data;
//     })
//     .catch(error => {
//       console.log(error)
//       if (error.response.status == 401) {
//         window.location.href = '/account/login';
//       }
//       return error.response;
//     });
// }

// export const addAddress = (data, userId) => async (dispatch) => {
//   return await API({
//     method: 'post',
//     url: `/users/${userId}/address/add`,
//     data: data
//   })
//     .then(({ data }) => {
//       return data;
//     })
//     .catch(error => {
//       console.log(error)
//       if (error.response.status == 401) {
//         window.location.href = '/account/login';
//       }
//       return error.response;
//     });
// }

// export const editAddress = (data, id) => async (dispatch) => {
//   return await API({
//     method: 'post',
//     url: `/users/addresses/${id}/edit`,
//     data: data
//   })
//     .then(({ data }) => {
//       return data;
//     })
//     .catch(error => {
//       console.log(error)
//       if (error.response.status == 401) {
//         window.location.href = '/account/login';
//       }
//       return error.response;
//     });
// }

// export const getAddress = (id) => async (dispatch) => {
//   return await API({
//     method: 'get',
//     url: `/users/addresses/${id}`,
//   })
//     .then(({ data }) => {
//       return data;
//     })
//     .catch(error => {
//       console.log(error)
//       if (error.response.status == 401) {
//         window.location.href = '/account/login';
//       }
//       return error.response;
//     });
// }

// export const setAddress = (id, historyId) => async (dispatch) => {
//   const userId = Auth.getUserId();
//   return await API({
//     method: 'get',
//     url: `/users/${userId}/addresses/${id}/set/${historyId}`,
//   })
//     .then(({ data }) => {
//       return data;
//     })
//     .catch(error => {
//       console.log(error)
//       if (error.response.status == 401) {
//         window.location.href = '/account/login';
//       }
//       return error.response;
//     });
// }

// export const deleteAddress = (id) => async (dispatch) => {
//   const userId = Auth.getUserId();
//   return await API({
//     method: 'get',
//     url: `/users/${userId}/addresses/${id}/delete`,
//   })
//     .then(({ data }) => {
//       return data;
//     })
//     .catch(error => {
//       console.log(error)
//       if (error.response.status == 401) {
//         window.location.href = '/account/login';
//       }
//     });
// }

// export const chargePoint = (amount, userId) => async (dispatch) => {
//   return await API({
//     method: 'get',
//     url: `/users/${userId}/point/${amount}/charge`,
//   })
//     .then(({ data }) => {
//       localStorage.setItem('point', JSON.stringify(data));
//       window.location.href = '/account/point';
//       return data;
//     })
//     .catch(error => {
//       console.log(error)
//       if (error.response.status == 401) {
//         window.location.href = '/account/login';
//       }
//     });
// }

export const LOGIN_BEGIN = "LOGIN_BEGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const INSERT_TOKEN_SUCCESS = "INSERT_TOKEN_SUCCESS";
export const INSERT_TOKEN_FAIL = "INSERT_TOKEN_FAIL";
export const GET_USERS_SUCCESS = "GET_USER_SUCCESS";
export const GET_USERS_FAIL = "GET_USER_FAIL";