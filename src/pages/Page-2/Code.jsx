import React from 'react'

export default function Code() {
    return (
        <div>

            <div className='flex gap-20 items-center' id='code'>
                <div className="mockup-code bg-primary text-primary-content m-10 w-[500px] h-[200px]">
                    <pre className='text-center'><code >url = "http://127.0.0.1:5000/api/predict4"</code></pre>
                    <pre className='text-center'><code >result = requests.post(url,json=input)</code></pre>
                    <pre className='text-center'><code >if result.status_code == 200:</code></pre>
                    <pre className='text-center'><code >final =result.text</code></pre>
                    <pre className='text-center'><code >print(final)</code></pre>

                    


                </div>
                <div className='w-[500px]'>
                    <h1 className='font-bold  text-2xl m-5'>API Documentation</h1>
                    <p>Documentation Helps to Fetch data from hosted website that website containing Model. Using Post and Get method access the model through cloud server  </p>
                    <button className='bg-black text-white px-2 rounded-lg m-2'><a href="https://github.com/rajboopathiking/User-classification" target='_blank'>Visit</a></button>
                </div>
            </div>

        </div>
    )
}
