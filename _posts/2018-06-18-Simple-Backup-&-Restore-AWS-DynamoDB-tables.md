---
layout: post
title:  "P1# Simple Steps Backup & Restore AWS DynamoDB tables"
date:   2018-06-18 14:51:00 +0800
description: Tutorial of how to export and import AWS DynamoDB
tags: [ general, AWS ]
---

##  Download the dynamodump
Get [dynamodump](https://github.com/bchew/dynamodump) from GitHub.
<br/><br/>


## Install boto3
To install boto3, need to pre-install the python package manager (pip)
```bash
pip install boto3
```
<br/><br/>

## Get IAM Access Keys
Get access key from IAM user (Access key ID, Secret access key)
<br/><br/>

### Configure & Export
Change directory to where [dynamodump](https://github.com/bchew/dynamodump) is downloaded and execute the following command in terminal.
Export all the tables in Tokyo Region (ap-northeast-1)
```bash
python dynamodump.py -m backup -r ap-northeast-1 -s "*" --accessKey ACCESS_KEY_ID --secretKey SECRET_ACCESS_KEY
```

Export all the one table in Tokyo Region (ap-northeast-1)
```bash
python dynamodump.py -m backup -r ap-northeast-1 -s "TABLE_NAME" --accessKey ACCESS_KEY_ID --secretKey SECRET_ACCESS_KEY
```
Based on the data volume, export time will be varies.
Backup information will be visible in terminal window as below
```bash
INFO:root:Adding TABLE_NAME
INFO:root:Starting backup for TABLE_NAME
INFO:root:Dumping table schema for TABLE_NAME
INFO:root:Backup for TABLE_NAME table completed. Time taken: 0:00:XX
INFO:root:Backup of table(s) TABLE_NAME completed!
```
<br/><br/>

### Exported Data
Once the backup prcoess completed, the data and scheme files are available under **dynamodump** installed folder.
<br/><br/>

### Restore AWS DynamoDB tables
Restore AWS DynamoDB all tables by the following commands
```bash
python dynamodump.py -m restore -r ap-northeast-1 -s "*" --accessKey ACCESS_KEY_ID --secretKey SECRET_ACCESS_KEY --schemaOnly
```
```bash
python dynamodump.py -m restore -r ap-northeast-1 -s "*" --accessKey ACCESS_KEY_ID --secretKey SECRET_ACCESS_KEY --dataOnly
```


Restore AWS DynamoDB specific table by the following commands
```bash
python dynamodump.py -m restore -r ap-northeast-1 -s "TABLE_NAME" --accessKey ACCESS_KEY_ID --secretKey SECRET_ACCESS_KEY --schemaOnly
```
```bash
python dynamodump.py -m restore -r ap-northeast-1 -s "TABLE_NAME" --accessKey ACCESS_KEY_ID --secretKey SECRET_ACCESS_KEY --dataOnly
```
