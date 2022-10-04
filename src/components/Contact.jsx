import { useEffect, useRef } from 'react';

const Contact = (props) => {
  const div1 = useRef();
  const div2 = useRef();
  const h3 = useRef();

  const handleMouseOver = (e) => {
    e.target.classList.add('rotate-center');
  };

  const handleMouseLeave = (e) => {
    e.target.classList.remove('rotate-center');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add('fade-in-left1');
          entries[0].target.style.visibility = 'visible';
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 1,
      },
    );

    observer.observe(div1.current);

    const observer1 = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add('fade-in-right2');
          entries[0].target.style.visibility = 'visible';
        }
      },
      {
        threshold: 1,
      },
    );

    observer1.observe(div2.current);

    const observer2 = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add('fade-in-left1');
          entries[0].target.style.visibility = 'visible';
        }
      },
      {
        threshold: 1,
      },
    );

    observer2.observe(h3.current);
  }, []);

  return (
    <section className="contact sec" data-sec={props.sec}>
      <h3 ref={h3}>Contact</h3>
      <div className="contact-grid">
        <div className="contact-div1" ref={div1}>
          <p>I’m available for full time projects. Let’s work together!</p>
          <a
            href="https://www.linkedin.com/in/kaioprates/"
            target="_blank"
            rel="noopener"
          >
            Say Hello
          </a>
        </div>
        <div className="contact-div2" ref={div2}>
          <div className="location">
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 55 55"
              xmlSpace="preserve"
            >
              <path
                d="M54.584,2.189c-0.261-0.188-0.597-0.241-0.901-0.137l-17.73,5.91L19.229,4.027c-0.042-0.01-0.083,0.004-0.125,0
                c-0.107-0.011-0.214-0.025-0.321-0.002l-18,4C0.326,8.127,0,8.532,0,9.001v43c0,0.304,0.138,0.59,0.375,0.78
                c0.179,0.144,0.4,0.22,0.625,0.22c0.072,0,0.145-0.008,0.217-0.023l17.807-3.957l16.802,2.965c0.058,0.011,0.116,0.016,0.174,0.016
                c0.121,0,0.24-0.024,0.352-0.066c0.003-0.001,0.007,0,0.01-0.002l18-7C54.747,44.783,55,44.413,55,44.001v-41
                C55,2.679,54.846,2.378,54.584,2.189z M2,9.802l16-3.555v40.951L2,50.754V9.802z M20,6.263l15,3.529v40.016l-15-2.646V6.263z
                M53,43.317l-16,6.222V9.721l16-5.333V43.317z"
              />
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
            <p>Sao Paulo, Brazil</p>
          </div>
          <div className="email">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 64 64"
              enableBackground="new 0 0 64 64"
              xmlSpace="preserve"
            >
              <path
                id="Mail"
                d="M58.0034485,8H5.9965506c-3.3136795,0-5.9999995,2.6862001-5.9999995,6v36c0,3.3137016,2.6863203,6,5.9999995,6
                h52.006897c3.3137016,0,6-2.6862984,6-6V14C64.0034485,10.6862001,61.3171501,8,58.0034485,8z M62.0034485,49.1108017
                L43.084549,30.1919994l18.9188995-12.0555992V49.1108017z M5.9965506,10h52.006897c2.2056007,0,4,1.7943001,4,4v1.7664003
                L34.4677505,33.3134003c-1.4902,0.9492989-3.3935013,0.9199982-4.8495998-0.0703011L1.9965508,14.4694996V14
                C1.9965508,11.7943001,3.7910507,10,5.9965506,10z M1.9965508,16.8852005L21.182251,29.9251003L1.9965508,49.1108017V16.8852005z
                M58.0034485,54H5.9965506c-1.6473999,0-3.0638998-1.0021019-3.6760998-2.4278984l20.5199013-20.5200024l5.6547985,3.843401
                c1.0859013,0.7383003,2.3418007,1.1083984,3.5995998,1.1083984c1.1953011,0,2.3925018-0.3339996,3.4463005-1.0048981
                l5.8423996-3.7230015l20.2961006,20.2961025C61.0673485,52.9978981,59.6508713,54,58.0034485,54z"
              />
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
            <p>kaio_prates@hotmail.com</p>
          </div>
          <a
            href="https://drive.google.com/drive/folders/1lHp3DeVD9cWWV3ATumvRenSl_0eQel84?usp=sharing"
            target="_blank"
            rel="noopener"
          >
            Resume
          </a>
        </div>
      </div>
      <div className="social fade-in-bottom">
        <div>
          <a
            href="https://github.com/KaioPratess"
            target="_blank"
            rel="noopener"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-github"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/kaioprates_/"
            target="_blank"
            rel="noopener"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-instagram"
            >
              <title>Instagram</title>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/kaioprates/"
            target="_blank"
            rel="noopener"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-linkedin"
            >
              <title>LinkedIn</title>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
