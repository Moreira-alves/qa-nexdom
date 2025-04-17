import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 1,
  duration: '2s',
};

export default function () {
  const url = 'https://nexdom.tec.br/wp-admin/admin-ajax.php';

  const payload = 
    'post_id=128&' 
    'form_id=fecbca2&' 
    'referer_title=Contato&' 
    'queried_id=128&' 
    'form_fields[name]=Matheus&' 
    'form_fields[email]=matheus@email.com&' 
    'form_fields[message]=Teste de performance via K6&' 
    'action=elementor_pro_forms_send_form';

  const params = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    'status é 200': (r) => r.status === 200,
    'resposta contém success': (r) => r.body.includes('success'),
  });
}
