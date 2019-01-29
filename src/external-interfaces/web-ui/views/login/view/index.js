
export const loginView = ({
    viewFramework: React,
    styles
}) => ({
    savePasswordAndLogin
}) => {
    console.log("Rendered")
    let pwRef = React.createRef()
    let confirmPwRef = React.createRef()
    return (
        <div className="fill-parent flex-row">
            <div className="flex-column" style={styles.leftPanel}>
                <img style={styles.logo} src={require('../../../resources/images/logo.png')} />
            </div>
            <div className="flex-column" style={styles.rightPanel}>
                <div className="flex-column card" style={styles.formCard}>
                    <div className="flex-row" style={styles.formHeader}>Register</div>
                    <div style={styles.formContent}>
                        <div style={styles.inputContainer}>
                            <input type='password' style={styles.input} className="input" ref={pwRef} placeholder={'Password'} />
                            <input type='password' style={styles.input} className="input" ref={confirmPwRef} placeholder={'Confirm Password'} />
                        </div>
                        <button style={styles.btn} className="btn" onClick={() => savePasswordAndLogin({
                            password: pwRef.current.value,
                            confirmPassword: confirmPwRef.current.value
                        })}>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}