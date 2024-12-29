// import React from 'react'
// import { useRef, useState, useEffect } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { v4 as uuidv4 } from 'uuid';


// const Manager = () => {


//     const ref = useRef();
//     const passwordref = useRef()
//     const [form, setform] = useState({ site: "", username: "", password: "" })
//     const [passwordArray, setpasswordArray] = useState([])

//     const getPassword = async () =>{
//         let req = await fetch("http://localhost:3000/")
//         let passwords = await req.json()
//         console.log(passwords)
//         setpasswordArray(passwords)

//     }

//     useEffect(() => {
//         getPassword()
//         // let passwords = localStorage.getItem("passwords")
//         // if (passwords) {
//         //     setpasswordArray(JSON.parse(passwords))
//         // }

//     }, [])

//     const showPassword = () => {

//         if (ref.current.src.includes("icons/eye.png")) {
//             ref.current.src = "icons/eyecross.png"
//             passwordref.current.type = "text"
//         }
//         else {
//             ref.current.src = "icons/eye.png"
//             passwordref.current.type = "password"
//         }

//     }

//     const savePassword = async () => {
//         setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
//         let req = await fetch("http://localhost:3000/",{method:"POST",headers :{"Content-Type" :"application/json"},body: JSON.stringify( { ...form, id: uuidv4() })})


//         // localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
//         console.log(passwordArray)
//         setform({ site: "", username: "", password: "" })
//     }

//     const handleChange = (e) => {

//         setform({ ...form, [e.target.name]: [e.target.value] })

//     }
//     const Copytext = (text) => {
//         toast.info('Copied to clipboard', {
//             position: "top-left",
//             autoClose: 1000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "dark",

//         });
//         navigator.clipboard.writeText(text);
//     }

//     const editpassword = (id) => {
//         console.log(`Editind password with ${id}`)
//         setform(passwordArray.filter(item => item.id === id)[0])
//         setpasswordArray(passwordArray.filter(item => item.id !== id))
//         // setpasswordArray([...passwordArray, {...form,id:uuidv4()}])
//         // localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)) )
//     }

//     const deletepassword = async (id) => {

//         console.log(`Deleting password with ${id}`)
//         setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])

//         await fetch("http://localhost:3000/",{method:"DELETE",headers :{"Content-Type" :"application/json"},body: JSON.stringify([...passwordArray, { ...form, id}])})

//         setpasswordArray(passwordArray.filter(item => item.id !== id))
//         // localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
//     }



//     return (
//         <>
//             <ToastContainer
//                 position="top-left"
//                 autoClose={1000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="dark"

//             />

//             <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
//             <div className=" p-3 md:mycontainer min-h-[88.2vh]">
//                 <h1 className='text-4xl text font-bold text-center'>
//                     <span className='text-green-500'> &lt;</span>

//                     <span>Pass</span><span className='text-green-500'>OP/&gt;</span>

//                 </h1>
//                 <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>

//                 <div className="flex flex-col p-4 text-black gap-8 items-center">
//                     <input value={form.site} onChange={handleChange} placeholder='Enter website URL' name="site" className='rounded-full border border-green-500 w-full p-4 py-1' type="text" id="site" />
//                     <div className="flex flex-col md:flex-row w-full justify-between gap-8">
//                         <input value={form.username} onChange={handleChange} placeholder='Enter Username' name="username" className='rounded-full border border-green-500 w-full p-4 py-1' type="text" id="username" />
//                         <div className="relative">

//                             <input ref={passwordref} placeholder='Enter Password' value={form.password} onChange={handleChange} name="password" className='rounded-full border border-green-500 w-full p-4 py-1' type="password" id="password" />
//                             <span className='absolute right-[4px] top-[4px] cursor-pointer' >
//                                 <img ref={ref} onClick={showPassword} className='relative ' width={26} src="icons/eye.png" alt="" />
//                             </span>
//                         </div>



//                     </div>



//                     <button onClick={savePassword} value={form.password} className='flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900'>
//                         <lord-icon
//                             src="https://cdn.lordicon.com/jgnvfzqg.json"
//                             trigger="hover"
//                         >
//                         </lord-icon>
//                         Save</button>
//                 </div>
//                 <div className='passwords' >
//                     <h1 className='text-2xl py-2  font-bold text-green-800'>Your Passwords</h1>
//                     {passwordArray.length === 0 && <div>No passwords to show</div>}
//                     {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden mb-10">
//                         <thead className='bg-green-800 text-white'>
//                             <tr>
//                                 <th>Website</th>
//                                 <th>Username</th>
//                                 <th>Password</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody className='bg-green-100' >
//                             {passwordArray.map((item, index) => {
//                                 return <tr key={index}>
//                                     < td className='text-center border border-white items-center  md:w-32 md:mx-auto  '>
//                                         <div className=' flex overflow-wrap: break-word overflow-hidden  items-center justify-center'>
//                                             <span className='text-wrap'><a className='max-w-5' href={item.site}>{item.site}</a></span>

