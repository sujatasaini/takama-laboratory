import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import Logo from './Logo';

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // 2 seconds total: 1.5s visible, 0.5s fade out
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 2000);

    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    if (svgRef.current) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const svg = d3.select(svgRef.current)
        .attr('width', width)
        .attr('height', height)
        .style('background', '#000000');

      const defs = svg.append('defs');
      const gradient = defs.append('linearGradient')
        .attr('id', 'wave-gradient')
        .attr('x1', '0%')
        .attr('y1', '100%')
        .attr('x2', '100%')
        .attr('y2', '0%');

      gradient.append('stop').attr('offset', '0%').attr('stop-color', '#ff2a2a');
      gradient.append('stop').attr('offset', '40%').attr('stop-color', '#4a4aff');
      gradient.append('stop').attr('offset', '80%').attr('stop-color', '#ff7b00');
      gradient.append('stop').attr('offset', '100%').attr('stop-color', '#ffffff');

      const numLines = 250;
      const linesData = Array.from({ length: numLines }, (_, i) => ({
        id: i,
        startY: (height / numLines) * i * 2 - height * 0.2,
        speed: 0.0002 + Math.random() * 0.0004,
        phase: Math.random() * Math.PI * 2,
        amp: 15 + Math.random() * 40,
        thickness: Math.random() * 1.5 + 0.5
      }));

      const lineGenerator = d3.line<[number, number]>()
        .x(d => d[0])
        .y(d => d[1])
        .curve(d3.curveBasis);

      const paths = svg.append('g')
        .style('mix-blend-mode', 'screen')
        .selectAll('path')
        .data(linesData)
        .enter()
        .append('path')
        .attr('fill', 'none')
        .attr('stroke', 'url(#wave-gradient)')
        .attr('stroke-width', d => d.thickness)
        .attr('opacity', 0.6);

      const timer = d3.timer((elapsed) => {
        paths.attr('d', d => {
          const points: [number, number][] = [];
          const segments = 80;
          for (let i = 0; i <= segments; i++) {
            const x = (i / segments) * width;
            const progress = x / width;
            
            const targetY = -height * 0.8;
            const ease = Math.pow(progress, 2.0);
            const baseY = d.startY * (1 - ease) + targetY * ease;

            const wave1 = Math.sin(x * 0.003 + elapsed * d.speed + d.phase) * d.amp * (1 - progress * 0.5);
            const wave2 = Math.sin(x * 0.007 - elapsed * d.speed * 1.5) * (d.amp * 0.3) * progress;
            
            points.push([x, baseY + wave1 + wave2]);
          }
          return lineGenerator(points);
        });
      });

      return () => {
        timer.stop();
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, []);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${fading ? 'opacity-0' : 'opacity-100'}`}>
      <svg ref={svgRef} className="absolute inset-0 z-0" />
      <div className="z-10 text-center flex flex-col items-center pointer-events-none">
        <Logo className="w-64 md:w-96" light />
      </div>
    </div>
  );
};

export default Preloader;
