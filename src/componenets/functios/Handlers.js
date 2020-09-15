import {contactFirestore} from '../config/firebase'

export const remove = id =>{
    if(window.confirm('Are you sure delete this contact?'))
    contactFirestore.collection("contact").doc(id).delete()
    .then(function() {
        console.log("Document remove!");
    })
    .catch(function(error) {
        console.error("Error remove document: ", error);
    });
}

export  const handlerAddContacts = (vlaues) =>{
    contactFirestore.collection("contact").doc().set(
        vlaues
    )
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}

