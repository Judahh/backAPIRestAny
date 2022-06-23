#!/usr/bin/env sh

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
    cat .env | grep -v '#' | grep PORT
    export $(cat .env | grep -v '#' | grep PORT)
    cat .env | grep -v '#' | grep BACK_API_REST_FRAMEWORK
    export $(cat .env | grep -v '#' | grep BACK_API_REST_FRAMEWORK)
fi

port="${PORT:=3000}"

echo "setted Port: ${port}"

if [ "$BACK_API_REST_FRAMEWORK" = "express" ]; then
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