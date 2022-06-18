#! /bin/bash

while getopts p:db flag
do
    case "${flag}" in
        p) port=${OPTARG};;
        d) exec="dev";;
        b) exec="build";;
    esac
done

framework="${BACK_API_REST_FRAMEWORK:-next}"

port="${PORT:-port}"

dist="${npm_package_config_path_dist:-.}"

server="${npm_package_config_path_server:-source/server.js}"

if [ "$framework" = "next" ]; then
    echo "Using Next.js"
    case $exec in
        "dev")
            node_modules/next/dist/bin/next -p $port;;

        "build")
            node_modules/next/dist/bin/next build;;

        *)
            node_modules/next/dist/bin/next start;;
    esac
else
    echo "Using EXPRESS"
    case $exec in
        "dev")
            ./node_modules/nodemon/bin/nodemon.js -e ts  --exec \"npm run build && npm run start\";;

        "build")
            npm run build;;

        *)
            node $dist/$server;;
    esac
fi