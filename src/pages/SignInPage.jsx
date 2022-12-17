import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import FirestoreService from "../services/FirestoreService";
import PageLayout from "../components/styled/PageLayout";
import FlexContainer from "../components/styled/FlexContainer";
import Title from "../components/styled/Title";
import Input from "../components/styled/Input";
import Button from "../components/styled/Button";
import Text from "../components/styled/Text";
import RouterLink from "../components/styled/RouterLink";

const SignInPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const cart = useSelector(state => state.user.cart);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignIn = (e, email, password) => {
        e.preventDefault();

        const auth = getAuth(app);

        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(addUser({
                    userId: user.uid,
                }));

                FirestoreService.setCart(user.uid, cart);

                navigate("/profile");
            })
    };

    return (
        <PageLayout>
            <FlexContainer maxWidth={"80%"} direction={"column"} justify={"center"} margin={"0px 0px 30px 0px"}>
                <Title size={"1.7em"} margin={"0px 0px 10px 0px"}>
                    Sign In
                </Title>

                <form action="#" className="flex flex-col gap-2 mb-2">
                    <Input 
                        type={"email"}
                        placeholder={"Email"}
                        border={"solid 1px #2c2c2c44"}
                        padding={"4px 7px"}
                        textSize={"1.1em"}
                        radius={"10px"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input 
                        type={"password"}
                        placeholder={"Password"}
                        border={"solid 1px #2c2c2c44"}
                        padding={"4px 7px"}
                        textSize={"1.1em"}
                        radius={"10px"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button width={"100%"} background={'#FF3C78'} border={"solid 1px #FF3C78"} radius={"10px"} padding={"4px 7px"} textColor={"#fff"} onClick={(e) => handleSignIn(e, email, password)}>
                        Sign In
                    </Button>
                </form>

                <Text>
                    Don't have an account? 
                    <RouterLink to={"/sign-up"}>
                        Sign Up
                    </RouterLink>
                </Text>
            </FlexContainer>
        </PageLayout>
    );
};

export default SignInPage;