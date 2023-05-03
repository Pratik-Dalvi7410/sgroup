import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        {/* <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/HRhJVGjIraE?start=404"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d4578.661551827617!2d74.04656!3d19.846677!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDUwJzQxLjMiTiA3NMKwMDInNDUuMSJF!5e1!3m2!1sen!2sus!4v1683114616909!5m2!1sen!2sus"
          width="100%"
          height="100%"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

  
      </div>
    </div>
  );
};

export default Map;
