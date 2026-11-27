import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { kernelStats } from '@config';
import { useKernelStats } from '@hooks';

const StyledStats = styled.div`
  margin: 0 0 50px;

  ul {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 15px;

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }

  li {
    padding: 20px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
  }

  .num {
    display: block;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(26px, 5vw, 36px);
    line-height: 1.1;
  }

  .label {
    display: block;
    margin-top: 8px;
    color: var(--light-slate);
    font-size: var(--fz-sm);
    line-height: 1.3;
  }

  .note {
    margin: 12px 0 0;
    color: var(--slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }
`;

const MONTHS = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');

// Formatted by hand so the build (Node) and the browser render the same string.
const formatDate = iso => {
  const d = new Date(iso);
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
};

// Full grid of numbers, used in the Upstream section.
const KernelStats = () => {
  const { commits, reviewed, acked, updatedAt } = useKernelStats();

  return (
    <StyledStats>
      <ul>
        <li>
          <span className="num">{commits}</span>
          <span className="label">commits in mainline Linux</span>
        </li>
        <li>
          <span className="num">{reviewed + acked}</span>
          <span className="label">Reviewed-by and Acked-by tags on other people's patches</span>
        </li>
        <li>
          <span className="num">2019</span>
          <span className="label">first patch merged</span>
        </li>
      </ul>
      <p className="note">
        Counted from torvalds/linux, last checked {formatDate(updatedAt)}.{' '}
        <a href={kernelStats.logUrl} target="_blank" rel="noreferrer">
          See the log
        </a>
      </p>
    </StyledStats>
  );
};

// One-line version for the hero.
export const KernelStatsInline = ({ className }) => {
  const { commits } = useKernelStats();
  return (
    <a className={className} href={kernelStats.logUrl} target="_blank" rel="noreferrer">
      {commits} commits in mainline
    </a>
  );
};

KernelStatsInline.propTypes = {
  className: PropTypes.string,
};

export default KernelStats;
