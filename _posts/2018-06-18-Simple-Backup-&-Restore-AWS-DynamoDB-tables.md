---
layout: post
title:  "Simple Backup & Restore AWS DynamoDB tables"
date:   2018-06-18 14:51:00 +0800
description: Tutorial of how to expert and import AWS DynamoDB
tags: [ general, AWS ]
---

##  Download the dynamodump
-  Get [dynamodump] from GitHub.

## Install boto3
- To install boto3, need to pre-install the python package manager (pip)
pip install boto3

## Get IAM Access Keys
- Get access key from IAM user (Access key ID, Secret access key)

### Configure & Export
- Change directory to where [dynamodump] is downloaded and execute the following command in terminal.
- Export all the tables in Tokyo Region (ap-northeast-1)
```
python dynamodump.py -m backup -r ap-northeast-1 -s "*" --accessKey ACCESS_KEY_ID --secretKey SECRET_ACCESS_KEY
```

-  Export all the one table in Tokyo Region (ap-northeast-1)
```
python dynamodump.py -m backup -r ap-northeast-1 -s "TABLE_NAME" --accessKey ACCESS_KEY_ID --secretKey SECRET_ACCESS_KEY
```
- Based on number of tables and amount of data, it will take time to export.
- Backup information will be visible in terminal window as below
```
INFO:root:Adding TABLE_NAME
INFO:root:Starting backup for TABLE_NAME
INFO:root:Dumping table schema for TABLE_NAME
INFO:root:Backup for TABLE_NAME table completed. Time taken: 0:00:XX
INFO:root:Backup of table(s) TABLE_NAME completed!
```

### Exported Data
- Exported data is stored under **dynamodump** subfolder with named **dump**
- Both schema and data of the data will be exported by tool.
### Restore AWS DynamoDB tables
- Restore AWS DynamoDB all tables by the following commands
```
python dynamodump.py -m restore -r ap-northeast-1 -s "*" --accessKey ACCESS_KEY_ID --secretKey SECRET_ACCESS_KEY --schemaOnly
```
```
python dynamodump.py -m restore -r ap-northeast-1 -s "*" --accessKey ACCESS_KEY_ID --secretKey SECRET_ACCESS_KEY --dataOnly
```


- Restore AWS DynamoDB specific table by the following commands
```
python dynamodump.py -m restore -r ap-northeast-1 -s "TABLE_NAME" --accessKey ACCESS_KEY_ID --secretKey SECRET_ACCESS_KEY --schemaOnly
```
```
python dynamodump.py -m restore -r ap-northeast-1 -s "TABLE_NAME" --accessKey ACCESS_KEY_ID --secretKey SECRET_ACCESS_KEY --dataOnly
```
