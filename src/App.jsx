import "./App.css";
import { useState } from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const [state, setState] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (data) => {
    console.log(data);
    setState(true);
  };
  return (
    <div>
      <center className="content">
        <div>
          <h3>{state == true ? <h4 className="text">Registration Successfull</h4> : ""}</h3>
        </div>
        <form onSubmit={handleSubmit(SubmitHandler)}>
          <div>
            <input
              type="text"
              placeholder="firstName"
              {...register("firstName", {
                required: "Please enter your First name",
              })}
            />
          </div>
          <div className="error">{errors.firstName ? errors.firstName.message : null}</div>
          <div>
            <input
              type="text"
              placeholder="lastName"
              {...register("lastName", {
                required: "Please enter your Last name",
              })}
            />
          </div>
          <div className="error">{errors.lastName ? errors.lastName.message : null}</div>
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true ,
              validate: (value) => {
                if(value.includes("@")) {
                  return true;
                }
                return "Invalid input"
              }})}
            />
          </div>
          <div className="error">{errors.email ? errors.email.message : null}</div>
          <div>
            <input type="password" placeholder="Password" {...register("password", {
              required:true,
              minLength: {
                value: 4,
                message:"Password should me more than 3 characters"
              },
              maxLength: {
                value:15,
                message:"Password should be less than 16 letters"
              }
            } )} />
          </div>
          <div className="error">
            {errors.password ? errors.password.message : null}
          </div>
          <div>
            <input type="submit" value={"Register"} className="submit"/>
          </div>
        </form>
      </center>
    </div>
  );
};

export default App;
