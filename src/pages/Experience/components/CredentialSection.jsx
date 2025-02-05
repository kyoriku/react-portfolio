import { motion } from 'framer-motion';
import { CredentialItem } from './CredentialItem';

export const CredentialSection = ({ data, id, variants, type }) => (
  <div className="certificate-category">
    <motion.ul
      className="certificates-container"
      variants={variants?.container}
      initial="hidden"
      animate="visible"
      aria-label={`${type === 'education' ? 'Education' : 'Certificates'} - ${data.length} total`}
    >
      {data.slice().reverse().map(item => (
        <CredentialItem
          key={item.id}
          item={item}
          variants={variants?.item}
          type={type}
        />
      ))}
    </motion.ul>
  </div>
);