import React, { useState } from 'react';
import styles from "./Login.module.css";
import { colors } from '../../components/shared';
import { images } from '../../assets/images';

const Login = () => {
    const [userCredentials, setUserCredentials] = useState({
        email: "",
        password: "",
    })
    const [isLoading, setIsLoading] = useState(false);
    const [hidePass, setHidePass] = useState(true);

    

  return (
    <div style={{ backgroundColor: colors.secondary }} className={styles.body}>
        <div style={{ position: "relative" }} className={[styles.form__container]}>
            <div className="form__header">
                <div className={styles.login}>
                    <img width={119} height={57} src={images.Login} alt="logo" />
                </div>
                <p className={styles.copyright}>Let’s get our favorite room, before someone else does</p>
            </div>
            <div className={styles.form__body}>
                <form>
                    <div style={{ position: "relative" }}>
                        <input id='email' onChange={(e) => setUserCredentials((prev) => ({ ...prev, email: e.target.value }))} style={{ borderColor: colors.intBorder, backgroundColor: colors.intFill }} type="email" placeholder='user@mail.com' />
                        <img style={{ position: "absolute", top: 28, left: 15 }} src={images.Email} alt="" />
                    </div>
                    <div style={{ position: "relative" }}>
                        <input id='username' onChange={(e) => setUserCredentials((prev) => ({ ...prev, username: e.target.value }))} style={{ borderColor: colors.intBorder, backgroundColor: colors.intFill }} type="email" placeholder='user@mail.com' />
                        <img style={{ position: "absolute", top: 28, left: 15 }} src={images.User} alt="" />
                    </div>
                    <div style={{ position: "relative" }}>
                        <input id='password' onChange={(e) => setUserCredentials((prev) => ({ ...prev, password: e.target.value }))} style={{ borderColor: colors.intBorder, backgroundColor: colors.intFill }} type="password" placeholder='************' />
                        <img style={{ position: "absolute", top: 20, left: 15 }} src={images.Lock} alt="" />
                        {hidePass ? (
                            <img onClick={() => setHidePass(!hidePass)} style={{ position: "absolute", top: 22, right: 15 }} src={images.EyeOff} alt="" />
                            ) : (
                            <img onClick={() => setHidePass(!hidePass)} style={{ position: "absolute", top: 22, right: 15 }} src={images.EyeOn} alt="" />
                        )}
                    </div>
                    <a href="#">Unable to sign in?</a>
                    <div>
                        <button type='submit' style={{ backgroundColor: colors.primary }}>Login</button>
                    </div>
                    {isLoading && (
                        <div className={styles.loaderBg} style={{ 
                            position: "absolute", 
                            width: "100%", 
                            height: "100%", 
                            display: "flex", 
                            justifyContent: "center", 
                            alignItems: "center",
                            zIndex: 100,
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        }}>
                            <div className={styles.loader}></div>
                        </div>
                    )}
                </form>
            </div>
            <div className={styles.footer}>
                <div className={styles.login__options}>
                    <div></div>
                    <p style={{ color: colors.lightGrayTxt }}>Or Sign in with</p>
                    <div></div>
                </div>
                <div className={styles.SigninOption}>
                    <button>
                        <img src={images.Google} alt="signin option" />
                    </button>
                    <button>
                        <img src={images.Apple} alt="signin option" />
                    </button>
                    <button>
                        <img src={images.Facebook} alt="signin option" />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login;