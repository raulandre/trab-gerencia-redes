#!/bin/bash
trap 'kill 0' SIGINT; node client/index.js & python3 server/server.py