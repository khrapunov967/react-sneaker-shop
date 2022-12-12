import React from "react";
import FlexContainer from "./styled/FlexContainer";
import Text from "./styled/Text";

const NotFoundMsg = ({msg}) => {
    return (
        <FlexContainer maxWidth={"100%"} justify={"center"} margin={"0px 0px 30px 0px"}>
            <Text size={"1.3em"}>
                {
                    msg
                }
            </Text>
        </FlexContainer>
    );
};

export default NotFoundMsg;