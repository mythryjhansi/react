export default function Alert({ type, message }) {

    const alertClass = type === 'success' ? 'alert-success' : 'alert-failure';
    return (
        <p className={`alert ${alertClass}`}>{message}</p>
    )
}