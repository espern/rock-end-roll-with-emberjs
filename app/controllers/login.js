import Controller from '@ember/controller'
import { inject as service } from '@ember/service'
import { action } from '@ember/object'

export default Controller.extend({
  router: service(),
  signIn: action(async function(event) {
    event.preventDefault()
    let { email, password } = this
    await this.router.transitionTo('bands')
  })
})
