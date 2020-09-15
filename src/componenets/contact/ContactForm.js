import React,{useState, useEffect} from 'react'

function ContactForm({handlerAddContacts , y , editDb}) {
    const [vlaues,setValeus] = useState({
        name:'',
        phone:'',
        email:''
    })
    useEffect(() => {
        if(y !=null)setValeus(y)
    }, [y])
    const handerText = e =>{
        setValeus({
            ...vlaues,
            [e.target.name] : e.target.value
        })
    }
    const handlerSub = (e) =>{
        e.preventDefault()
        if(y == null ){
            handlerAddContacts(vlaues)
        setValeus({
            name:'',
            phone:'',
            email:''
        })
        }else{
            editDb(vlaues);
            setValeus({
                name:'',
                phone:'',
                email:''
            })
        }

        
    }
    return (
        <>
            <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 text-center" role="alert">
            <p className="font-bold">Add Contact to BD <i className="far fa-address-card"></i></p>
            </div>
            <form className="w-full max-w-sm" onSubmit={handlerSub}>
                <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="flex items-center border-b border-blue-500 py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                                type="text" 
                                placeholder="Full Name"  
                                name="name"
                                onChange={handerText}
                                value={vlaues.name}
                        />
                        </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="flex items-center border-b border-blue-500 py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                                type="text" 
                                placeholder="Phone Number"  
                                name="phone"
                                onChange={handerText}
                                value={vlaues.phone}
                        />
                        </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="flex items-center border-b border-blue-500 py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                                type="text" 
                                placeholder="Email"  
                                name="email"
                                onChange={handerText}
                                value={vlaues.email}
                        />
                        </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                <button className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
                 type="submit"
                 onClick={handlerSub}>
                 { y ==null ? "Save" : "Update"}   
                </button>
                </div>
            </form>
        </>
    )
}

export default ContactForm
