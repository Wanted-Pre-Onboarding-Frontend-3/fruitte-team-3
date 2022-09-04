import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import interview_list from '../../mock/interview_list.json';
import { Heading1, Paragraph, Section, Text } from './Common';
import InterviewItem from './InterviewItem';
import Symbol from './Symbol';

export default function BottomSection() {
  const [interviewList, setInterviewList] = useState([]);

  useEffect(() => {
    setInterviewList(interview_list);
  }, []);

  return (
    <Section>
      <Symbol />
      <Heading1 mt={24} mb={36}>
        우리농가 파트너 [프룻파머]
      </Heading1>
      <Paragraph>
        프루떼는 다음 세대의 환경과 바른 먹거리를 생각하는 농가파트너
        ‘프룻파머’와 함께합니다.
      </Paragraph>
      <Paragraph>
        넓고 푸른 환경에서 준비한 피크닉으로 여러분을 초대하기도 하고,
      </Paragraph>
      <Paragraph>
        반짝 스토어에서는 친환경 신념을 지키며 정성껏 기른 농가의 작물들을
        엄선하여 소개하고 있습니다.
      </Paragraph>
      <Paragraph>
        프루떼 피크닉과 반짝스토어를 통해 친환경 농장을 알고 맛보는 기쁨까지
        얻으실 수 있습니다
      </Paragraph>
      <Text alignSelf="flex-start" fontSize={18} fontWeight={600} mt={48}>
        프룻파머 인터뷰
      </Text>
      <InterviewGrid>
        {interviewList.map((interview) => (
          <Link
            key={interview.id}
            target={interview.is_external ? '_blank' : undefined}
            to={interview.url}
          >
            <InterviewItem data={interview} />
          </Link>
        ))}
      </InterviewGrid>
    </Section>
  );
}

const InterviewGrid = styled.ul`
  display: grid;
  align-self: center;
  gap: 8px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
