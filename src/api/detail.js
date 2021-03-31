import axios from './request';

export function GetGoodInfo(params) {
  return axios.post('/b2bapi/?action=ElasticSearch.GetGoodInfo', params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  });
}
