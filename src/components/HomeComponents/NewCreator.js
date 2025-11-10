import React from 'react'

const trendingCreators = [
  {
    id: 1,
    name: "Lorem Ipsum",
    image: "/assets/creator/aiony-haust-Nsze2HlxoZo-unsplash.jpg",
  },
  {
    id: 2,
    name: "Lorem Ipsum",
    image: "/assets/creator/alexandru-zdrobau-BGz8vO3pK8k-unsplash.jpg",
  },
  {
    id: 3,
    name: "Lorem Ipsum",
    image: "/assets/creator/jayson-hinrichsen-xr2Mt6zIdU8-unsplash.jpg",
  },
  {
    id: 4,
    name: "Lorem Ipsum",
    image: "/assets/creator/kateryna-hliznitsova-N3npWnOj2S8-unsplash.jpg",
  },
];

const NewCreator = () => {
  return (
    <section className="trending-section py-5">
      <div className="container">
        {/* Section Heading */}
        <div className="mb-5 d-flex justify-content-between align-items-center">
            <div>
          <h2 className="section-heading mb-2">
            <span>Categories</span>
          </h2>
          <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="#" className="view_more_btn">View More</a>
        </div>
        </div>

        {/* Grid Layout */}
        <div className="row g-4">
          {trendingCreators.map((creator) => (
            <div key={creator.id} className="col-12 col-sm-6 col-lg-3">
              <div className="creator-card">
                <div className="creator-img-wrapper">
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="img-fluid creator-img"
                  />
                </div>
                <div className="creator-info">
                  <h5 className="creator-name">{creator.name}</h5>
                  <button className="btn btn-outline-light w-100 mt-3 follow-btn">
                    View 
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewCreator;