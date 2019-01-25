#!/usr/bin/env node
import fs from 'fs'
import chalk from 'chalk'
import { exec } from 'child_process'
import path from 'path'

import { getHostsPath, getCliColors, getFileOwnershipScripts, getPermissionsScripts, getPortProxyScripts, execScript } from "./utils";
import { isCofferSetup, setupHostsConfig } from './setup'
import { dbRestAPI, webServer } from '../../infrastructure/servers'

const platform = process.platform
const hostsPath = getHostsPath({ platform, path })
const hostsEntry = '127.3.3.3   coffer.io'
const { orange, yellow, green } = getCliColors({ chalk })

console.log(`\nCurrent environment: ${yellow(platform)}`)
execScript({
    script: 'whoami',
    exec
}).then(username => {
    console.log(`Currently logged in user: `, yellow(username))
    const fileOwnershipScript = getFileOwnershipScripts({ platform, hostsPath }).createOwnership
    const permissionsScript = getPermissionsScripts({ platform, hostsPath, username }).addPermissions
    const portProxyScript = getPortProxyScripts({ platform }).createPortF
    return isCofferSetup({
        hostsPath, fs, hostsEntry
    }).then((isSetup) => {
        if (!isSetup) {
            console.log(`You are not setup with ${orange('coffer')}!`)
            console.log(`Setting ${green('you')} up ...`)
            return setupHostsConfig({
                exec,
                fs,
                fileOwnershipScript,
                permissionsScript,
                hostsPath,
                hostsEntry,
                execScript
            })
        } else {
            console.log(`You are already setup with ${orange('coffer')}.`)
            console.log(`Vist ${orange('coffer.co')} in your browser for the application!`)
            process.exit(0)
        }
    }).then(() => {
        console.log("Setting up port proxy ...")
        return execScript({ script: portProxyScript, exec })
    }).then(() => {
        console.log("SUCCESS: setup port proxy ...")
        console.log("\nCompleted setup!")
        console.log("Revoking ownership and removing permissions ...")
        const fileOwnershipScript = getFileOwnershipScripts({ platform, hostsPath }).removeOwnership
        return execScript({
            script: fileOwnershipScript, exec
        })
    }).then(() => {
        console.log("Revoked permissions ...")
        const permissionsScript = getPermissionsScripts({ platform, hostsPath, username }).removePermissions
        return execScript({ script: permissionsScript, exec })
    }).then(() => {
        console.log("Revoked Permissions ...")
        console.log("Completed revoking permissions!")
    }).catch(err => {
        console.log(err)
    })
}).then(() => {
    console.log("Starting servers ...")
    return dbRestAPI.start()
}).then((successMsg) => {
    console.log(successMsg)
    return webServer.start()
}).then((successMsg) => {
    console.log(successMsg)
    console.log(`Vist ${orange('coffer.io')} in your browser for the application!`)
}).catch((err) => {
    console.log(err)
    process.exit(1)
})
