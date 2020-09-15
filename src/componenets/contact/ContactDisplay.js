import React,{useEffect,useState} from 'react'
import {remove } from '../functios/Handlers'

function ContactDisplay({handlerShowDb ,x , HandlerEdit}) {
    useEffect(() => {
       handlerShowDb()
    }, [])
    
    return (
        <>  
            <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 text-center" role="alert">
            <p className="font-bold">All Contacts <i className="fas fa-id-card"></i></p>
            <div className="flex justify-center ">
            <div className="text-center flex-center  rounded shadow-lg">
                {x ? 
                ( <table className="table-auto ">
                    <thead>
                        <tr className="text-center">
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Phone</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {x.length ? x.map(xx=>
                        ( <tr key={xx.id} className="text-left">
                            <td className="border px-4 py-2">{xx.name}</td>
                            <td className="border px-4 py-2">{xx.phone}</td>
                            <td className="border px-4 py-2">{xx.email}</td>
                            <td className="border px-4 py-2">
                                <button className="px-2"><i className="far fa-trash-alt" onClick={()=>remove(xx.id)}></i></button>
                                <button className="px-2"><i className="far fa-edit" onClick={()=>HandlerEdit(xx.id)}></i></button>
                            </td>
                            </tr>)
                        ):
                        (<tr className="text-center"><td className=" px-4 py-2">No contacts to show <i className="fas fa-sad-tear"></i></td></tr>)
                        }
                    
                    </tbody>
                    </table>) 
                    :
                (<>
                <br/>
                <p>Loading<i className="fas fa-spinner"></i></p>
                </>)}
                </div>
                </div>
            </div>
        </>
    )
}

export default ContactDisplay
