import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

const HashTag = () => {
  const [hashtagText, setHashtagText] = useState('');
  const [hashtagList, setHashtagList]: any = useState([]);

  const HashtagOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    setHashtagText(e.target.value);
  };

  const AddHashtagList = () => {
    setHashtagList([...hashtagList, hashtagText]);
  };

  return (
    <HashtagContainer>
      <h3>해시태그</h3>
      <Row>
        <HashtagInput type="text" onChange={HashtagOnchange} />
        <HashtagBtn onClick={AddHashtagList}>+</HashtagBtn>
      </Row>
      <HashtagList>
        {hashtagList?.map((hashtag: string) => {
          return <Hashtag>#{hashtag}</Hashtag>;
        })}
      </HashtagList>
    </HashtagContainer>
  );
};

export default HashTag;

const HashtagContainer = styled.div`
  margin-top: 10px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Row = styled.div`
  display: flex;
`;
const HashtagInput = styled.input`
  border: 1px solid #222;
  border-radius: 5px 0px 0px 5px;
  padding: 5px 10px;
  border-right: none;
`;
const HashtagBtn = styled.button`
  border: 1px solid #222;
  border-radius: 0px 5px 5px 0px;
  padding: 5px;
`;
const HashtagList = styled.ul`
  display: flex;
  gap: 10px;
`;
const Hashtag = styled.li`
  border: 1px solid #222;
  border-radius: 5px;
  padding: 5px 10px;
`;
