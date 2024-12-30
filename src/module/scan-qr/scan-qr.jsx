import React, { useEffect, useState } from 'react'
import BarcodeScannerComponent from 'react-qr-barcode-scanner';


function ScanQR() {
    const [login_code, setLoginCode] = useState('No result');
    const [camera_permission, setCameraPermission] = useState(false);

    useEffect(() => {
        const constraints = {
            video: true
        }

        navigator.mediaDevices.getUserMedia(constraints)
        .then((result) => {
            setCameraPermission(true);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    const navigateToLoginPage = (login_url) => {
        window.location.replace(login_url);
    }
    
    return (
       <div className='h-screen flex flex-col justify-center items-center bg-blue'>
           <div className='bg-slate-50 mt-10 p-5 rounded-lg shadow-xl'>
                <h1 className='font-bold text-4xl'>QR CODE</h1>

                <div className='flex flex-row gap-4 mt-5'>
                    <div className='flex flex-col '>
                        <h1 className='font-bold text-2xl'>{login_code}</h1>
                        <p>Step 1: Scan QR Code</p>
                        <p>Step 2: Login</p>
                    </div>
                    <div>
                        {
                            camera_permission
                            &&
                            <BarcodeScannerComponent
                                width={500}
                                height={500}
                                onUpdate={(err, result) => {
                                    if (result) navigateToLoginPage(result.text);
                                    else setLoginCode("Cannot read login code")
                                }}
                            />
                        }
                    </div>
                    
                </div>
                {/* or login */}
                <div className='flex flex-col gap-4 mt-5 justify-center items-center'>
                    <p>Or</p>
                    <button className='bg-blue-500 text-white p-2 rounded-lg' onClick={() => navigateToLoginPage("/login") }>Login</button>
                </div>
           </div>

       </div>
    )
}

export default ScanQR
