#!/bin/bash
# script to send simple email
# Email To ?
EMAIL=$3
#EMAIL="tl@magus.dk"

# send an email using /usr/bin/mailx
echo -e $2 | /usr/bin/mailx -s "$1" "$EMAIL"
