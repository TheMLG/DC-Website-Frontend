import React from 'react';
import '../styles/magcard.css'

const magData = [
  {
    title: "દશનામ સર્ક્યુલર-અંક 06",
    date: "18/01/06",
    views: 1555,
    likes: 1500,
    coverImage: '../assets/gallery/dc-v-fp.jpg'
  },
  {
    title: "દશનામ સર્ક્યુલર-અંક 05",
    date: "18/01/06",
    views: 1555,
    likes: 1500,
    coverImage: '../assets/gallery/dc-v-1.jpg'
  },
  {
    title: "દશનામ સર્ક્યુલર-અંક 07",
    date: "18/01/06",
    views: 1555,
    likes: 1500,
    coverImage: '../assets/gallery/dc-v-2.jpg'
  },

  {
    title: "દશનામ સર્ક્યુલર-અંક 08",
    date: "18/01/06",
    views: 1555,
    likes: 1500,
    coverImage: '../assets/gallery/dc-v-add.jpg'
  },

  {
    title: "દશનામ સર્ક્યુલર-અંક 09",
    date: "18/01/06",
    views: 1555,
    likes: 1500,
    coverImage: '../assets/gallery/dc-v-lp.jpg'
  },

  {
    title: "દશનામ સર્ક્યુલર-અંક 10",
    date: "18/01/06",
    views: 1555,
    likes: 1500,
    coverImage: '../assets/gallery/dc-v-lp2.jpg'
  }

]

function Magcard() {
  return (
    <>
      {magData.map((magData, index) => (
        <div className="magcard" key={index}>

          <section className="frontpage" aria-label="Magazine cover image" style={{ backgroundImage: `url(${magData.coverImage})` }}></section>
          <div className="title">{magData.title}</div>
          <div className="date">1{magData.date}</div>
          <div className="datas" aria-label="Magazine statistics">
            <div className="views" aria-label="Number of views">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8z" />
                <path d="M8 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" fill="#fff" />
              </svg>
              <span className="count">{magData.views}</span>
            </div>
            <div className="likes" aria-label="Number of likes">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M8 2.748l-.717-.737C5.6.281 2.514 3.04 3.312 6.09c.2.7.8 1.4 1.688 2.1L8 13l3-4.81c.888-.7 1.488-1.4 1.688-2.1.798-3.05-2.288-5.81-4.971-3.645L8 2.748z"
                />
              </svg>
              <span className="count">{magData.likes}</span>
            </div>
          </div>
        </div >
      ))}
    </>
  );
}

export default Magcard;