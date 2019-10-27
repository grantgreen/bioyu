#!/bin/sh

DIR=`date +%m%d%y`
DEST=db_backups/yubio/$DIR
mkdir $DEST

mongodump --db yubio --out $DEST

DEST_B=db_backups/yubio_b/$DIR
mkdir $DEST_B

mongodump --db yubio_b --out $DEST_B

DEST_C=db_backups/yubio_c/$DIR
mkdir $DEST_C

mongodump --db yubio_c --out $DEST_C

DEST_IDC=db_backups/yubio_idc/$DIR
mkdir $DEST_IDC

mongodump --db yubio_idc --out $DEST_IDC
