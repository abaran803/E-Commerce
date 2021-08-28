const Category = () => {
  return (
    <div class="product py-5 my-5 bg-light" id="products">
      <div class="container">
        <div class="section_title text-center mb-5">
          <h1 class="text-capitalize">Categories</h1>
        </div>
        <div class="row mb-5">
          <div class="col-md-4 mb-4 col-12">
            <div class="single_product shadow text-center p-1">
              <div class="product_img">
                <a href="product.html">
                  <img
                    src="https://images.pexels.com/photos/6924339/pexels-photo-6924339.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    class="img img-fluid rounded"
                  />
                </a>
              </div>
              <div class="product_caption my-3">
                <h4>
                  <a href="product.html">xyz</a>
                </h4>
              </div>
              <div class="mt-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa, sapiente.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4 col-12">
            <div class="single_product shadow text-center p-1">
              <div class="product_img">
                <a href="product.html">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                    class="img img-fluid rounded"
                  />
                </a>
              </div>
              <div class="product_caption my-3">
                <h4>
                  <a href="product.html">xyz</a>
                </h4>
              </div>
              <div class="mt-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa, sapiente.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4 col-12">
            <div class="single_product shadow text-center p-1">
              <div class="product_img">
                <a href="product.html">
                  <img
                    src="https://images.pexels.com/photos/5654761/pexels-photo-5654761.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    class="img img-fluid rounded"
                  />
                </a>
              </div>
              <div class="product_caption my-3">
                <h4>
                  <a href="product.html">xyz</a>
                </h4>
              </div>
              <div class="mt-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa, sapiente.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-12">
            <div class="single_product shadow text-center p-1">
              <div class="product_img">
                <a href="product.html">
                  <img
                    src="https://images.pexels.com/photos/8286101/pexels-photo-8286101.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    class="img img-fluid rounded"
                  />
                </a>
              </div>
              <div class="product_caption my-3">
                <h4>
                  <a href="product.html">xyz</a>
                </h4>
              </div>
              <div class="mt-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa, sapiente.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4 col-12">
            <div class="single_product shadow text-center p-1">
              <div class="product_img">
                <a href="product.html">
                  <img
                    src="https://images.pexels.com/photos/7389142/pexels-photo-7389142.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    class="img img-fluid rounded"
                  />
                </a>
              </div>
              <div class="product_caption my-3">
                <h4>
                  <a href="product.html">xyz</a>
                </h4>
              </div>
              <div class="mt-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa, sapiente.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4 col-12">
            <div class="single_product shadow text-center p-1">
              <div class="product_img">
                <a href="product.html">
                  <img
                    src="https://images.pexels.com/photos/7000121/pexels-photo-7000121.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    class="img img-fluid rounded"
                  />
                </a>
              </div>
              <div class="product_caption my-3">
                <h4>
                  <a href="product.html">xyz</a>
                </h4>
              </div>
              <div class="mt-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa, sapiente.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4 col-12">
            <div class="single_product shadow text-center p-1">
              <div class="product_img">
                <a href="product.html">
                  <img
                    src="https://images.pexels.com/photos/7267023/pexels-photo-7267023.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    class="img img-fluid rounded"
                  />
                </a>
              </div>
              <div class="product_caption my-3">
                <h4>
                  <a href="product.html">xyz</a>
                </h4>
              </div>
              <div class="mt-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa, sapiente.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4 col-12">
            <div class="single_product shadow text-center p-1">
              <div class="product_img">
                <a href="product.html">
                  <img
                    src="https://images.pexels.com/photos/7241445/pexels-photo-7241445.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    class="img img-fluid rounded"
                  />
                </a>
              </div>
              <div class="product_caption my-3">
                <h4>
                  <a href="product.html">xyz</a>
                </h4>
              </div>
              <div class="mt-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa, sapiente.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4 col-12">
            <div class="single_product shadow text-center p-1">
              <div class="product_img">
                <a href="product.html">
                  <img
                    src="https://images.pexels.com/photos/7147444/pexels-photo-7147444.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    class="img img-fluid rounded"
                  />
                </a>
              </div>
              <div class="product_caption my-3">
                <h4>
                  <a href="product.html">xyz</a>
                </h4>
              </div>
              <div class="mt-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa, sapiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
