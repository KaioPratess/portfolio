const Home = (props) => {
  const scrollDown = () => {
    const aboutSec = document.querySelector('.about');
    const rect = aboutSec.getBoundingClientRect();
    window.scrollTo({
      top: rect.top + window.scrollY,
      behavior: 'smooth',
    });
  };

  return (
    <section className="home sec" data-sec={props.sec}>
      <div className="home-desc">
        <span>Hi, my name is</span>
        <h1>Kaio Prates.</h1>
        <h2>I'm a Front End Developer</h2>
      </div>
      <div className="arrow-down" onClick={scrollDown}>
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          id="arrow_down"
          data-name="arrow down"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <clipPath id="clip-path">
              <rect
                id="Mask"
                width="24"
                height="24"
                fill="none"
                stroke="#fff"
                strokeWidth="1"
              />
            </clipPath>
          </defs>
          <g
            id="_20x20_arrow-back--grey"
            data-name="20x20/arrow-back--grey"
            transform="translate(0 24) rotate(-90)"
          >
            <rect
              id="Mask-2"
              data-name="Mask"
              width="24"
              height="24"
              fill="none"
            />
            <g
              id="_20x20_arrow-back--grey-2"
              data-name="20x20/arrow-back--grey"
              clipPath="url(#clip-path)"
            >
              <g id="Group_2" data-name="Group 2" transform="translate(8 7)">
                <path
                  id="Rectangle"
                  d="M0,6.586V0H6.586"
                  transform="translate(0.686 5.157) rotate(-45)"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit="10"
                  strokeWidth="1.5"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Home;
