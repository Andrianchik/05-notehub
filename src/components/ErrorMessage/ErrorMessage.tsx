import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message?: string;
  onClose: () => void; 
}

export default function ErrorMessage({
  message = "An unexpected error occurred.",
  onClose,
}: ErrorMessageProps) {
  return (
    <div className={css.errorContainer}>
      <p className={css.errorMessage}>⚠️ Error: {message}</p>
      <button onClick={onClose} className={css.closeButton}>
        Retry
      </button>
    </div>
  );
}