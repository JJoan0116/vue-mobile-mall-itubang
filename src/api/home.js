import axios from './request';

export function GetHomeadvertisingInfo(params) {
  const formData = new FormData();
  formData.append('homeadvertising_id', 'b0efc80e-6843-11e7-aee8-a3b398df9653');

  return axios.post(
    '/b2bapi/?action=Homeadvertising.GetHomeadvertisingInfo',
    formData,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }
  );
}

export function GetNavigationInfo(params) {
  const formData = new FormData();
  formData.append('nav_platform', '423c30c8-2fe3-11e7-94ac-5065f3324fe7');

  return axios.post(
    '/b2bapi/?action=Homeadvertising.GetNavigationInfo',
    formData,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }
  );
}

export function GetNews(params) {
  return axios.post('/b2bapi/?action=TuLiaoShe.GetNews', params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  });
}

export function GetXianhuo(params) {
  return axios.post('/b2bapi/?action=Xianhuo.GetXianhuo', params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  });
}
