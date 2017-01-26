#!/bin/sh
# This is a Bourne shell script that substitutes . with -
# onlines not ending in [
sed -i "" '/[\[$]/! {
         s/\./-/g
}
' $@