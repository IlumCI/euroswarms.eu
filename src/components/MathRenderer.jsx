import { useEffect, useRef } from 'react';

function MathRenderer({ children, display = false }) {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.MathJax) {
      window.MathJax.typesetPromise([ref.current]).catch((err) => {
        console.error('MathJax typeset error:', err);
      });
    }
  }, [children]);

  useEffect(() => {
    if (typeof window !== 'undefined' && !window.MathJax) {
      const script = document.createElement('script');
      script.src = 'https://polyfill.io/v3/polyfill.min.js?features=es6';
      document.head.appendChild(script);

      const mathJaxScript = document.createElement('script');
      mathJaxScript.id = 'MathJax-script';
      mathJaxScript.async = true;
      mathJaxScript.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
      mathJaxScript.onload = () => {
        window.MathJax = {
          tex: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']],
            processEscapes: true,
            processEnvironments: true,
          },
          options: {
            skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
          },
        };
        if (ref.current) {
          window.MathJax.typesetPromise([ref.current]).catch((err) => {
            console.error('MathJax typeset error:', err);
          });
        }
      };
      document.head.appendChild(mathJaxScript);
    }
  }, []);

  const Tag = display ? 'div' : 'span';
  const className = display
    ? 'my-6 block overflow-x-auto'
    : 'inline-block align-middle';

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

export default MathRenderer;

