<form className="mt-3">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="card bg-light">
          <div className="card-body">
            <h3 className="font-weight-light mb-3">Check in</h3>
            <section className="form-group">
              <label
                className="form-control-label sr-only"
                htmlFor="displayName"
              >
                Name
              </label>
              <input
                required
                className="form-control"
                type="text"
                id="displayName"
                name="displayName"
                placeholder="Name"
              />
            </section>
            <section className="form-group">
              <label
                className="form-control-label sr-only"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                required
                className="form-control"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
            </section>
            <div className="form-group text-right mb-0">
              <button className="btn btn-primary" type="submit">
                Check in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>
