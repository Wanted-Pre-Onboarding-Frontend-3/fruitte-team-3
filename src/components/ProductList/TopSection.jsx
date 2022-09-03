import { Heading1, Paragraph, Section } from './Common';

export default function TopSection() {
  return (
    <Section>
      <Heading1 mt={24} mb={36}>
        프루떼 [수확배송]
      </Heading1>
      <Paragraph textAlign="center">
        친환경 농가의 맛있고 바른 먹거리를 만났을때 게릴라로 열리는 프루떼의
        반짝스토어
      </Paragraph>
      <Paragraph textAlign="center">
        가장 알맞게 익었을때 농장에서 바로! 수확해서 배송해드립니다.
      </Paragraph>
    </Section>
  );
}
