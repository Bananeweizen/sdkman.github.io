import Link from '@docusaurus/Link';

import styles from './styles.module.scss';

export default function OCButton() {
  return (
    <Link
      className={styles.button}
      href="https://opencollective.com/sdkman/contribute"
    >
      <img
        src="/img/open-collective-button.png"
        alt="Donate"
        width={240}
        height={35}
      />
    </Link>
  );
}