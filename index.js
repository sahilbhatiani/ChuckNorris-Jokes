module.exports = async function (context, myTimer) {
    

    const accountSid ="AC0b5a73ac23f11444b71d3a5f583e49c8"
    const authToken ="78335ee9d677caea7037437b9653529a"

    const client = require('twilio')(accountSid, authToken)

    var timeStamp = new Date().toISOString();

    const https = require('https');


    let message = '';

    //Using the Chuck Norris jokes API
    https.get('https://api.chucknorris.io/jokes/random', (resp) => {
    let data = '';
   

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        message = (JSON.parse(data).value);
        context.log(message);
         if (myTimer.IsPastDue)
    {
        context.log('JavaScript is running late!');
    }
    client.messages.create({
        to:"+64212603729",
        from:'+12674607418',
        body:message
    })  
    });

    })


    
   
};

