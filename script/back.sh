#!/usr/bin/env sh

while getopts p:dmb flag
do
    case "${flag}" in
        p) port=${OPTARG};;
        d) exec="dev";;
        m) exec="migrate";;
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

case $BACK_API_REST_FRAMEWORK in
    "express")
        echo "Using EXPRESS"
        case $exec in
            "dev")
                (cd $pwd ; backExpress -d)
                ;;

            "build")
                (cd $pwd ; backExpress -b)
                ;;

            "migrate")
                (cd $pwd ; backExpress -m)
                ;;

            "")
                (cd $pwd ; backExpress)
                ;;
        esac
        ;;

    "aws"|"aws-lambda")
        echo "Using AWS"
        case $exec in
            "dev")
                (cd $pwd ; backAWSLambda -d)
                ;;

            "build")
                (cd $pwd ; backAWSLambda -b)
                ;;

            "migrate")
                (cd $pwd ; backAWSLambda -m)
                ;;

            "")
                (cd $pwd ; backAWSLambda)
                ;;
        esac
        ;;

    *)
        echo "Using NEXT"
        case $exec in
            "dev")
                (cd $pwd ; backNext -d)
                ;;

            "build")
                (cd $pwd ; backNext -b)
                ;;

            "migrate")
                (cd $pwd ; backNext -m)
                ;;

            "")
                (cd $pwd ; backNext)
                ;;
        esac
        ;;
esac
