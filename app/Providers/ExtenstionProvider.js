'use strict'

const url = require('url')
const { ServiceProvider } = require('@adonisjs/fold')

class ExtenstionProvider extends ServiceProvider {

  async existValidator (data, field, message, args, get) {
    const InvalidArgumentException = use('App/Exceptions/InvalidArgumentException')
    const Database = use('Database')
    /**
     * skip if value is empty, required validation will
     * take care of empty values
     */
    const fieldValue = get(data, field)
    if (!fieldValue) {
      return true
    }
    const collectionName = args[0]
    const databaseField = args[1] || field
    if (!collectionName) {
      throw new InvalidArgumentException('Unique rule require collection name')
    }
    const database = Database.collection(collectionName)
    database.where(databaseField).eq(fieldValue)
    /**
     * if args[2] and args[3] are available inside the array
     * take them as whereNot key/value pair to limit scope
     */
    if (args[2] && args[3]) {
      database.where(args[2]).eq(args[3])
    }

    const exists = await database.findOne()
    if (!exists) {
      throw message
    }
  }

  async digitValidator (data, field, message, args, get) {
    const fieldValue = get(data, field)
    if (!fieldValue) {
      return true
    }
    if (!/^\d+/i.test(fieldValue)) {
      throw message
    }
  }

  async numericValidator (data, field, message, args, get) {
    let fieldValue = get(data, field)
    if (!fieldValue) {
      return true
    }
    if (isNaN(fieldValue)) {
      throw message
    }
  }

  async lengthValidator (data, field, message, args, get) {
    const fieldValue = get(data, field)
    if (!fieldValue) {
      return true
    }
    if (fieldValue.length !== parseInt(args[0])) {
      throw message
    }
  }

  async objectIdValidator (data, field, message, args, get) {
    const fieldValue = get(data, field)
    if (!fieldValue) {
      return true
    }
    if (!/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i.test(fieldValue)) {
      throw message
    }
  }

  async minValueValidator (data, field, message, args, get) {
    const fieldValue = get(data, field)
    if (fieldValue < args[0]) {
      throw message
    }
  }

  async maxValueValidator (data, field, message, args, get) {
    const fieldValue = get(data, field)
    if (fieldValue > args[0]) {
      throw message
    }
  }

  async boot () {
    // register bindings
    
		const Response = this.app.use('Adonis/Src/Response')
		const Request = this.app.use('Adonis/Src/Request')
		const RouteManager = this.app.use('Adonis/Src/Route')
    const Validator = this.app.use('Adonis/Addons/Validator')
const Database = this.app.use('Adonis/Src/Database')


    Response.macro('validateFailed', function (errorMessages) {
      this.status(422).json({
        status: 422,
        code: 'E_VALIDATE_FAILED',
        message: 'Validation failed',
        errors: errorMessages
      })
    })
    
    Response.macro('reportCreated', function (item, meta) {
      let entity = meta.model
      
      delete meta['model']
      this.status(201).json({
        status: 201,
        message: `${entity} Created successfully`,
        data: item,
        meta: meta
      })
    })

    Response.macro('reportUpdated', function (item, meta) {
      let entity = meta.model
      
      delete meta['model']
      this.status(202).json({
        status: 202,
        message: `${entity} Updated successfully`,
        data: item,
        meta: meta
      })
    })

    Response.macro('reportDeleted', function (item, meta, message) {
      let entity = meta.model
      
      delete meta['model']
      this.status(202).json({
        status: 202,
        message: message || `${entity} Deleted successfully`,
        data: null,
        meta: meta
      })
    })
    
    Response.macro('reportListed', function (item, meta) {
    
    })

		Response.macro('isEmpty', function () {
			// this._lazyBody.content
			switch (this.response.statusCode) {
				case 304: // Not Modified [HTTP]
				case 204: // No Content [HTTP]
				case 301: // Temp Redirect [HTTP]
				case 302: // Perm Redirect [HTTP]
				case 303: // See-Other Redirect [HTTP]
				case 100: // Continue [HTTP]
					return true
					break;

				default:
					return false
					break;
			}
		})

		Response.macro('badRequest', function (data, isJson = false) {
      let report = this.status(400)
      if(isJson){
        return report.json(data)
      }
			return report.send(data)
		});

		Request.macro('currentRoute', function () {
			let url_parts = url.parse(this.url(), true)
			let route = RouteManager.match(url_parts.pathname, this.method().toUpperCase(), url_parts.host)

			return route !== null ? route.route.toJSON() : { name: "", route: null, verbs: [], middleware: [], handler: null, domain: null }
		})

		Request.macro('userAgent', function () {
			return this.header('User-Agent')
		})

		Request.macro('hasHeader', function (headerText) {
			return (typeof this.header(headerText) !== 'string')
})
    Validator.extend('exist', this.existValidator, '{{field}} is not exists')
    Validator.extend('objectId', this.objectIdValidator, '{{field}} is not valid ObjectID')
    Validator.extend('digit', this.digitValidator, '{{field}} is not valid digit')
    Validator.extend('numeric', this.numericValidator, '{{field}} is not valid numeric')
    Validator.extend('length', this.lengthValidator, '{{field}} is not valid length')
    Validator.extend('minValue', this.minValueValidator, '{{field}} is not valid minValue')
    Validator.extend('maxValue', this.maxValueValidator, '{{field}} is not valid maxValue')
  }
}

module.exports = ExtenstionProvider