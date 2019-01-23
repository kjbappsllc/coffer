import { styles } from './inline-styles'

export const loginView = ({
    viewFramework: React
}) => ({
    onSubmit
}) => (
    <div className="fill-parent flex-row">
        <div className="flex-column" style={styles.leftPanel}> Hello </div>
        <div className="flex" style={styles.rightPanel}>Hey</div>
    </div>
)