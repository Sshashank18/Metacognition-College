const checksum_lib = require('./checksum/checksum');

const express = require('express');
const shortid = require('shortid');


const { PORT, DOMAIN } = require('./environments');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname+"/"));


const {database,Customers}=require('./database');

app.get('/details',(req,res)=>{
	return Customers.findOne({
		where:{
			Name:req.body.Name
		},
		attributes:['Name','Email','Mobile','Amount']
	})
	.then(()=>res.redirect())
})

app.get('/paytm', (req, res) => {

	const orderId = shortid.generate();
	const customerId = shortid.generate();

    var paytmParams = {
		"MID" : "cuZBeb01092536643568",
		"WEBSITE" : "WEBSTAGING",
		"INDUSTRY_TYPE_ID" : "Retail",
		"CHANNEL_ID" : "WEB",
		"ORDER_ID" : orderId,
		"CUST_ID" : customerId,
		"MOBILE_NO" : req.query.mobile,
		"EMAIL" : req.query.email,
		"TXN_AMOUNT" : req.query.amount,
		"CALLBACK_URL" : `${DOMAIN}success?name=${req.query.name}&email=${req.query.email}&mobile=${req.query.mobile}&branch=${req.query.branch}&year=${req.query.year}&event=${req.query.event}&amount=${req.query.amount}`,
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


app.post('/register',(req,res)=>{
	Customers.findOne({
		where: {
			Email: req.body.Email,
			Mobile: req.body.Mobile,
			Event: req.body.Event
		}
	})
		.then(customer => {
			if (!customer) {
				res.status(200).json({
					message: "Send to register"
				});
			} else {
				res.status(200).json({
					message: "You're already registered"
				});
			}
		});
});

app.post('/success', (req, res) => {
	
	Customers.create({
		OrderId: req.body.ORDERID,
		Name: req.query.name,
		Email: req.query.email,
		Mobile: req.query.mobile,
		Branch: req.query.branch,
		Year: req.query.year,
		Event: req.query.event,
		Amount: req.query.amount
	})
		.then(() => {

			res.redirect(DOMAIN + 'success');
		});


});
app.use('/success', express.static(__dirname + '/success.html'));


database.sync()
    .then(()=>{
        console.log("SQL database synced");
        app.listen(process.env.PORT || PORT,()=>console.log(`Server Up and Running on ${DOMAIN}:${process.env.PORT || PORT}`));
    });