//                                             <button onClick={() => { Copytext(item.site) }} className='w-10 p-2 '><img src="/icons/copy.png" alt="f" /></button>
//                                         </div>
//                                     </td>
//                                     < td className='text-center border border-white  w-32 '>
//                                         <div className='flex items-center justify-center'>
//                                             {item.username}
//                                             <span><button onClick={() => { Copytext(item.username) }} className='w-10 p-2 '><img src="/icons/copy.png" alt="f" /></button></span>
//                                         </div>
//                                     </ td>
//                                     < td className='text-center border border-white  w-32 '>
//                                         <div className='flex items-center justify-center'>
//                                             <span>{item.password}</span>
//                                             <span><button onClick={() => { Copytext(item.password) }} className='w-10 p-2 '><img src="/icons/copy.png" alt="f" /></button></span>
//                                         </div>
//                                     </ td>
//                                     < td className='text-center border border-white  w-32 '>
//                                         <span className='Edit' onClick={() => { editpassword(item.id) }}>
//                                             <lord-icon
//                                                 src="https://cdn.lordicon.com/exymduqj.json"
//                                                 trigger="hover"
//                                                 style={{ "width": "25px", "height": "25px" }}>
//                                             </lord-icon>
//                                         </span>
//                                         <span className='Delete' onClick={() => { deletepassword(item.id) }}>
//                                             <lord-icon
//                                                 src="https://cdn.lordicon.com/hwjcdycb.json"
//                                                 trigger="hover"
//                                                 style={{ "width": "25px", "height": "25px" }}>
//                                             </lord-icon>
//                                         </span>
//                                     </ td>
//                                 </tr>

//                             })}
//                         </tbody>
//                     </table>
//                     }
//                 </div>


//             </div>
//         </>
//     )
// }

// export default Manager



import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {


    const ref = useRef();
    const passwordref = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])


    useEffect(() => {

        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }

    }, [])

    const showPassword = () => {

        if (ref.current.src.includes("icons/eye.png")) {
            ref.current.src = "icons/eyecross.png"
            passwordref.current.type = "text"
        }
        else {
            ref.current.src = "icons/eye.png"
            passwordref.current.type = "password"
        }

    }

    const savePassword = async () => {
        setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])

        localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
        console.log(passwordArray)
        setform({ site: "", username: "", password: "" })
    }

    const handleChange = (e) => {

        setform({ ...form, [e.target.name]: [e.target.value] })
        console.log(form)
    }
    const Copytext = (text) => {
        toast.info('Copied to clipboard', {
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });
        navigator.clipboard.writeText(text);
    }

    const editpassword = (id) => {
        console.log(`Editind password with ${id}`)
        setform(passwordArray.filter(item => item.id === id)[0])
        setpasswordArray(passwordArray.filter(item => item.id !== id))
        // setpasswordArray([...passwordArray, {...form,id:uuidv4()}])
        // localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)) )
    }

    const deletepassword = (id) => {

        console.log(`Deleting password with ${id}`)
        setpasswordArray(passwordArray.filter(item => item.id !== id))
        localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
    }



    return (
        <>
            <ToastContainer
                position="top-left"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"

            />

            <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
            <div className=" p-3 md:mycontainer min-h-[88.2vh]">
                <h1 className='text-4xl text font-bold text-center'>
                    <span className='text-green-500'> &lt;</span>

                    <span>Pass</span><span className='text-green-500'>OP/&gt;</span>

                </h1>
                <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>

                <div className="flex flex-col p-4 text-black gap-8 items-center">
                    <input value={form.site} onChange={handleChange} placeholder='Enter website URL' name="site" className='rounded-full border border-green-500 w-full p-4 py-1' type="text" id="site" />
                    <div className="flex flex-col md:flex-row w-full justify-between gap-8">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' name="username" className='rounded-full border border-green-500 w-full p-4 py-1' type="text" id="username" />
                        <div className="relative">

                            <input ref={passwordref} placeholder='Enter Password' value={form.password} onChange={handleChange} name="password" className='rounded-full border border-green-500 w-full p-4 py-1' type="password" id="password" />
                            <span className='absolute right-[4px] top-[4px] cursor-pointer' >
                                <img ref={ref} onClick={showPassword} className='relative ' width={26} src="icons/eye.png" alt="" />
                            </span>
                        </div>



                    </div>



                    <button onClick={savePassword} value={form.password} className='flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"
                        >
                        </lord-icon>
                        Save</button>
                </div>
                <div className='passwords' >
                    <h1 className='text-2xl py-2  font-bold text-green-800'>Your Passwords</h1>
                    {passwordArray.length === 0 && <div>No passwords to show</div>}
                    {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden mb-10">

                        <thead className='bg-green-800 text-white'>
                            <tr>
                                <th>Website</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody className='bg-green-100' >
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>
                                    < td className='text-center border border-white items-center  md:w-32 md:mx-auto  '>
                                        <div className=' flex overflow-wrap: break-word overflow-hidden  items-center justify-center'>
                                            <span className='text-wrap'><a className='max-w-5' href={item.site}>{item.site}</a></span>

                                            <button onClick={() => { Copytext(item.site) }} className='w-10 p-2 '><img src="/icons/copy.png" alt="f" /></button>
                                        </div>
                                    </td>
                                    < td className='text-center border border-white  w-32 '>
                                        <div className='flex items-center justify-center'>
                                            {item.username}
                                            <span><button onClick={() => { Copytext(item.username) }} className='w-10 p-2 '><img src="/icons/copy.png" alt="f" /></button></span>
                                        </div>
                                    </ td>
                                    < td className='text-center border border-white  w-32 '>
                                        <div className='flex items-center justify-center'>
                                            <span>{item.password}</span>
                                            <span><button onClick={() => { Copytext(item.password) }} className='w-10 p-2 '><img src="/icons/copy.png" alt="f" /></button></span>
                                        </div>
                                    </ td>
                                    < td className='text-center border border-white  w-32 '>
                                        <span className='Edit' onClick={() => { editpassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/exymduqj.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon> 
                                        </span>
                                        <span className='Delete' onClick={() => { deletepassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/hwjcdycb.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                    </ td>
                                </tr>

                            })}
                        </tbody>
                    </table>
                    }
                </div>


            </div>
        </>
    )
}

export default Manager
