import React from 'react';

const Banner = ({ title, slogan }) => {
  return (
    <section className="hero is-primary">
  <div className="hero-body">
    <p className="title">
      Documentation
    </p>
    <p className="subtitle">
      Everything you need to <strong>create a website</strong> with Bulma
    </p>
  </div>
</section>
  );
};

export default Banner;
