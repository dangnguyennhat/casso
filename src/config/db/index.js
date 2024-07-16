const mongoose = require('mongoose')

async function connect() {
    try{
        await mongoose.connect('mongodb+srv://dangnguyennhat:dangnguyennhat@uniclo.zkufuq7.mongodb.net/UNI_CLO?retryWrites=true&w=majority&appName=UNICLO',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect successfully!')
    } catch (error) {
        console.log('Connect failed!')
    }
}

module.exports = {connect};
