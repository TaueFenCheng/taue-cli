#!/usr/bin/env node
import { Command } from "commander"

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
