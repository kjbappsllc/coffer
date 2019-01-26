
export const loginView = ({
    viewFramework: React,
    styles
}) => ({
    savePasswordAndLogin,
    label
}) => {
    let pwRef = React.createRef()
    let confirmPwRef = React.createRef()
    return (
        <div className="fill-parent flex-row">
            <div className="flex-column" style={styles.leftPanel}>Coffer</div>
            <div className="flex-column" style={styles.rightPanel}>
                <div>Register</div>
                <input ref={pwRef} />
                <input ref={confirmPwRef} />
                <button onClick={() => savePasswordAndLogin({ 
                    password: pwRef.current.value, 
                    confirmPassword: confirmPwRef.current.value
                })}>Submit</button>
                <div>{label}</div>
            </div>
        </div>
    )
}