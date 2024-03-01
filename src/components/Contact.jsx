import React from 'react'

export default function Contact() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200" id='Contact'>
        <div className="hero-content flex-col lg:flex-row-reverse gap-20">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 w-[500px]">If You Want to Hire Me.Contact me Now.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form action='mailto:rajboopathiking@gmail.com' className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input type="text" placeholder="user_name" className="input input-bordered" required />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary"><a href="mailto:rajboopathiking@gmail.com">Login</a></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
