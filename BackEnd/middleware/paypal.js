const paypal = require('paypal-rest-sdk');
const {PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET} = require('../config')

paypal.configure({
    mode: 'sandbox', 
    client_id: PAYPAL_CLIENT_ID,
    client_secret: PAYPAL_CLIENT_SECRET
});

const create_payment = (items, total, orderId) => {
    return create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:5000/api/order/paypal/success",
            "cancel_url": "http://localhost:5000/api/order/paypal/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": items
            },
            "amount": {
                "currency": "USD",
                "total": total.toString()
            },
            "description": orderId
        }]
    
    }
};

const execute_payment = (payerId) => {
    return  execute_payment_json = {
        "payer_id": payerId
        };
}

module.exports = {create_payment, execute_payment};