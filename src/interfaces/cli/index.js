#!/usr/bin/env node
import fs from 'fs'
import chalk from 'chalk'
import { exec } from 'child_process'
import path from 'path'

import { getHostsPath, getCliColors, getFileOwnershipScript, getPermissionsScriptFn } from "./utils";
import { isCofferSetup } from './pre-setup'
import { setupApplication } from './setup'

const platform = process.platform
const { orange, yellow, green } = getCliColors({ chalk })
const hostsPath = path.relative('.', getHostsPath({ platform }))
const fileOwnershipScript = getFileOwnershipScript({ platform, hostsPath })
const permissionsScriptFn = getPermissionsScriptFn({ platform, hostsPath })

console.log(`\nCurrent environment: ${yellow(platform)}`)
isCofferSetup({ hostsPath, fs })
    .then((isSetup) => {
        if (!isSetup) {
            // Continue Here
            console.log(`You are not setup with ${orange('coffer')}!`)
            console.log(`Setting ${green('you')} up ...`)
            return setupApplication({ exec, hostsScript: fileOwnershipScript,  yellow, permissionsScriptFn  })
        } else {
            console.log(`You are already setup with ${orange('coffer')}!`)
            console.log(`Vist ${orange('coffer.co')} in your browser for the application.`)
            process.exit(0)
        }
    }).then((text) => {
        console.log('')
    }).catch(err => {
        console.log(err)
    })