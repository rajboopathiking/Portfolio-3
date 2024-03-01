import React, { useState, useEffect } from 'react';

export default function Page3project() {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch('https://portfolio-project-1.onrender.com/api/predict3', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "Content": inputValue })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            setResult(responseData);
            console.log(responseData)
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    };

    return (
        <div>
            <div className='flex justify-center flex-col items-center p-10 bg-gradient-to-r from-red-300 to-blue-300'>
                <h1 className='text-[50px] font-bold p-2 '>RECOMMENDED SYSTEM</h1>
                <h2 className='font-bold'>Kaggle database</h2>
                <p className='w-[500px] p-2'>Kaggle is a data science competition platform and online community of data scientists and machine learning practitioners under Google LLC.</p>
            </div>
            <div>
                <form onSubmit={handleSubmit} className='m-10 flex justify-center relative flex-col items-center gap-10'>
                    <input
                        className='h-[50px] w-[80%] px-2 rounded-lg shadow-lg'
                        type="search"
                        value={inputValue}
                        onChange={handleChange}
                        name="inputs"
                    />
                    
                    <button type='submit' className='bg-black text-white px-2 h-[50px] rounded-lg'>
                        Search
                    </button>
                </form>
            </div>
            {error && <div>Error: {error}</div>}
            {isLoading && <div>Loading...</div>}
            {result ? (
                <div className='flex flex-wrap gap-[20px] justify-center m-10'>
                    {result.Result.Title.map((title, index) => (
                        <div key={index} >
                            <div>
                                <div>
                                    <img src={`https://source.unsplash.com/random/350x350/?${title}`} alt="" />
                                </div>
                                <div className='w-[350px] font-bold'>{title}</div>
                                <div className='flex gap-20'>
                                    <div> <ion-icon className="text-[yellow]" name="happy-outline"></ion-icon> {result.Result.Votes[index]}</div>
                                    <div> <ion-icon className="text-[red]" name="play-circle-outline"></ion-icon> {result.Result.Views[index]}</div>
                                </div>

                                <button className='bg-black text-white px-2 rounded-lg'><a href={result.Result.Link[index]} target='_blank'>Watch</a></button>
                            </div>
                        </div>
                    ))}
                </div>
            ):(
                <div className='flex justify-center items-center'>
                    <h1 className='text-2xl'>Not Found</h1>
                </div>
            )}

        </div>
    );
}
