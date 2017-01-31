#!/usr/bin/env node

const pstree = require('ps-tree')
const pid = process.argv[2]

pstree(pid, ((err, children) => {
  let pids = children.map(x => x.PID)
  console.log(pids.join(' '))
}))
