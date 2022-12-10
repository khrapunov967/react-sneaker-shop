import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/userSlice";
import PageLayout from "../components/styled/PageLayout";
import FlexContainer from "../components/styled/FlexContainer";
import Text from "../components/styled/Text";
import Button from "../components/styled/Button";
import SignUpPage from "./SignUpPage";

const ProfilePage = () => {

    const { isAuth, email } = useAuth();
    const dispatch = useDispatch();

    return !isAuth ? <SignUpPage /> : (
        <PageLayout>
            <FlexContainer maxWidth={"80%"} direction={"column"} gap={"30px"} justify={"center"} margin={"0px 0px 30px 0px"}>
                <Text color={"#2c2c2c"} size={"1.4em"}>
                    {
                        email
                    }
                </Text>

                <Button width={"100%"} maxWidth={"300px"} background={'#FF3C78'} border={"solid 1px #FF3C78"} radius={"10px"} padding={"4px 7px"} textColor={"#fff"} onClick={() => dispatch(removeUser())}>
                    Log Out
                </Button>
            </FlexContainer>
        </PageLayout>
    );
};

export default ProfilePage;