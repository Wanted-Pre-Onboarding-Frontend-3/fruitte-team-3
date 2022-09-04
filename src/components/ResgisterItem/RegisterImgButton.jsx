import { useState } from 'react';
import styled from 'styled-components';

import { colors } from '../../styles/colors';

const RegisterImgButton = ({ imgId, isMultiple }) => {
  const [imgFile, setImgFile] = useState('');
  const [showImgs, setShowImgs] = useState([]);

  const handleAttachedImg = (e) => {
    const file = e.target.files[0];

    if (!isMultiple) {
      setImgFile(file.name);
      return;
    } else {
      setImgFile([...imgFile, file.name]);

      const imgLists = e.target.files;
      let imgUrlLists = [...showImgs];

      for (let i = 0; i < imgLists.length; i++) {
        const currentImgUrl = URL.createObjectURL(imgLists[i]);
        imgUrlLists.push(currentImgUrl);
      }

      if (imgUrlLists.length > 5) {
        imgUrlLists = imgUrlLists.slice(0, 5);
      }
      setShowImgs(imgUrlLists);
    }
  };

  const handleRemoveFile = (id) => {
    setShowImgs(showImgs.filter((_, index) => index !== id));
    setImgFile('');
  };

  return (
    <Container>
      <label htmlFor={imgId}>이미지 첨부</label>
      <input
        type="file"
        id={imgId}
        accept="image/jpg, image/png, image/jpeg"
        onChange={handleAttachedImg}
        multiple={isMultiple}
      />

      {!isMultiple && imgFile && (
        <div>
          <p>{imgFile}</p>
          <button onClick={() => handleRemoveFile(imgId)}>X</button>
        </div>
      )}

      {showImgs.map((image, id) => (
        <div key={id}>
          <img src={image} alt={`${image}-${id}`} />
          <button onClick={() => handleRemoveFile(id)}>X</button>
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
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
