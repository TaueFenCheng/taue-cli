#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var program = new commander_1.Command();
console.log(process.argv.slice(2));
console.log(555555555555);
program
    .name("zhi-cli")
    .description("zhi+TypeScript application generator")
    .version("0.0.1");
program
    .command("init <name>")
    .description("init a zhi project")
    .action(function (name) {
    console.log("start init zhi project:", name);
});
program.parse();
// require('../index')
