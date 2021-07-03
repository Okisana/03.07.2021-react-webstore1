import { useState } from "react";

function AllCategories() {
  const img1 =
    "https://images.squarespace-cdn.com/content/v1/5db7d5b8c56cb031ac95e72c/1575026646139-PH0SERUKMYSVA99G2IM3/ke17ZwdGBToddI8pDm48kMR1yAHb8bPoH1-OdajP2rZZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpya-Yv2-AUIrtyc_1d9d84jKAfrgH35AgL5HDK7jKFTEAbkVb2mHFRzAaMt_-j0ggg/catgrass_optimze%281%29.jpg";

  const img2 =
    "https://i.natgeofe.com/n/f0dccaca-174b-48a5-b944-9bcddf913645/01-cat-questions-nationalgeographic_1228126.jpg";

  const img3 =
    "https://allaboutcats.com/wp-content/uploads/2021/01/Cat-Grass-1-1.jpg";

  const img4 =
    "https://1.bp.blogspot.com/-JB-pmbnAPPg/V9fugON7PMI/AAAAAAAABmQ/UUIwqj_0JgYGXB_l3tqjiboaIoeL8bS4wCLcB/s1600/717_3601568.JPG";
  const img5 =
    "https://www.catontheweb.com/wp-content/uploads/2014/09/cat-eating-grass-620x330.jpg";
  const img6 =
    "https://www.petfriendlyhouse.com/wp-content/uploads/2018/09/why-do-cats-eat-grass.jpg";

  const images = [img1, img2, img3, img4, img5, img6];

  const [BigImage, setImage] = useState(images[2]);

  const updateImage = (event) => {
    setImage(event.target.src);
  };

  const imagesList = images.map((imgElement) => {
    return (
      <div className="col-4 col-md-4">
        <img
          onClick={updateImage}
          className="imgRow"
          style={{ maxWidth: " 110px", height: " 75px", marginBottom: "10px" }}
          src={imgElement}
          alt=""
        />
      </div>
    );
  });

  return (
    <div>
      <div className="container">
        <div className="row pt-3">
          <p>Cool article</p>
        </div>

        <div className="row mt-1">
          <div className="col-12 col-md-4">
            <div className="row">
              <div id="bigDiv">
                <img
                  id="bigImage"
                  style={{ width: "360px", height: " 210px" }}
                  src={BigImage}
                  alt=""
                />
              </div>
            </div>

            <div className="row pt-3">{imagesList}</div>
          </div>

          <div className="col-10 col-md-8">
            <p className="p3">
              Cats are quirky creatures with many curious habits, but one odd
              behavior that has long puzzled cat lovers is grass eating. Though
              indoor-outdoor cats obviously have more access to the green stuff,
              even indoor cats are known to nibble on blades of grass if they go
              outside for some fresh air or to explore. First, eating plant
              material is very common: 71 percent of cats in the study nibbled
              plants at least six times in their life, and 61 percent ate plant
              material at least 10 times. Another finding was that most cats
              (91%) were acting normally and did not appear to be sick in the
              time immediately preceding the grass eating. Of all the cats that
              ate plant material, only about 27 percent frequently vomited after
              eating the green stuff.
            </p>
            <p className="p3">
              Cats are obligate carnivores, which means they are biologically
              designed to eat a primarily meat-based diet. Although cats can the
              digest grains, fruits, and vegetables found in commercial cat
              food, cats are not true omnivores, so plant material like grass
              would not be part of their diet in the wild.
            </p>
            <p className="p3">
              Recently, researchers at the University of California, Davis,
              School of Veterinary Medicine conducted an online survey of more
              than 1,000 cat owners asking about their cats’ penchant for eating
              grass and plants. The findings, presented in summer 2019 at the
              annual meeting of the International Society for Applied Ethology
              in Bergen, Norway, revealed some interesting facts about cats
              eating grass.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AllCategories;
