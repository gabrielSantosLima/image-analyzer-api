//https://cloud.ibm.com/apidocs/visual-recognition/visual-recognition-v3?code=node#related-information

const VisualRecognitionV3 = require('ibm-watson/visual-recognition/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
const fs = require('fs');

const { apikey } = require('./../../credentials.json')

const imageAnalizer = async () => {

    const visualRecognition = new VisualRecognitionV3({
        version: '218-03-19',
        authenticator: new IamAuthenticator({
            apikey 
        })
      });
    
    const classifyParams = {
        imagesFile: fs.createReadStream('./assets/teste.jpg') 
    };
      
    return resp = await visualRecognition.classify(classifyParams)
    .then(response => {
        const { result } = response;

        return result;
    })
    .catch(err => {
        throw new Error(err); 
    });
}

module.exports = imageAnalizer;