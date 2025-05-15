
export function Modal({ onClose }: { onClose: () => void }) {
    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <h2>Bacaco que banana?</h2>
                <button onClick={onClose}>Sim</button>
            </div>
        </div>
    );
}

const styles = {
    overlay: {
        position: 'fixed' as const,
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
    },
    modal: {
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '8px',
    }
};