import { useState } from "react";

export default function Form(props) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: "",
    });

    const inputChange = (e) => {
        setFormData((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const formOnSubmit = (e) => {
        e.preventDefault();

        const apiData = props.data;

        const matchedUser = apiData.find(
            (user) =>
                user.firstName.toLowerCase() ===
                    formData.firstName.toLowerCase() &&
                user.lastName.toLowerCase() ===
                    formData.lastName.toLowerCase() &&
                user.emailAddress.toLowerCase() ===
                    formData.emailAddress.toLowerCase() &&
                user.password.toLowerCase() === formData.password.toLowerCase()
        );

        if (matchedUser) {
            console.log(
                `Hello ${matchedUser.firstName} check your mails to benefit from our offer`
            );
        } else {
            console.log("No user found");
        }
    };

    return (
        <div className="form">
            <div className="header">
                <h2>
                    <span className="bold">Try it free 7 days</span> then
                    $20/mo. thereafter
                </h2>
            </div>
            <form onSubmit={formOnSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={inputChange}
                    required
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={inputChange}
                    required
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={inputChange}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={inputChange}
                    required
                />
                <button>claim your free trial</button>
                <p>
                    by clicking the button you are agreeing to our{" "}
                    <span className="red">Terms of services</span>
                </p>
            </form>
        </div>
    );
}
