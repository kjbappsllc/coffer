
export const loginView = ({
    viewFramework: React,
    styles
}) => ({
    onSubmit
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
                <button>Submit</button>
            </div>
        </div>
    )
}