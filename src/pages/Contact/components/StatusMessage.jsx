import { CheckCircle, XCircle } from 'lucide-react';

export const StatusMessage = ({ status }) => {
  const isError = status?.includes('error');

  return (
    <div
      className={`status-message-container ${status ? 'show' : ''}`}
      aria-live="polite"
      aria-relevant="additions text"
      aria-atomic="true"
    >
      <div
        id="submit-status"
        className={`status-message ${isError ? 'error' : 'success'} ${status ? 'show' : ''}`}
        tabIndex={status ? -1 : undefined}
        role="status"
      >
        {isError ? (
          <XCircle className="status-icon" size={20} aria-hidden="true" />
        ) : (
          <CheckCircle className="status-icon" size={20} aria-hidden="true" />
        )}
        <span>{status}</span>
      </div>
    </div>
  );
};