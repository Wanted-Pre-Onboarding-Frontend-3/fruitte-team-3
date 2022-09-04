# 패키지 설치

패키지 매니저는 yarn을 사용합니다.

```shell
yarn install
```

# commit시 자동으로 pretiier write script가 실행됩니다.

editing중에도 지속적으로 formatting이 필요하시면 prettier extendsion을 설치해 주세요.(vscode 별도 세팅이 필요합니다.)
prettier extendsion 설치후
setting.json

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

eslint, prettier룰 변경은 팀원간 상호 합의가 필요합니다.
