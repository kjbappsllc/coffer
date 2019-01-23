import { styles } from './inline-styles'

export const loginView = ({
    viewFramework: React
}) => ({
    onSubmit
}) => (
    <div className="fill-parent flex">
        <div className="flex-column" style={styles.leftPanel}> Hello </div>
        <div className="flex"></div>
    </div>
)