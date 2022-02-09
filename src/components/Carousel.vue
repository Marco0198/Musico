<template>
        <div
        id="multi-item-example"
        class="carousel slide text-danger carousel-multi-item"
        data-ride="carousel"
      >
        <!--Slides-->
        <div class="carousel-inner" role="listbox">
          <!--First slide-->
          <div class="carousel-item active">
            <div class="col-md-3" style="float: left">
              <div class="card shadow-lg p-3 mb-5 bg-white rounded mb-2">
                <img
                  class="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a class="btn btn-primary">Button</a>
                </div>
              </div>
            </div>

            <div class="col-md-3" style="float: left">
              <div class="card shadow-lg p-3 mb-5 bg-white rounded mb-2">
                <img
                  class="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a class="btn btn-primary">Button</a>
                </div>
              </div>
            </div>

            <div class="col-md-3" style="float: left">
              <div
                class="card shadow-lg p-3 mb-5 bg-white border-0 rounded mb-2"
              >
                <img
                  class="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a class="btn btn-primary">Button</a>
                </div>
              </div>
            </div>

            <div class="col-md-3" style="float: left">
              <div
                class="card shadow-lg p-3 mb-5 bg-white rounded border-0 mb-2"
              >
                <img
                  class="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a class="btn btn-primary">Button</a>
                </div>
              </div>
            </div>
          </div>
          <!--/.First slide-->

          <!--Second slide-->
          <div class="carousel-item">
            <div class="col-md-3" style="float: left">
              <div
                class="card shadow-lg p-3 mb-5 bg-white rounded mb-2 border-0"
              >
                <img
                  class="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-3" style="float: left">
              <div
                class="card shadow-lg p-3 mb-5 bg-white border-0 rounded mb-2"
              >
                <img
                  class="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-3" style="float: left">
              <div
                class="card shadow-lg p-3 mb-5 bg-white rounded border-0 mb-2"
              >
                <img
                  class="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-3" style="float: left">
              <div
                class="card shadow-lg p-3 mb-5 bg-white rounded border-0 mb-2"
              >
                <img
                  class="card-img-top border-0"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
components:{}
}
</script>

<style >
.heading {
  text-align: center;
  font-size: 2em;
  letter-spacing: 1px;
  padding: 40px;
}

.gallery-image {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.gallery-image img {
  height: 250px;
  width: 350px;
  transform: scale(1);
  transition: transform 0.4s ease;
}

.img-box {
  box-sizing: content-box;
  margin: 10px;
  height: 250px;
  width: 350px;
  overflow: hidden;
  display: inline-block;
  color: white;
  position: relative;
  background-color: white;
}

.caption {
  position: absolute;
  bottom: 5px;
  left: 20px;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.transparent-box {
  height: 250px;
  width: 350px;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  transition: background-color 0.3s ease;
}

.img-box:hover img {
  transform: scale(1.1);
}

.img-box:hover .transparent-box {
  background-color: rgba(0, 0, 0, 0.5);
}

.img-box:hover .caption {
  transform: translateY(-20px);
  opacity: 1;
}

.img-box:hover {
  cursor: pointer;
}

.caption > p:nth-child(2) {
  font-size: 0.8em;
}

.opacity-low {
  opacity: 0.5;
}
</style>