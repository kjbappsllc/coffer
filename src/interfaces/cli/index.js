#!/usr/bin/env node
import fs from 'fs'
import chalk from 'chalk'
import { exec } from 'child_process'
import path from 'path'

import { getHostsPath, getCliColors, getFileOwnershipScript, getPermissionsScriptFn, getPortProxyScript, getPortProxyScripts } from "./utils";
import { isCofferSetup, setupHostsConfig, setUpPortProxy } from './setup'

const platform = process.platform
const hostsEntry = '127.3.3.3   coffer.co'
const { orange, yellow, green } = getCliColors({ chalk })
const hostsPath = getHostsPath({ platform, path })
const fileOwnershipScript = getFileOwnershipScripts({ platform, hostsPath })
const permissionsScriptFn = getPermissionsScriptsFn({ platform, hostsPath })
const portProxyScript = getPortProxyScripts({ platform })

console.log(`\nCurrent environment: ${yellow(platform)}`)
isCofferSetup({ hostsPath, fs, hostsEntry })
    .then((isSetup) => {
        if (!isSetup) {
            console.log(`You are not setup with ${orange('coffer')}!`)
            console.log(`Setting ${green('you')} up ...`)
            return setupHostsConfig({
                exec,
                fs,
                hostsScript: fileOwnershipScript.create,
                yellow,
                permissionsScriptFn,
                hostsPath,
                hostsEntry
            })
        } else {
            console.log(`You are already setup with ${orange('coffer')}.`)
            console.log(`Vist ${orange('coffer.co')} in your browser for the application!`)
            process.exit(0)
        }
    }).then((successMsg) => {
        console.log(successMsg)
        return setUpPortProxy({ portProxyScript: portProxyScript.create, exec })
    }).then((msg) => {
        console.log(msg)
        console.log(`Vist ${orange('coffer.co')} in your browser for the application!`)
    }).catch(err => {
        console.log(err)
    })