# todo-list

![todolist](https://github.com/JangExpedition/wanted-pre-onboarding-frontend-challenge-19/assets/114918904/6ac2b291-b060-4097-a811-9027d17d0558)

## 🧑🏻‍💻 프로젝트 소개

---

이 프로젝트는 **"원티드 주관 React 실전 가이드: 면접 및 실무 기술 | 프리온보딩 프론트엔드 챌린지 3월"** 참가를 위해 제작된 사전 과제입니다. 목표는 사용자의 일상적인 작업 관리를 간소화하고 효율화하는 것입니다.

### 요구사항

- [x]  create-react-app 혹은 vite으로 프로젝트를 생성합니다.
- [x]  아래 과제 공통 세팅의 폴더 구조를 확인합니다.
- [x]  과제를 제출하는 방법은 본인이 작업한 github repository 주소를 [issues](https://github.com/summerdidi/wanted-pre-onboarding-frontend-challenge-19/issues)에 올리면 됩니다.
- [x]  과제물은 main 브랜치에 올립니다.
- [x]  프로젝트는 node version 20에서 실행할 수 있어야합니다.
- [x]  Settings -> Codespaces -> Configuration Select branch를 main 으로 하고 제출합니다.(codespace 확인용도)
- [x]  함수형 컴포넌트를 사용해 코드를 짜주세요.
- cra로 과제를 수행하기 위해서는 node.js와 npm이 설치 되어있어야 합니다.
- 폴더 구조는 가능한 아래 양식을 맞춰주세요.
- 스타일은 tailwind, styled-component, scss등 자유롭게 설정하시면 됩니다.
- 아래 폴더와 파일은 필수 요소입니다. 나머지는 자유롭게 설정해주세요.

```
/src
  /components
    /List
  /store
  App.tsx
  index.tsx

```

### **주요 기능 및 특징**

1. **데이터 관리**:
    - **등록, 수정, 삭제 기능**: 사용자는 항목을 자유롭게 추가, 변경, 제거할 수 있습니다.
    - **로컬 스토리지 활용**: 모든 데이터는 로컬 스토리지에 저장되어, 브라우저를 새로고침해도 정보가 유지됩니다.
2. **사용자 인터페이스**:
    - **체크박스 기능**: 완료된 항목은 체크박스를 통해 시각적으로 명확히 구분됩니다. 완료 표시는 항목에 줄을 그어서 표현합니다.
    - **더블 클릭 수정**: 항목을 더블 클릭하면 즉시 수정할 수 있어 편리합니다.
3. **에러 처리**:
    - **입력 검증**: 사용자가 빈 내용을 등록하거나, 수정 시에 빈 내용이나 기존과 동일한 내용을 입력하면 오류 메시지가 표시됩니다. 이를 통해 사용자의 실수를 방지하고, 데이터의 정확성을 유지합니다.
