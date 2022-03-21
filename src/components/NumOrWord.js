import React from "react";

const NumOrWord = (props) => {

    const { Input, TextColor, BGColor } = props;

    let IsANum = true;
    if (IsNaN(+props.input)) {
        IsANum = false;
    }

    const StyledPage = {
        color: `${TextColor}`,
        backgroundColor: `${BGColor}`,
    };

    return (
        IsANum ? <div className="display-1" style={StyledPage}>The number is: {Input}</div> : <div className="display-1" style={StyledPage}>The word is: {Input}</div>
    )

};

export default NumOrWord;