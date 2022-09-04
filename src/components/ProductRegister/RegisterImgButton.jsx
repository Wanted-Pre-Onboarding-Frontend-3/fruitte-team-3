import { useState } from 'react';
import { GoPlusSmall } from 'react-icons/go';
import { TiDelete } from 'react-icons/ti';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { colors } from '../../styles/colors';
import { detailImgUrlState, mainImgUrlState } from '../../utils/registerStore';

const RegisterImgButton = ({ imgId, isMultiple }) => {
  const [imgFile, setImgFile] = useState('');
  const setMainImgUrl = useSetRecoilState(mainImgUrlState);
  const [showImgs, setShowImgs] = useRecoilState(detailImgUrlState);

  const handleAttachedImg = (e) => {
    const file = e.target.files[0];
    const imgLists = e.target.files;

    let imgUrlLists = [...showImgs];

    if (!isMultiple) {
      const currentImgUrl = URL.createObjectURL(file);

      setImgFile(file.name);
      setMainImgUrl(currentImgUrl);
      return;
    } else {
      setImgFile([...imgFile, file.name]);

      for (let i = 0; i < imgLists.length; i++) {
        const currentImgUrl = URL.createObjectURL(imgLists[i]);
        imgUrlLists.push(currentImgUrl);
      }

      if (imgUrlLists.length > 5) {
        imgUrlLists = imgUrlLists.slice(0, 5);
      }

      // 문제 부분
      setShowImgs(imgUrlLists);
      console.log(showImgs);
    }
  };

  const handleRemoveFile = (id) => {
    setShowImgs(showImgs.filter((_, index) => index !== id));
    setImgFile('');
  };

  return (
    <Container multiple={isMultiple}>
      <label htmlFor={imgId}>
        <GoPlusSmall size="18" />
        이미지 첨부
      </label>

      <input
        type="file"
        id={imgId}
        accept="image/jpg, image/png, image/jpeg"
        onChange={handleAttachedImg}
        multiple={isMultiple}
      />

      {!isMultiple && imgFile && (
        <AddImg>
          <p>{imgFile}</p>

          <button onClick={() => handleRemoveFile(imgId)}>
            <TiDelete size="24" />
          </button>
        </AddImg>
      )}

      {isMultiple &&
        showImgs.map((image, id) => (
          <AddImgs key={id}>
            <img src={image} alt={`${image}-${id}`} />

            <button onClick={() => handleRemoveFile(id)}>
              <TiDelete size="24" />
            </button>
          </AddImgs>
        ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.multiple ? 'column' : 'row')};

  label {
    width: 100px;
    display: flex;
    align-items: center;
    padding: 1em 0.6em;
    font-size: 12px;
    color: ${colors.gray3};
    border: 1px solid ${colors.gray4};
    border-radius: 4px;
    margin-right: 1em;
    text-align: center;
    cursor: pointer;
  }

  input[type='file'] {
    display: none;
    width: 100%;
  }

  button {
    border: none;
    appearance: none;
    background-color: transparent;
  }
`;

const AddImg = styled.div`
  display: flex;
  align-items: center;
`;

const AddImgs = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 300px;
    height: 100px;
    margin: 1em 0;

    &:last-child {
      margin: 0;
    }
  }
`;
export default RegisterImgButton;
