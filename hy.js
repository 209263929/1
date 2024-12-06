/******************************

脚本功能：黄油相机+解锁VIP
下载地址：http://mtw.so/5tlBLV
软件版本：8.18.0
脚本作者：彭于晏
更新时间：2022-9-5
问题反馈：QQ+89996462
TG群：https://t.me/plus8889
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

https:\/\/api4\.bybutter\.com\/v4\/* url script-response-body https://raw.githubusercontent.com/209263929/1/929/hy.js



[MITM]
hostname = %APPEND% api4.bybutter.com

*******************************/

body = $response.body.replace(/\"ownership\":\"\w+\"/g, '\"ownership\":"free"').replace(/\"usageType\":\"\w+\"/g, '\"usageType\":"unlimited"').replace(/\"memberships\":\[\]/g, "\"memberships\":[{\"endAt\":1780697166,\"id\":\"1\",\"name\":\"普通会员\",\"ownership\":\"temporary\",\"startAt\":1587654321,\"usageType\":\"unlimited\"}]").replace(/false/g, "true")
$done({body});
