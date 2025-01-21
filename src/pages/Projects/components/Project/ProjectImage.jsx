export const ProjectImage = ({ image, title, setImageError, imageError }) => (
  <figure
    className="project-image-container m-0"
    aria-label={`${title} project screenshot`}
  >
    <img
      src={image}
      alt={`Screenshot of ${title} project interface`}
      className="project-image"
      width="100%"
      height="auto"
      loading="eager"
      onError={() => setImageError(true)}
      aria-hidden={imageError}
      role="presentation"
    />
    {imageError && (
      <div className="image-error" role="alert" aria-live="polite">
        Unable to load project image. Please check your connection and try again.
      </div>
    )}
    <div className="image-overlay" role="presentation" aria-hidden="true" />
  </figure>
);