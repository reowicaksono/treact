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
        <div
            className='text-white'
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                minHeight: '100vh'
            }}
        >
            <div className='d-flex justify-content-center'>
                <div className="mt-4 video-qr-code">
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
                    <p className='text-center'>
                        Arahkan QR Code kedalam bingkai
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ScanQR
