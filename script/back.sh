#! /bin/bash

while getopts p:db flag
do
    case "${flag}" in
        p) port=${OPTARG};;
        d) exec="dev";;
        b) exec="build";;
    esac
done

pwd=$(pwd)

if [ "$framework" = "next" ]; then
    echo "Using Next.js"
    case $exec in
        "dev")
            (cd $pwd ; backNext -d)
            ;;

        "build")
            (cd $pwd ; backNext -b)
            ;;

        *)
            (cd $pwd ; backNext)
            ;;
    esac
else
    echo "Using EXPRESS"
    case $exec in
        "dev")
            (cd $pwd ; backExpress -d)
            ;;

        "build")
            (cd $pwd ; backExpress -b)
            ;;

        *)
            (cd $pwd ; backExpress)
            ;;
    esac
fi