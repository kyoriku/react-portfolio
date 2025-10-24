export const FormTextarea = ({
  id,
  name,
  label,
  error,
  value,
  onChange,
  onBlur,
  onMouseDown,
  onKeyDown,
  placeholder,
  rows = 8
}) => (
  <div className="form-group">
    <div className="label-container">
      <label htmlFor={id} className="form-label mb-1">
        {label}
        <span className="visually-hidden"> (required)</span>
      </label>
      {error && (
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
    <textarea
      id={id}
      name={name}
      className="form-input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onMouseDown={onMouseDown}
      onKeyDown={onKeyDown}
      required
      aria-required="true"
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error ${id}-description` : `${id}-description`}
      rows={rows}
    />
    <span id={`${id}-description`} className="visually-hidden">
      {placeholder}
    </span>
  </div>
);