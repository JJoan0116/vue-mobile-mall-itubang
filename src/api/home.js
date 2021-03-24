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
