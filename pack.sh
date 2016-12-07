#!/bin/sh
export name=$(cat package.json | python -c "import sys, json; print json.load(sys.stdin)['name']")
target="build/$name.zip" 
mkdir -p build
if [ -e $target ]; then
    rm $target
fi
zip $target -r * -x *build* -x *.git* -x *~

