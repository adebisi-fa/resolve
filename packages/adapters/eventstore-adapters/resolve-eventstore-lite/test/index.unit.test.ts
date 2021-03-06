/* eslint-disable import/no-extraneous-dependencies */
import sqlite from 'sqlite'
import tmp from 'tmp'
import os from 'os'
import fs from 'fs'
import { mocked } from 'ts-jest/utils'
/* eslint-enable import/no-extraneous-dependencies */

import genericCreateAdapter from 'resolve-eventstore-base'

import loadEventsByCursor from '../src/js/load-events-by-cursor'
import loadEventsByTimestamp from '../src/js/load-events-by-timestamp'
import freeze from '../src/js/freeze'
import unfreeze from '../src/js/unfreeze'
import getLatestEvent from '../src/js/get-latest-event'
import saveEvent from '../src/js/save-event'
import injectEvent from '../src/js/inject-event'
import shapeEvent from '../src/js/shape-event'
import loadSnapshot from '../src/js/load-snapshot'
import saveSnapshot from '../src/js/save-snapshot'
import dropSnapshot from '../src/js/drop-snapshot'
import connect from '../src/connect'
import init from '../src/init'
import drop from '../src/drop'
import dispose from '../src/dispose'
import getSecretsManager from '../src/secrets-manager'
import createAdapter from '../src/index'

jest.mock('../src/js/load-events-by-cursor', () => jest.fn())
jest.mock('../src/js/freeze', () => jest.fn())
jest.mock('../src/js/unfreeze', () => jest.fn())
jest.mock('../src/js/get-latest-event', () => jest.fn())
jest.mock('../src/js/save-event', () => jest.fn())
jest.mock('../src/js/inject-event', () => jest.fn())
jest.mock('../src/js/shape-event', () => jest.fn())
jest.mock('../src/js/load-snapshot', () => jest.fn())
jest.mock('../src/js/save-snapshot', () => jest.fn())
jest.mock('../src/js/drop-snapshot', () => jest.fn())
jest.mock('../src/connect', () => jest.fn())
jest.mock('../src/init', () => jest.fn())
jest.mock('../src/drop', () => jest.fn())
jest.mock('../src/dispose', () => jest.fn())
jest.mock('../src/secrets-manager', () => jest.fn())

const mGenericCreateAdapter = mocked(genericCreateAdapter)

test('generic createAdapter invoked', () => {
  createAdapter()
  expect(mGenericCreateAdapter).toHaveBeenCalledWith({
    connect,
    loadEventsByCursor,
    loadEventsByTimestamp,
    getLatestEvent,
    saveEvent,
    init,
    drop,
    dispose,
    freeze,
    unfreeze,
    loadSnapshot,
    saveSnapshot,
    dropSnapshot,
    sqlite,
    tmp,
    os,
    fs,
    injectEvent,
    shapeEvent,
    getSecretsManager
  })
})
