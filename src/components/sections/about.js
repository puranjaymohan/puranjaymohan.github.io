import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const areas = [
    'BPF JITs',
    'BPF verifier',
    'RCU',
    'Memory models',
    'Live patching',
    'Performance work',
  ];
  const tools = [
    'C',
    'arm64, x86 and RISC-V asm',
    'perf and bpftool',
    'herd7 / LKMM litmus tests',
    'kpatch, objtool',
    'Python and shell',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              My first kernel patch went in back in 2019, while I was an undergrad in Chennai doing
              driver cleanups. Then came IIO drivers for sensors I had on my desk, a Linux
              Foundation mentorship on PCIe power management, a Google Summer of Code project that
              became the upstream ADXL355 driver, and an internship at Texas Instruments upstreaming
              support for the PRU subsystem on their SoCs.
            </p>
            <p>
              At AWS I worked on the kernel that runs under EC2, and that's where BPF got me. I
              started by fixing things in the arm64 JIT and never really stopped: the program-pack
              allocator, BPF exceptions, kCFI support for JITed code, inlined per-CPU helpers. I
              picked up the arm32 JIT as maintainer in 2023 and the arm64 JIT in 2024, and I review
              the RISC-V JIT.
            </p>
            <p>
              At Meta I work more broadly across BPF and the kernel pieces it depends on: verifier
              state pruning, arena memory, iterator inlining, RCU callbacks that finish as soon as a
              grace period allows, and a memory model for BPF, along with a tool to test it on real
              hardware.
            </p>
            <p>
              The problems I like best sit where the compiler, the CPU's memory ordering and a
              kernel subsystem all have to agree with each other. I try to measure before I argue,
              which is why a good share of my recent patches are benchmarks and selftests. I also
              spend a lot of time reviewing other people's patches, which I think matters as much as
              writing my own.
            </p>
            <p>What I work on:</p>
          </div>

          <ul className="skills-list">
            {areas.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <div>
            <p>What I use:</p>
          </div>
          <ul className="skills-list">
            {tools.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpeg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
