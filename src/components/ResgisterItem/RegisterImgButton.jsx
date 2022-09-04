import { useState } from 'react';
import styled from 'styled-components';

import colors from '../../styles/colors';

const RegisterImgButton = ({ imgId, isMultiple }) => {
  const [imgFile, setImgFile] = useState('');

  const handleAttachedImg = (e) => {
    const file = e.target.files[0];

    console.log(isMultiple);
    if (isMultiple) {
      setImgFile([...imgFile, file.name]);
    } else {
      setImgFile(file.name);
    }
  };

  const handleRemoveFile = () => {
    alert('remove');
    setImgFile('');
  };

  return (
    <ButtonContainer>
      <label htmlFor={imgId}>이미지 첨부</label>

      <input
        type="file"
        id={imgId}
        accept="image/jpg, image/png, image/jpeg"
        onChange={handleAttachedImg}
        multiple={isMultiple}
      />

      {/* TODO: 여러개의 첨부파일 등록시, 각각 삭제버튼 및 미리보기 구현*/}
      {imgFile && (
        <span>
          <p>{imgFile}</p>
          <button onClick={handleRemoveFile}>X</button>
        </span>
      )}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  width: 100%;

  label {
    width: 100%;
    padding: 0.6em;
    font-size: 12px;
    border: 1px solid ${colors.gray4};
    border-radius: 2px;
    cursor: pointer;
  }

  input[type='file'] {
    display: none;
    width: 100%;
  }
`;

export default RegisterImgButton;
