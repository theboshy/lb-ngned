'use strict';
//https://apidocs.strongloop.com/loopback/#persistedmodel



module.exports = function (Appusertb) {
  Appusertb.registerUser = function (user, doc, conta, cb) {
    var error;

    var userDocTb = Appusertb.app.models.UserDocumentTb;
    userDocTb.create(doc, function (err, objResp) {
      if (err) {
        console.log(err)
        if (err.driver) {
          //reemplazar por fucntion handler para evitar espaguetti
          cb({ "erorCode": err.code, "errorName": err.name, "message": err.errmsg, "driver": true }, null)
        } else {
          cb(err, null)
        }
      } else {
        var contacInforTb = Appusertb.app.models.ContactinfoTb;
        contacInforTb.create(conta, function (err, objRtespo) {
          if (err) {
            console.log(err)
            if (err.driver) {
              //reemplazar por fucntion handler para evitar espaguetti
              cb({ "erorCode": err.code, "errorName": err.name, "message": err.errmsg, "driver": true }, null)
            } else {
              cb(err, null)
            }
          } else {
            Appusertb.create(user, function (err, objRespo) {

              if (err) {
                console.log(err)
                if (err.driver) {
                  //reemplazar por fucntion handler para evitar espaguetti
                  cb({ "erorCode": err.code, "errorName": err.name, "message": err.errmsg, "driver": true }, null)
                } else {
                  cb(err, null)
                }
              } else {
                cb(null, { "status": 200, "message": "all ok" })
              }
            });
           
          }
        });
      }

    });



    

  }

  Appusertb.remoteMethod('registerUser', {
    accepts: [
      { arg: 'User', type: 'Appusertb' },
      { arg: 'Document', type: 'Userdocumenttb' },
      { arg: 'Contact', type: 'Contactinfotb' }
    ]
  });
};
