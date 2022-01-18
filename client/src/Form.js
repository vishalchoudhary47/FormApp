import {useState} from "react";
const Form = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phoneNo: "",
    date: "",
  });

  const handelChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormdata({ ...formdata, [name]: value });
  };

  const handelSubmit = async (e) =>{
      e.preventDefault();
      let {name, email, phoneNo, date} = formdata;
      const res = await fetch('/',{
        method: "POST",
        headers: {
          "Content-Type": "apllication/json"
        },
        body: JSON.stringify({
          name,
          email,
          phoneNo,
          date
        }),
      })
      console.log(res);
      console.log(name, email, phoneNo, date);
  }

  return (
    <>
      <div className="container">
        <form className="row g-3" method="POST">
          <div className="col-md-6">
            <label for="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formdata.name}
              onChange={handelChange}
              id="name"
            />
          </div>
          <div className="col-md-6">
            <label for="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formdata.email}
              onChange={handelChange}
              id="email"
            />
          </div>
          <div className="col-md-6">
            <label for="phoneNo" className="form-label">
              Phone NO.
            </label>
            <input
              type="text"
              className="form-control"
              name="phoneNo"
              value={formdata.phoneNo}
              onChange={handelChange}
              id="phoneNo"
            />
          </div>
          <div className="col-12">
            <label for="date" className="form-label">
              Date
            </label>
            <input
              type="date"
              className="form-control"
              name="date"
              value={formdata.date}
              onChange={handelChange}
              id="date"
              placeholder="1234 Main St"
            />
          </div>
          <div className="col-12">
            <button onClick={handelSubmit} className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Form;
