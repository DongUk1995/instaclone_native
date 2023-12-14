import React from "react";
import styled from "styled-components/native";

const UserAvatar = styled.Image``;
const Username = styled.Text``;
const File = styled.Image``;
const Actions = styled.View``;
const Action = styled.TouchableOpacity``;
const Caption = styled.View``;
const CaptionText = styled.Text``;

export default function Photo({}) {
  return (
    <Container>
      <Header>
        <UserAvatar />
        <Username></Username>
      </Header>
      <File />
      <Actions>
        <Action />
        <Action />
      </Actions>
      <Caption>
        <Username></Username>
        <CaptionText></CaptionText>
      </Caption>
    </Container>
  );
}
