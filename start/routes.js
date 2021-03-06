'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('users', 'UserController.store')
Route.post('session', 'SessionController.store')
Route.post('forgot-password', 'ForgotPasswordController.store')
Route.put('forgot-password', 'ForgotPasswordController.update')

Route.get('/files/:name', 'FileController.index')

Route.get('sports', 'SportController.index')
Route.get('sports/:id', 'SportController.index')
Route.post('sports', 'SportController.store')

Route.get('events', 'EventController.index')
Route.post('events', 'EventController.store').middleware('auth')

Route.get('event-subscribe', 'SubscriptionController.index').middleware('auth')
Route.post('event-subscribe', 'SubscriptionController.store').middleware('auth')
