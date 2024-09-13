#!/usr/bin/env node
import { program } from 'commander';
import chalk from 'chalk';

// Versi aplikasi
program.version('1.0.0').description('CLI App Contoh Menggunakan Node.js');

// Perintah untuk menampilkan pesan halo
program
  .command('hello <name>')
  .description('Menampilkan pesan halo ke pengguna')
  .action((name) => {
    console.log(chalk.green(`Halo, ${name}!`));
  });

// Menampilkan versi Node.js
program
  .command('node-version')
  .description('Menampilkan versi Node.js yang sedang berjalan')
  .action(() => {
    console.log(chalk.blue(`Versi Node.js: ${process.version}`));
  });

// Parsing argumen dari CLI
program.parse(process.argv);