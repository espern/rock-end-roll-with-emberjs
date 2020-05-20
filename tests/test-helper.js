import Application from '../app'
// eslint-disable-next-line import/no-relative-parent-imports
import config from '../config/environment'
import { setApplication } from '@ember/test-helpers'
import { start } from 'ember-qunit'

setApplication(Application.create(config.APP))

start()
