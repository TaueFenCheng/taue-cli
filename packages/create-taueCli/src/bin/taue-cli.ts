#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { Command } from "commander"
import minimist from 'minimist'

const argv = minimist<{
    template?: string
    help?: boolean
  }>(process.argv.slice(2), {
    default: { help: false },
    alias: { h: 'help', t: 'template' },
    string: ['_'],
  })
const cwd = process.cwd()
const defaultTargetDir = 'taue-project'
function formatTargetDir(targetDir: string | undefined) {
    return targetDir?.trim().replace(/\/+$/g, '')
}
const argTargetDir = formatTargetDir(argv._[0])
let targetDir = argTargetDir || defaultTargetDir
const root = path.join(cwd, targetDir)


const program = new Command()
console.log(process.argv.slice(2));
console.log(555555555555);

program
    .name("zhi-cli")
    .description("zhi+TypeScript application generator")
    .version("0.0.1")

program
    .command("init <name>")
    .description("init a zhi project")
    .action((name: string) => {
        console.log("start init zhi project:", name)
    })

program.parse()

// require('../index')
