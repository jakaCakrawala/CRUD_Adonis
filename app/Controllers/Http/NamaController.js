'use strict'

class NamaController {

    index({ request, response, view }) {
        let params = request.get('name');
        return view.render('hello', { text: params.name })
    }

}

module.exports = NamaController
