import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const talks = [
  {
    year: '2026',
    title: 'blitmus: Litmus-testing the eBPF memory model on real hardware',
    event: 'Linux Plumbers Conference, Prague',
    url: 'https://lpc.events/event/20/contributions/2432/',
  },
  {
    year: '2026',
    title: 'Closing the BPF performance gap between arm64 and x86',
    event: 'LSF/MM/BPF Summit, Zagreb',
    url: 'https://lwn.net/Articles/1081033/',
  },
  {
    year: '2026',
    title: 'Letting RCU callbacks use expedited grace periods',
    with: 'Paul E. McKenney',
    event: 'LSF/MM/BPF Summit, Zagreb',
    url: 'https://lists.openwall.net/linux-kernel/2026/06/24/1055',
  },
  {
    year: '2024',
    title: 'BPF Instruction-Level Memory Model Progress',
    with: 'Paul E. McKenney',
    event: 'Linux Plumbers Conference, Vienna',
    url: 'https://lpc.events/event/18/sessions/181/',
  },
];

const StyledTalksSection = styled.section`
  max-width: 800px;

  ul {
    ${({ theme }) => theme.mixins.resetList};
  }

  li {
    display: grid;
    grid-template-columns: 70px 1fr;
    grid-gap: 20px;
    padding: 20px 0;
    border-bottom: 1px solid var(--lightest-navy);

    &:last-of-type {
      border-bottom: 0;
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      grid-gap: 5px;
    }
  }

  .year {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    line-height: 1.9;
  }

  h3 {
    margin: 0 0 5px;
    color: var(--lightest-slate);
    font-size: var(--fz-xl);
    font-weight: 500;
    line-height: 1.3;

    a {
      ${({ theme }) => theme.mixins.inlineLink};
      color: inherit;
    }
  }

  .event {
    margin: 0;
    color: var(--slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;

const Talks = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledTalksSection id="talks" ref={revealContainer}>
      <h2 className="numbered-heading">Talks</h2>

      <ul>
        {talks.map(({ year, title, event, url, with: coSpeaker }, i) => (
          <li key={i}>
            <span className="year">{year}</span>
            <div>
              <h3>
                <a href={url} target="_blank" rel="noreferrer">
                  {title}
                </a>
              </h3>
              <p className="event">
                {event}
                {coSpeaker && ` · with ${coSpeaker}`}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </StyledTalksSection>
  );
};

export default Talks;
