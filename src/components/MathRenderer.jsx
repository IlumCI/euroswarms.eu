import { useEffect, useRef } from 'react';

function MathRenderer({ children, display = false }) {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.MathJax && ref.current) {
      try {
        window.MathJax.typesetPromise([ref.current]).catch((err) => {
          console.error('MathJax typeset error:', err);
        });
      } catch (error) {
        console.error('MathJax error:', error);
      }
    }
  }, [children]);

  useEffect(() => {
    if (typeof window !== 'undefined' && !window.MathJax) {
      try {
        const mathJaxScript = document.createElement('script');
        mathJaxScript.id = 'MathJax-script';
        mathJaxScript.async = true;
        mathJaxScript.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
        mathJaxScript.onload = () => {
          try {
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
          } catch (error) {
            console.error('MathJax initialization error:', error);
          }
        };
        mathJaxScript.onerror = (error) => {
          console.error('MathJax script load error:', error);
        };
        document.head.appendChild(mathJaxScript);
      } catch (error) {
        console.error('MathJax setup error:', error);
      }
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

