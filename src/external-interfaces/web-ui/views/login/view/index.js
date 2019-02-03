
export const loginView = ({
    viewFramework: React,
    styles
}) => ({
    handleRegister,
    handleLogin,
    switchToRegister,
    switchToLogin,
    mode,
    err,
    errMsg,
    headerText,
    infoText,
    linkText
}) => {
    const pwRef = React.createRef()
    const confirmPwRef = React.createRef()
    const isLogin = mode === 'login'
    const linkTextFunc = isLogin ? 
    () => {
        pwRef.current.value = ''
        switchToRegister()
     } : 
    () => {
        pwRef.current.value = ''
        switchToLogin()
    }
    const sumbitFunc = isLogin ? 
    () => handleLogin({ password: pwRef.current.value }) :
    () => handleRegister({
        password: pwRef.current.value,
        confirmPassword: confirmPwRef.current.value
    })
    return (
        <div className="fill-parent flex-column column-center">
            <div className="flex-column column-center" style={styles.logoContainer}>
                <img style={styles.logo} src={require('../../../resources/images/logo.png')} />
            </div>
            <div className="flex-column" style={styles.formAuth}>
                <div className="flex-column card" style={styles.formCard}>
                    <div className="flex-row" style={styles.formHeader}>{headerText}</div>
                    <div style={styles.formContent}>
                        <div style={styles.inputContainer}>
                            <input 
                                type='password' 
                                style={styles.input} 
                                className="input" 
                                ref={pwRef} 
                                placeholder={'Password'} 
                            />
                            { !isLogin &&
                                <input 
                                    type='password' 
                                    style={styles.input} 
                                    className="input" 
                                    ref={confirmPwRef} 
                                    placeholder={'Confirm Password'}
                                />
                            }
                        </div>
                        <button style={styles.btn} className="btn" onClick={sumbitFunc}>SUBMIT</button>
                    </div>
                </div>
                <div className="flex-row row-center card-no-shadow" style={styles.infoContainer}>
                    <div>
                        {infoText} <button style={styles.linkBtn} onClick={linkTextFunc}> {linkText} </button>
                    </div>
                </div>
            </div>
        </div>
    )
}