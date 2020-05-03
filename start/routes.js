'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

/* Usamos la funcion home del controlador JobController en raiz */
Route.get('/', 'JobController.home');

/* Paginas de crear cuenta y logueo */
Route.on('/signup').render('auth.signup');
Route.on('/login').render('auth.login');

/* Usamos la funcion create del controlador UserController en crear cuenta y validamos formulario */
Route.post('/signup', 'UserController.create').validator('CreateUser');
