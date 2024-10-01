const auth = () => {
    return (
        <div className="auth-container">
            <div className="auth-container-in">
                <div className="auth-container-in-one">
                    <div className="auth-heading">
                        <h1>Get Started</h1>
                    </div>
                    <div className="auth-form">
                        <form>
                            <div className="form-group">
                                <label htmlFor="">Username</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="form-group-button">
                                <button>
                                    Login
                                </button>
                            </div>
                            <div className="form-group">
                                <p>Forgot password?</p>
                            </div>
                            <div className="form-group">
                                <p>create account ? Sign up</p>
                            </div>
                        </form>
                        <form>
                            <div className="auth-group">
                                <label htmlFor="">Name</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="auth-group">
                                <label htmlFor="">email</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="auth-group">
                                <label htmlFor="">Phone Number</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="auth-group">
                                <label htmlFor="">password</label>                                
                                <input type="text" name="" id="" />
                            </div>
                            <div className="auth-group">
                                <label htmlFor="">confirm password</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="auth-group">
                                <button>
                                    Submit!
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="auth-container-two">

                </div>
            </div>
        </div>
      );
}
 
export default auth;