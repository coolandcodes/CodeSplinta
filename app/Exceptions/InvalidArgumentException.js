'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class InvalidArgumentException extends LogicalException {
  
  static invoke (message) {
      return new this(message)
  }
  /**
   * Handle this exception by itself
   */
   handle (error, { request, response, session }) {
        if(true){
            let json = {
              status: error.status || 201,
              code: error.code,
              message: error.message
            }
           
            if (use('Env').get('NODE_ENV') === 'development') {
              json.traces = error.stack
            }
     
            return response.status(error.status).json(json)
        }
     
        session.withErrors({ error: error.message }).flashAll()
        await session.commit()
        
        response.redirect('/error/invalid-args')
   }
}

module.exports = InvalidArgumentException