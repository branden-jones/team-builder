import React from "react";

const Form = (props) => {

    const handleChange = event => {
        const { name, value } = event.target;
        // The above variable does the same thing as:
        // const name = event.target.name  &
        // const value = event.target.value;
        props.change(name,value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.submit();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name
                <input
                    placeholder="Enter Your Name Here"
                    value={props.values.name}
                    name='name'
                    onChange={handleChange}
                />
            </label>
            <label>Email
                <input 
                    placeholder="Enter Your Email Here"
                    value={props.values.email}
                    name="email"
                    onChange={handleChange}
                />
            </label>
            <label>Role
                <input 
                    placeholder="What is your Role"
                    value={props.values.role}
                    name="role"
                    onChange={handleChange}
                />
            </label>
            <input type="submit" value="Create Your Team!" />
        </form>
    )
}

export default Form;