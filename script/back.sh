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
cd $pwd;

if [ -f ".env" ]; then
    echo ".env exists."
    export $(cat .env | grep -v '#' | sed 's/\r$//' | awk '/=/ {print $1}' )
fi

port="${PORT:=3000}"

echo "setted Port: ${port}"

if [ "$framework" = "express" ]; then
    echo "Using EXPRESS"
    case $exec in
        "dev")
            (cd $pwd ; backExpress -d)
            ;;

        "build")
            (cd $pwd ; backExpress -b)
            ;;

        "")
            (cd $pwd ; backExpress)
            ;;
    esac
else
    echo "Using Next"
    case $exec in
        "dev")
            (cd $pwd ; backNext -d)
            ;;

        "build")
            (cd $pwd ; backNext -b)
            ;;

        "")
            (cd $pwd ; backNext)
            ;;
    esac
fi