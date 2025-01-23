export const FormInput = ({ 
  id, 
  name, 
  type = 'text',
  label, 
  error, 
  value, 
  onChange, 
  onBlur, 
  onMouseDown, 
  onKeyDown,
  placeholder,
  required = false,
  autoComplete,
  isHoneypot = false,
}) => (
  <div 
    className="form-group" 
    {...(isHoneypot ? { 'aria-hidden': 'true' } : {})}
  >
    <div className="label-container">
      <label htmlFor={id} className="form-label mb-1">
        {label}
        {!isHoneypot && (
          <span className="visually-hidden">{required ? ' (required)' : ' (optional)'}</span>
        )}
      </label>
      {error && !isHoneypot && (
        <span
          id={`${id}-error`}
          className="inline-error"
          role="alert"
          aria-label={error.aria}
        >
          {error.visual}
        </span>
      )}
    </div>
    <input
      type={type}
      id={id}
      name={name}
      autoComplete={autoComplete}
      className="form-input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onMouseDown={onMouseDown}
      onKeyDown={onKeyDown}
      required={required}
      aria-required={required}
      aria-invalid={!!error}
      aria-describedby={!isHoneypot && error ? `${id}-error ${id}-description` : `${id}-description`}
      tabIndex={isHoneypot ? -1 : undefined}
    />
    {!isHoneypot && (
      <span id={`${id}-description`} className="visually-hidden">
        {placeholder}
      </span>
    )}
  </div>
);