/**
 * ProjectImage component handles project screenshot display with error handling
 * Implements accessible image loading states and error messaging
 * Uses semantic HTML with figure element and decorative overlay
 */
export const ProjectImage = ({ image, title, setImageError, imageError }) => (
  <figure
    className="project-image-container m-0"
    aria-label={`${title} project screenshot`}
  >
    {/* Project screenshot with error state handling */}
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
    {/* Error message for failed image loads - announced to screen readers */}
    {imageError && (
      <div className="image-error" role="alert" aria-live="polite">
        Unable to load project image. Please check your connection and try again.
      </div>
    )}
    {/* Decorative overlay for visual styling */}
    <div className="image-overlay" role="presentation" aria-hidden="true" />
  </figure>
);