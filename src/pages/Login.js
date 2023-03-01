import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {login} from "../services/userService";
import {Field, Form, Formik} from "formik";
import swal from "sweetalert";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (value) => {
        dispatch(login(value)).then((state) => {
            if (state.payload.data !== "User not found" && state.payload.data !== "Wrong password") {
                console.log(state.payload.data)
                swal("Đăng nhập thành công!", {
                    icon: "success",
                }).then(() => {
                    return navigate('/home')
                });

            } else {
                swal("Sai mật khẩu hoặc tài khoản!", {});
                return navigate('/')
            }
        })
    }
    return (


        <div className="login-wrap">


            <div className="login-html">
                <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label htmlFor="tab-1"
                                                                                              className="tab">Login
            </label>
                <input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2"
                                                                                      className="tab">Register</label>
                <div className="login-form">
                    <Formik initialValues={{username: '', password: ''}} onSubmit={(values) => {

                        handleLogin(values)
                    }}>
                        <Form>
                            <div className="sign-in-htm">
                                <div className="group">
                                    <label htmlFor="user" className="label">Username</label>
                                    <Field id="user1" type="text" className="input" name={'username'}/>
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Password</label>
                                    <Field id="pass" type="password" className="input" data-type="password"
                                           name={'password'}/>
                                </div>
                                <div className="group">
                                    <Field id="check" type="checkbox" className="check" checked/>
                                    <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
                                </div>
                                <div className="group">
                                    <Field type="submit" className="button" value="Login"/>
                                </div>
                                <div className="hr"></div>
                                <div className="foot-lnk">
                                    <a href="#forgot">Forgot Password?</a>
                                </div>


                            </div>
                        </Form>
                    </Formik>


                    <Formik initialValues={{username: '', password: ''}} onSubmit={(values) => {

                        handleLogin(values)
                    }}>


                        <Form>


                            <div className="sign-up-htm">


                                <div className="group">
                                    <label htmlFor="user" className="label">Username</label>
                                    <Field id="user2" type="text" className="input" name={'username'}/>
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Password</label>
                                    <Field id="pass1" type="password" className="input" data-type="password"
                                           name={'password'}/>
                                </div>

                                <div className="group">
                                    <input type="submit" className="button" value="Sign Up"/>
                                </div>
                                <div className="hr"></div>
                                <div className="foot-lnk">
                                    <a> <label htmlFor="tab-1">Already Member?</label></a>
                                </div>


                            </div>
                        </Form>


                    </Formik>


                </div>
            </div>


        </div>
    )
}
