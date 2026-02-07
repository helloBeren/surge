let body = JSON.parse($response.body);

if (body.advertisement_num) {
    body.advertisement_num = 0;
}

if (body.advertisement_info) {
    body.advertisement_info = [];
}

$done({ body: JSON.stringify(body) });
