const PayOS = require("@payos/node")

const payos = new PayOS('ad8756e0-73a9-4948-9a4d-4f192f9c9dab', 
                        '57d294ae-5fe3-49c6-8546-5f3446763fd8', 
                        '980cf9d572009a044d22d3079e6e94c205d0ee851f1c45edb1aa33f4d8e8157b')
const LINK = 'http://localhost:3000'

class PaymentController{

    async payment(req, res){
        const order = {
            amount: 3000,
            description: 'Thanh toán ebook',
            orderCode: Math.floor(Math.random() * 100),
            returnUrl: `${LINK}/success`,
            cancelUrl: `${LINK}/cancel`
        };
        
        const payLink = await payos.createPaymentLink(order);
        res.redirect(303, payLink.checkoutUrl);
    };
   
}

module.exports = new PaymentController