import React, { useState, useEffect } from 'react';

export default function Submission() {
    const initialFormData = {
        country: "",
        days_on_platform: "",
        minutes_watched: "",
        courses_started: "",
        practice_exams_started: "",
        practice_exams_passed: "",
        minutes_spent_on_exams: "",
    };

    const [result, setResult] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState([]);
    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        // Reset form data to initial state when component mounts
        setFormData(initialFormData);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('https://portfolio-project-1.onrender.com/api/predict4', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            setResult(responseData);
            console.log(responseData);
        } catch (error) {
            setError([error.message]);
        }
        setIsLoading(false);
    };

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div className='p-10 -mb-10'>
            {isLoading ? (
                <div>
                    <h1>Loading</h1>
                </div>
            ) : null}
            <div className='bg-gradient-to-r from-red-300 to-blue-500 rounded-2xl py-10'>
                <h1 className='text-center font-bold text-2xl'>PREDICTION</h1>
                <p className='text-center'>our goal to predict will student purchase course or not</p>
                <div className="join flex justify-center ">
                    <form onSubmit={handleSubmit} className='m-10 grid grid-cols-4 gap-10 items-center relative'>
                        <label ><h1 className='font-bold text-xl'>Country:</h1></label>
                        <input name="country" value={formData.country} onChange={handleInputChange} className='border-none rounded-lg p-2  font-bold focus-visible:via-orange-300 text-lg decoration-none outline-none shadow-lg mx-10' type="text" />

                        <label ><h1 className='font-bold text-xl'>Days On Platform:</h1></label>
                        <input name="days_on_platform" value={formData.days_on_platform} onChange={handleInputChange} className='border-none rounded-lg p-2  font-bold focus-visible:via-orange-300 text-lg decoration-none outline-none shadow-lg mx-10' type="text" />

                        <label ><h1 className='font-bold text-xl'>Minutes Watched:</h1></label>
                        <input name="minutes_watched" value={formData.minutes_watched} onChange={handleInputChange} className='border-none rounded-lg p-2  font-bold focus-visible:via-orange-300 text-lg decoration-none outline-none shadow-lg mx-10' type="text" />

                        <label ><h1 className='font-bold text-xl'>Course Started:</h1></label>
                        <input name="courses_started" value={formData.courses_started} onChange={handleInputChange} className='border-none rounded-lg p-2  font-bold focus-visible:via-orange-300 text-lg decoration-none outline-none shadow-lg mx-10' type="text" />

                        <label ><h1 className='font-bold text-xl'>Practice Exam Started:</h1></label>
                        <input name="practice_exams_started" value={formData.practice_exams_started} onChange={handleInputChange} className='border-none rounded-lg p-2  font-bold focus-visible:via-orange-300 text-lg decoration-none outline-none shadow-lg mx-10' type="text" />

                        <label ><h1 className='font-bold text-xl'>Practice Exam Passed:</h1></label>
                        <input name="practice_exams_passed" value={formData.practice_exams_passed} onChange={handleInputChange} className='border-none rounded-lg p-2  font-bold focus-visible:via-orange-300 text-lg decoration-none outline-none shadow-lg mx-10' type="text" />

                        <label ><h1 className='font-bold text-xl'>Minutes Spend On Exams:</h1></label>
                        <input name="minutes_spent_on_exams" value={formData.minutes_spent_on_exams} onChange={handleInputChange} className='border-none rounded-lg p-2  font-bold focus-visible:via-orange-300 text-lg decoration-none outline-none shadow-lg mx-10' type="text" />

                        <button type='submit' onClick={handleToggle} className="bg-black text-white text-center h-[50px] w-[100px] shadow-lg rounded px-2">Predict</button>
                    </form>

                </div>
            </div>
            {toggle && (
                <div className='flex justify-center m-10'>
                    <div className='w-[700px] bg-gradient-to-r from-red-300 to-blue-500 rounded-2xl py-10 text-center flex flex-col justify-center items-center'>
                        <h1 className='text-[orange] text-2xl font-bold text-center'>Result</h1>
                        <p>our goal to predict will student purchase course or not. The Student will</p>
                        <h1 className='font-bold'>{result.Result}</h1>
                    </div>
                </div>
            )}

            {error.length > 0 && (
                <div>
                    Error: {error.map((errorMessage, index) => (
                        <p key={index}>{errorMessage}</p>
                    ))}
                </div>
            )}

            <div className="join flex justify-center">
                <form action="" className='m-10 '>
                    <input className="input input-bordered join-item" placeholder="Email" />
                    <button className="bg-black text-white h-[50px] rounded px-2">Subscribe</button>
                </form>
            </div>
        </div>
    );
}
