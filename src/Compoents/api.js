import 'cors-anywhere';
// export const URL = 'http://127.0.0.1:8000/api';

// export const URL = 'https://cors-anywhere.herokuapp.com/https://mico-ecommerce.herokuapp.com/api';
// export const URL = 'https://thingproxy.freeboard.io/fetch/https://mico-ecommerce.herokuapp.com/api';
export const URL = 'https://yacdn.org/serve/https://mico-ecommerce.herokuapp.com/api';

/****
 * RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
 */