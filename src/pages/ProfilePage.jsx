import React, { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData, removeUser } from "../store/userSlice";
import PageLayout from "../components/styled/PageLayout";
import FlexContainer from "../components/styled/FlexContainer";
import Text from "../components/styled/Text";
import Button from "../components/styled/Button";
import { Navigate } from "react-router-dom";
import FirestoreService from "../services/FirestoreService";

const ProfilePage = () => {

    const { isAuth, userId } = useAuth();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    useEffect(() => {
        dispatch(fetchUserData(userId));
    }, []);

    return (!isAuth) ? <Navigate to={"/sign-up"} /> : (
        <PageLayout>
            <FlexContainer maxWidth={"80%"} direction={"column"} gap={"30px"} justify={"center"} margin={"0px 0px 30px 0px"}>
                <Text color={"#2c2c2c"} size={"1.4em"}>
                    {
                        user.name
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