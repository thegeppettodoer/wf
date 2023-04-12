import React from "react";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-top: 0px;
  margin-bottom: 40px;
  padding-left: 5px;
`;

const User = styled.View`
  flex-direction: row;
  align-items: center;
`;
const UserName = styled.Text`
  font-size: 17px;
  color: rgba(255, 255, 255, 1);
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  letter-spacing: -0.3px;
`;
const Checked = styled.Image`
  width: 16px;
  height: 16px;
  margin: 0 5px;
`;
const Description = styled.Text`
  font-size: 17px;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: -0.2px;
  margin-top: 6px;
  width: 80%;
`;
const Music = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-top: 13px;
  width: 80%;
`;
// const Empezar = styled.Button`
//   margin-bottom: 40px;
//   margin-left: 48px;

//   align-self: center;
//   background-color: green;
//   color: white;
//   width: 70px;
// `;

const Info = ({ user, data }) => {
  const navigation = useNavigation();
  // console.log('info>>>>>>>>>>>>>>>',data)
  return (
    <Container key={data.id} collapsable={false} >
      <User collapsable={false}>
        <UserName>
          -{data.id}-@{user.username}
        </UserName>
        <Checked source={require("../assets/user.png")} />
      </User>
      <Description>{user.description}</Description>
      <Music>
        <Feather name="music" size={13} /> {user.music}
      </Music>

      {/* <Empezar title={"Empezar"} 
       onPress={() =>
              navigation.navigate("Wf", {
                id: empezar.id,
                videosWf: empezar.videosWf,
              }) 
            //   && navigation.setParams({ id: element.id, titulo: element.titulo })
            }

      /> */}
    </Container>
  );
};

export default Info;
// {/* <Feather name='music' size={13} /> */}
