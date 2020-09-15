import React,{useState} from 'react'
import ContactDisplay from './ContactDisplay'
import ContactForm from './ContactForm'
import {handlerAddContacts ,editDb} from '../functios/Handlers'
import {contactFirestore} from '../config/firebase'


const ContactMain = () => {
    const [x,setX] = useState(null)
    const [y,setY] = useState(null)

    const handlerShowDb = () => {
        contactFirestore.collection("contact")
        .orderBy('name')
        .onSnapshot((snap)=> {
            let documents =[];
            snap.forEach(doc => {
                documents.push({...doc.data(), id:doc.id})
            });
            setX(documents);
        });

    }
    const HandlerEdit = id => {
        contactFirestore.collection("contact")
        .doc(id)
        .get().then(function(doc) {
            if (doc.exists) {
                setY({
                    name:doc.data().name,
                    phone:doc.data().phone,
                    email:doc.data().email,
                    id
                })
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }
    const editDb = (object) => {
        contactFirestore.collection("contact").doc(object.id).set({
            name:object.name,
            phone:object.phone,
            email:object.email,
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
        setY({
            name:'',
            phone:'',
            email:''
        })
        setY(null)
    }
    return (
        <>
        <div className="flex ">
        <div className=" flex-1 text-gray-800 text-center px-4 py-2 m-2">

        <div className="grid grid-cols-1 gap-4 xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                <div className="col-span-1 "><ContactForm handlerAddContacts={handlerAddContacts} y={y} editDb={editDb} /></div>
                <div className="col-span-2 "><ContactDisplay handlerShowDb={handlerShowDb} HandlerEdit={HandlerEdit} x={x} /></div>
            </div>

        </div>
        </div>
        </>
    )
}

export default ContactMain
