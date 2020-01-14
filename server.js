const checksum_lib = require('./checksum/checksum');

const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/paytm', (req, res) => {
    var paytmParams = {
		"MID" : "cuZBeb01092536643568",
		"WEBSITE" : "WEBSTAGING",
		"INDUSTRY_TYPE_ID" : "Retail",
		"CHANNEL_ID" : "WEB",
		"ORDER_ID" : "7",
		"CUST_ID" : "2",
		"MOBILE_NO" : "+919315360831",
		"EMAIL" : "yo@gmail.com",
		"TXN_AMOUNT" : "1",
		"CALLBACK_URL" : "http://127.0.0.1:3000/success",
	};
 
	checksum_lib.genchecksum(paytmParams, "u#R7ezMHf4rNiJ3J", function(err, checksum){
		var url = "https://securegw-stage.paytm.in/order/process";

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<html>');
		res.write('<head>');
		res.write('<title>Merchant Checkout Page</title>');
		res.write('</head>');
		res.write('<body>');
		res.write('<center><h1>Please do not refresh this page...</h1></center>');
		res.write('<form method="post" action="' + url + '" name="paytm_form">');
		for(var x in paytmParams){
			res.write('<input type="hidden" name="' + x + '" value="' + paytmParams[x] + '">');
		}
		res.write('<input type="hidden" name="CHECKSUMHASH" value="' + checksum + '">');
		res.write('</form>');
		res.write('<script type="text/javascript">');
		res.write('document.paytm_form.submit();');
		res.write('</script>');
		res.write('</body>');
		res.write('</html>');
        res.end();
                
    });
});

app.get('/success', (req, res) => {
    res.send(`
        <h1>Shashank Chutiya</h1>
    `);
});

app.post('/success', (req, res) => {
    // console.log(req.body);
    var paytmChecksum = "";
    res.send(`
        <h1>Shashank Chutiya</h1>
    `);
    
});

app.listen(3000, () => console.log('Server Running'));