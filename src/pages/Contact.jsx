import React, {useState, useRef, Suspense} from 'react';
import emailjs from'@emailjs/browser';
import Plane from '../models/plane.jsx'
import {Canvas} from "@react-three/fiber";

const Contact = () => {
    
    const formRef = useRef(null);
    const [form, setForm] = useState({ name: '', email: '', message: ''});
    const [isLoading, setIsLoading] = useState(false);
    
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})     
    }
    
    const handleFocus = () => {
        
    }

    const handleBlur = () => {

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "Albert",
                from_email: form.email,
                to_email: 'albertcnguyen22@gmail.com',
                message: form.message
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setIsLoading(false);
            // TODO: Show Success Message
            // TODO: Hide an Alert
            setForm({name: '', email: '', message: ''});
        }).catch((error) => {
            setIsLoading(false);
            console.log(error);
            // TODO: Show Error Message
        })
    }
    
    return (
        <section className = "relative flex lg:flex-row flex-col max-container">
            <div className = "flex-1 min-w-[50%] flex flex-col">
                <h1 className="head-text">
                    Get in touch!
                </h1>
                <form 
                    className="w-full flex flex-col gap-7 mt-14"
                    onSubmit = {handleSubmit}
                >
                    <label className="text-white-500 font-semibold">
                        Name
                        <input
                            type="text"
                            name="name"
                            className="input"
                            placeholder="John Smith"
                            required
                            value={form.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className="text-white-500 font-semibold">
                        Email
                        <input
                            type="email"
                            name="email"
                            className="input"
                            placeholder="JohnSmith@gmail.com"
                            required
                            value={form.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className="text-white-500 font-semibold">
                        Message
                        <textarea
                            name="message"
                            rows={4}
                            className="textarea"
                            placeholder="Let me know how I can help you!"
                            required
                            value={form.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <button
                        type = "submit"
                        className="btn"
                        disabled = {isLoading}
                        onFocus = {handleFocus}
                        onBlur = {handleBlur}
                    >
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
            
            <div className = "lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
                <Canvas
                    camera={{
                        position: [0, 0, 5],
                        fov: 75,
                        near: 0.1,
                        far: 1000,
                    }}
                    >
                    <directionalLight position={[0, 0, 1]} intensity={2.5} />
                    <ambientLight intensity={1} />
                    <pointLight position={[5, 10, 0]} intensity={2} />
                    <spotLight
                        position={[10, 10, 10]}
                        angle={0.15}
                        penumbra={1}
                        intensity={2}
                    />
                    <Suspense fallback={null}>
                        <Plane
                            position = {[0.1, 0.75, 0]}
                            rotation = {[0.25,0.6,0.3]}
                            scale = {[0.2, 0.2, 0.2]}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}

export default Contact