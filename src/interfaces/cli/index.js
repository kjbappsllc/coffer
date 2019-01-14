#!/usr/bin/env node

import { getHostsPath } from "./utils";
import { isCofferSetup } from './setup-check'
import fs from 'fs'
import chalk from 'chalk'

//cli colors
const orange = chalk.bold.hex('#d35400')

const hostsPath = getHostsPath({ platform: process.platform })

isCofferSetup({ hostsPath, fs })
    .then((isSetup) => {
        if(!isSetup){
            // Continue Here
            console.log("You are not setup")
            return Promise.resolve('Continuation')
        } else {
            console.log(`\nYou are already setup with ${orange('coffer')}!`)
            console.log(`Vist ${orange('coffer.co')} in your browser for the application.`)
            process.exit(0)
        }
    }).then((text) => {
        console.log(text)
    }).catch(err => {
        console.log(err)
    })