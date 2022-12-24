import React, { useState} from "react";
import { doc, setDoc } from "firebase/firestore"; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app, db } from "../firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/styled/PageLayout";
import FlexContainer from "../components/styled/FlexContainer";
import Title from "../components/styled/Title";
import Input from "../components/styled/Input";
import Button from "../components/styled/Button";
import Text from "../components/styled/Text";
import RouterLink from "../components/styled/RouterLink";
import Header from "../components/Header";

const SignUpPage = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignUp = (e, name, email, password) => {
        e.preventDefault();
        const auth = getAuth(app);

        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(addUser({
                    userId: user.uid,
                }));

                setDoc(doc(db, "users", user.uid), {
                    id: user.uid,
                    name,
                    cart: JSON.parse(localStorage.getItem("cart")) || []
                }).then((docRef) => console.log(`User added with id=${docRef.id}`))


                navigate("/profile");
            })
            .catch((reason) => console.log(reason))
    };

    return (
        <PageLayout>
            <Header />

            <FlexContainer maxWidth={"80%"} direction={"column"} justify={"center"} margin={"0px 0px 30px 0px"}>
                <Title size={"1.7em"} margin={"0px 0px 10px 0px"}>
                    Sign Up
                </Title>

                <form action="#" className="flex flex-col gap-2 mb-2">
                    <Input 
                        type={"text"}
                        placeholder={"Name"}
                        border={"solid 1px #2c2c2c44"}
                        padding={"4px 7px"}
                        textSize={"1.1em"}
                        radius={"10px"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

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

                    <Button width={"100%"} background={'#FF3C78'} border={"solid 1px #FF3C78"} radius={"10px"} padding={"4px 7px"} textColor={"#fff"} onClick={(e) => handleSignUp(e, name, email, password)}>
                        Sign Up
                    </Button>
                </form>

                <Text>
                    Already have an account? 
                    <RouterLink to={"/sign-in"}>
                        Sign In
                    </RouterLink>
                </Text>
            </FlexContainer>
        </PageLayout>
    );
};

export default SignUpPage;