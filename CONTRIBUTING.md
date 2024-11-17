# Docusaurus에 기여하기

[Docusaurus](https://docusaurus.io)는 오픈 소스 문서화를 더 쉽게 만들기 위한 우리의 방법입니다. 현재 [많은 오픈 소스 프로젝트가 이를 사용](https://docusaurus.io/showcase)하고 있으며, 더 많은 프로젝트가 계획되어 있습니다. Docusaurus에 기여하는 데 관심이 있다면, 이 문서가 기여 과정을 명확하게 설명하는 데 도움이 되기를 바랍니다.

[Open Source Guides](https://opensource.guide/) 웹사이트는 오픈 소스 프로젝트를 운영하고 기여하는 방법을 배우고자 하는 개인, 커뮤니티 및 기업을 위한 리소스 모음을 제공합니다. 기여자와 오픈 소스 초보자 모두에게 다음 가이드가 특히 유용할 것입니다:

- [오픈 소스에 기여하는 방법](https://opensource.guide/how-to-contribute/)
- [환영하는 커뮤니티 구축하기](https://opensource.guide/building-community/)

## 행동 강령

Meta는 프로젝트 참여자들이 준수해야 할 행동 강령을 채택했습니다. 어떤 행동이 허용되고 허용되지 않는지 이해할 수 있도록 [전문](https://code.fb.com/codeofconduct)을 읽어주세요.

## 참여하기

Docusaurus에 기여하는 방법은 많으며, 그 중 상당수는 코드 작성과 관련이 없습니다. 시작하기 위한 몇 가지 아이디어를 소개합니다:

- 단순히 Docusaurus를 사용해보세요. [시작하기](https://docusaurus.io/docs/installation) 가이드를 따라해보세요. 모든 것이 예상대로 작동하나요? 그렇지 않다면, 우리는 항상 개선점을 찾고 있습니다. [이슈를 열어](#issues) 알려주세요.
- [열린 이슈](https://github.com/facebook/docusaurus/issues)를 살펴보세요. 해결 방법을 제공하거나, 명확한 설명을 요청하거나, 레이블을 제안하세요. [이슈와 풀 리퀘스트 분류](#triaging-issues-and-pull-requests)를 도와주세요.
- 수정하고 싶은 이슈를 찾았다면, [풀 리퀘스트를 열어](#pull-requests)주세요. [_Good first issue_](https://github.com/facebook/docusaurus/labels/Good%20first%20issue)로 태그된 이슈는 시작하기 좋은 곳입니다.
- [Docusaurus 문서](https://docusaurus.io/docs/installation)를 읽어보세요. 혼란스럽거나 개선할 수 있는 부분을 발견하면, 대부분의 문서 하단에 있는 "이 페이지 수정하기"를 클릭하여 GitHub 인터페이스에서 변경사항을 제안할 수 있습니다.
- 커뮤니티의 다른 사람들이 [요청한 기능](https://github.com/facebook/docusaurus/labels/feature)을 살펴보고 작업하고 싶은 것이 있다면 풀 리퀘스트를 여는 것을 고려해보세요.

기여는 매우 환영합니다. 기여 계획에 도움이 필요하다고 생각되면, X의 [@docusaurus](https://x.com/docusaurus)로 연락주시고 약간의 도움이 필요하다고 알려주세요.

### Discord 채널에 참여하기

[Discord](https://discord.gg/docusaurus)에서 [`#contributors`](https://discord.gg/6g6ASPA) 채널을 통해 Docusaurus 개발에 관한 모든 것을 논의할 수 있습니다. [`#help-and-questions`](https://discord.gg/fwbcrQ3dHR) 채널에서 다른 사용자를 돕는 것으로도 큰 도움이 될 수 있습니다.

[여기서부터 계속 진행할까요? 코드 예시는 원문 그대로 유지하고 주석만 번역하면서요.]

### 이슈와 풀 리퀘스트 분류하기

코드를 작성하지 않고도 프로젝트에 기여할 수 있는 좋은 방법 중 하나는 접수되는 이슈와 풀 리퀘스트를 분류하는 것입니다.

- 이슈를 해결하는 데 필요한 모든 세부 사항이 제공되지 않았다고 생각되면 추가 정보를 요청하세요.
- 이슈를 분류하는 데 도움이 될 수 있는 [레이블](https://github.com/facebook/docusaurus/labels)을 제안하세요.
- 오래된 이슈나 닫아야 할 이슈를 표시하세요.
- 테스트 계획을 요청하고 코드를 검토하세요.

## 개발 프로세스

Docusaurus는 [GitHub](https://github.com/facebook/docusaurus)를 진실의 원천으로 사용합니다. 핵심 팀이 직접 작업할 것이며, 모든 변경사항은 처음부터 공개될 것입니다.

모든 풀 리퀘스트는 GitHub actions를 통한 지속적 통합 시스템에서 검사됩니다. 단위 테스트, 엔드-투-엔드 테스트, 성능 테스트, 스타일 테스트 등 다양한 테스트가 있습니다.

### 브랜치 구성

Docusaurus는 하나의 주요 브랜치 `main`을 가지고 있으며, 풀 리퀘스트로 새로운 기능을 제공하기 위해 배포 미리보기가 있는 기능 브랜치를 사용합니다.

## 이슈

[새 이슈를 열 때](https://github.com/facebook/docusaurus/issues/new/choose)는 항상 이슈 템플릿을 작성해야 합니다. **이 단계는 매우 중요합니다!** 그렇지 않으면 이슈가 적시에 관리되지 않을 수 있습니다. 이런 일이 발생하더라도 개인적으로 받아들이지 마시고, 템플릿에서 요구하는 모든 정보를 수집한 후 새 이슈를 열어주세요.

**GitHub 이슈 트래커를 질문용으로 사용하지 마세요.** Docusaurus 사용에 대한 질문이 있다면, [지원 채널](https://docusaurus.io/community/support) 중 하나를 사용해주세요. 최선을 다해 질문에 답변하겠습니다.

### 버그

공개 버그에 대해서는 [GitHub Issues](https://github.com/facebook/docusaurus/issues)를 사용합니다. 문제를 보고하고 싶다면, 먼저 둘러보고 누군가가 이미 해당 문제에 대한 이슈를 열었는지 확인하세요. 이것이 새롭고 보고되지 않은 버그라고 확신한다면, [버그 보고서](https://github.com/facebook/docusaurus/issues/new?assignees=&labels=bug%2Cstatus%3A+needs+triage&template=bug.yml)를 제출할 수 있습니다.

- **하나의 이슈, 하나의 버그:** 이슈당 하나의 버그만 보고해주세요.
- **재현 단계 제공:** 문제를 재현하는 데 필요한 모든 단계를 나열하세요. 버그 보고서를 읽는 사람이 최소한의 노력으로 이러한 단계를 따라 문제를 재현할 수 있어야 합니다.

버그만 수정하는 경우에는 바로 풀 리퀘스트를 제출해도 좋지만, 수정하려는 내용을 자세히 설명하는 이슈를 먼저 제출하는 것을 권장합니다. 이는 특정 수정사항을 받아들이지 않더라도 문제를 추적하고 싶을 때 도움이 됩니다.

### 보안 버그

Meta는 보안 버그의 안전한 공개를 위한 [바운티 프로그램](https://www.facebook.com/whitehat/)을 운영하고 있습니다. 이를 염두에 두고 공개 이슈를 제출하지 말고, 해당 페이지에 설명된 프로세스를 따라주세요.

### 기능 요청

새로운 기능이나 개선사항을 요청하고 싶지만 아직 풀 리퀘스트를 열 생각이 없다면, **상세한 RFC** 형태로 [기능 템플릿](https://github.com/facebook/docusaurus/issues/new?assignees=&labels=feature%2Cstatus%3A+needs+triage&template=feature.yml)을 사용하여 이슈를 제출할 수 있습니다. 또는 [Canny 보드](https://docusaurus.io/feature-requests)를 사용하여 더 캐주얼한 기능 요청을 하고 RFC를 제안하기 전에 충분한 관심을 얻을 수 있습니다.

### 제안

기존 구현에 대한 중요한 변경을 하려는 경우, [제안 템플릿](https://github.com/facebook/docusaurus/issues/new?assignees=&labels=proposal%2Cstatus%3A+needs+triage&template=proposal.yml)으로 이슈를 제출하는 것을 권장합니다. 이를 통해 많은 노력을 들이기 전에 제안에 대한 합의에 도달할 수 있습니다. 이러한 유형의 이슈는 드물어야 합니다.

### 이슈 인계받기

Docusaurus 코드베이스와 우리의 기여 프로세스에 익숙해질 수 있도록 [초보자 친화적 이슈](https://github.com/facebook/docusaurus/labels/good%20first%20issue) 목록이 있습니다. 이는 시작하기 좋은 곳입니다.

`good first issue` 외에도 다음 레이블도 살펴볼 만합니다:

- [`help wanted`](https://github.com/facebook/docusaurus/labels/help%20wanted): 특정 도메인에 대한 전문 지식이 있다면, 이러한 이슈에서 작업하는 것이 당신의 전문성을 빛나게 할 수 있습니다.
- [`status: accepting pr`](https://github.com/facebook/docusaurus/labels/status%3A%20accepting%20pr): 커뮤니티 기여자들은 이들 중 어떤 것이든 자유롭게 인계받을 수 있습니다.

이러한 이슈 중 어느 것이든 작업하고 싶다면, "I'd like to work on this"라는 메시지를 남기면 이슈를 당신에게 할당하고 이슈의 상태를 "claimed"로 업데이트할 것입니다. **그 후 7일 이내에 풀 리퀘스트를 보내야 합니다**. 그래야 당신이 불가능한 경우 다른 사람에게 이슈를 위임할 수 있습니다.

또는 이슈를 열 때 "self service" 체크박스를 클릭하여 직접 이슈를 작업하고 싶다는 것을 표시할 수 있으며, 이 경우에도 이슈가 "claimed"로 표시됩니다.

## 개발

### 기여를 위한 온라인 원클릭 설정

Gitpod(무료 온라인 VS Code 유사 IDE)를 사용하여 기여할 수 있습니다. 단 한 번의 클릭으로 작업공간(Docusaurus 2용)을 시작하고 자동으로:

- docusaurus 저장소를 복제합니다.
- 의존성을 설치합니다.
- `yarn start`를 실행합니다.

따라서 바로 기여를 시작할 수 있습니다.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/facebook/docusaurus)

새로운 [github.dev](https://github.dev/facebook/docusaurus) 기능도 시도해볼 수 있습니다. 파일을 탐색하는 동안 도메인 이름을 `github.com`에서 `github.dev`로 변경하면 브라우저가 온라인 에디터로 전환됩니다. 바로 변경을 시작하고 풀 리퀘스트를 보낼 수 있습니다.

### 설치

1. [Yarn](https://yarnpkg.com/)이 설치되어 있는지 확인하세요.
2. 저장소를 복제한 후, 저장소의 루트에서 `yarn install`을 실행하세요. 이는 모든 의존성을 설치하고 모든 로컬 패키지를 빌드할 것입니다.
3. 개발 서버를 시작하려면 `yarn workspace website start`를 실행하세요.

### 코드 규칙

- **가장 중요한 것: 주변을 살펴보세요.** 프로젝트의 나머지 부분에서 사용된 스타일을 따르세요. 여기에는 포맷팅, 파일 이름 짓기, 코드에서 이름 짓기, 문서에서 이름 짓기 등이 포함됩니다.
- "매력적인"
- 대부분의 스타일 문제를 잡아내기 위해 Prettier(포맷터)와 ESLint(구문 린터)가 있습니다. 로컬에서 작업하는 경우 git 커밋할 때마다 자동으로 일부 문제를 수정해야 합니다.
- **문서의 경우**: 80자에서 줄을 감싸지 마세요 - 문서를 편집할 때 에디터를 소프트 랩으로 구성하세요.

일반적으로 스타일에 대해 너무 걱정하지 마세요—코드를 검토하면서 관리자가 수정을 도와드릴 것입니다.

## 풀 리퀘스트

풀 리퀘스트를 열어 상위 저장소에 코드를 기여하기로 결정하셨군요. 많은 시간을 투자하셨고, 우리는 그것을 감사히 생각합니다. 우리는 당신과 협력하여 PR이 검토되도록 최선을 다할 것입니다.

첫 풀 리퀘스트를 작업하시나요? 이 무료 비디오 시리즈에서 방법을 배울 수 있습니다: [**GitHub에서 오픈 소스 프로젝트에 기여하는 방법**](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

풀 리퀘스트를 제출할 때 다음 사항을 확인해 주세요:

1. **PR을 작게 유지하세요.** 작은 풀 리퀘스트(~300줄의 차이)는 검토하기가 훨씬 쉽고 병합될 가능성이 더 높습니다. PR이 한 가지 일만 하도록 하고, 그렇지 않다면 분할해 주세요.
2. **설명적인 제목을 사용하세요.** 이 [커밋 메시지 스타일](#semantic-commit-messages)을 따르는 것이 좋습니다.
3. **변경사항을 테스트하세요.** 풀 리퀘스트 설명에 [**테스트 계획**](#test-plan)을 설명하세요.
4. **CLA.** 아직 하지 않았다면, [CLA에 서명](https://code.facebook.com/cla)하세요.

모든 풀 리퀘스트는 `main` 브랜치를 대상으로 열어야 합니다.

우리는 실수를 방지하기 위해 자동화된 테스트를 실행하는 많은 통합 시스템을 가지고 있습니다. 관리자들도 코드를 검토하고 명백한 문제를 수정해 줄 것입니다. 이러한 시스템의 임무는 잡무에 대해 최대한 적게 걱정하도록 하는 것입니다. 체크리스트를 완료하면 모든 사람의 시간을 절약할 수 있지만, 당신의 코드 기여가 어떤 절차를 따르는 것보다 더 중요합니다.

### 시맨틱 커밋 메시지

사소한 커밋 메시지 스타일의 변경이 당신을 더 나은 프로그래머로 만들 수 있는 방법을 살펴보세요.

형식: `<type>(<scope>): <subject>`

`<scope>`는 선택사항입니다. 변경사항이 하나/두 개의 패키지에 특정된 경우 scope 추가를 고려하세요. Scope는 간단하면서도 인식 가능해야 합니다. 예: `content-docs`, `theme-classic`, `core`

다양한 커밋 유형:

- `feat`: **최종 사용자를 위한** 새로운 API 또는 동작.
- `fix`: **최종 사용자를 위한** 버그 수정.
- `docs`: 저장소의 웹사이트 또는 다른 Markdown 문서 변경.
- `refactor`: 동작의 차이가 없는 프로덕션 코드 변경, 예: 파일 분할, 내부 변수 이름 변경, 코드 스타일 개선...
- `test`: 누락된 테스트 추가, 테스트 리팩토링; 프로덕션 코드 변경 없음.
- `chore`: 의존성 업그레이드, 새 버전 출시... 유지 보수 목적으로 **정기적으로 수행되는** 작업.
- `misc`: 프로덕션 코드를 변경하지 않지만 `test` 또는 `chore`가 아닌 다른 모든 것. 예: GitHub actions 워크플로우 업데이트.

PR 제목에 대해 너무 스트레스 받지 마세요. PR은 스쿼시-머지될 것이며 `main` 브랜치에 대한 커밋은 PR의 제목을 가져갈 것이므로, 브랜치 내의 커밋이 의미론적으로 이름 지어질 필요는 없습니다. 관리자가 PR 제목을 올바르게 만드는 것을 도와드릴 것이며, 우리는 또한 커밋 메시지 유형과 동일하지 않은 PR 레이블 시스템을 가지고 있습니다. 당신의 코드가 규칙보다 더 중요합니다!

예시:

```
feat(core): allow overriding of webpack config
^--^^----^  ^------------^
|   |       |
|   |       +-> 현재 시제로 요약. 타이틀 케이스가 아닌 소문자 사용!
|   |
|   +-> 이 변경사항이 영향을 미친 패키지.
|
+-------> 유형: 위의 목록에서 사용하는 것을 참조.
```

### 버전이 있는 문서

문서 변경만 하고 싶다면 버전이 있는 문서에 대해서만 알면 됩니다.

- `website/docs` - 여기의 파일은 https://docusaurus.io/docs/next/installation 의 "next" 버전을 담당합니다.
- `website/versioned_docs/version-X.Y.Z` - 이것들은 https://docusaurus.io/docs/X.Y.Z/installation 의 X.Y.Z 버전을 위한 문서입니다.

필요하다고 확신하지 않는 한 `versioned_docs/` 또는 `versioned_sidebars/` 내의 자동 생성된 파일을 편집하지 마세요. 예를 들어, 새로운 기능에 대한 정보는 버전이 있는 문서에 문서화되어서는 안 됩니다. 이전 버전에 대한 편집은 문서의 새로운 버전으로 전파되지 않을 것입니다.

### 테스트 계획

좋은 테스트 계획은 실행한 정확한 명령과 그 출력을 포함하며, 풀 리퀘스트가 UI를 변경하는 경우 스크린샷이나 비디오를 제공합니다. API를 변경한 경우 문서를 업데이트하세요.

테스트는 우리의 지속적 통합 시스템에 통합되어 있으므로, 항상 로컬 테스트를 실행할 필요는 없습니다. 그러나 중요한 코드 변경의 경우, PR이 좋은 상태에 있는지 확인하기 위해 먼저 로컬에서 철저한 테스트를 수행하면 당신과 관리자의 시간을 절약할 수 있습니다. 다양한 유형의 테스트가 있습니다:

- **빌드 및 타입 체크.** 우리는 코드베이스에서 TypeScript를 사용하여 코드의 일관성을 보장하고 일부 명백한 실수를 조기에 잡아냅니다.
- **단위 테스트.** API 엔드포인트의 동작을 테스트하기 위해 [Jest](https://jestjs.io/)를 사용합니다. 루트 디렉토리에서 `yarn test`를 실행하여 모든 테스트를 실행하거나, `yarn test path/to/your/file.test.ts`를 실행하여 특정 테스트를 실행할 수 있습니다.
- **도그푸딩.** 우리의 웹사이트 자체가 모든 종류의 잠재적 구성 사례를 다루며 심지어 전용 [테스트 영역](https://docusaurus.io/tests)도 있습니다. PR에서 우리 웹사이트의 구성을 업데이트하는 것을 두려워하지 마세요—그것은 관리자가 효과를 미리 볼 수 있도록 도울 수 있습니다. 병합하고 프로덕션에 배포할 때 웹사이트 변경을 유지해야 하는지 결정할 수 있습니다.
- **E2E 테스트.** 새로운 변경사항으로 코드의 배포와 설치를 시뮬레이션할 수 있습니다. 변경사항을 로컬에서 테스트하는 데 도움이 필요하면 [로컬 서드파티 테스트](https://github.com/facebook/docusaurus/blob/main/admin/local-third-party-project-testing.md)에 대한 문서를 확인할 수 있습니다.

### 라이선싱

Docusaurus에 기여함으로써, 당신은 당신의 기여가 MIT 라이선스하에 라이선스될 것에 동의합니다. 다음을 새 파일의 상단에 복사하여 붙여넣으세요:

```js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * 이 소스 코드는 이 저장소의 루트 디렉토리에 있는 LICENSE 파일에서
 * 찾을 수 있는 MIT 라이선스에 따라 라이선스가 부여됩니다.
 */
```

이는 `header/header` ESLint 규칙으로 자동 수정 가능합니다.

### 기여자 라이선스 계약(CLA)

풀 리퀘스트를 받아들이기 위해서는 CLA를 제출해야 합니다. 이는 한 번만 하면 되므로, 다른 Meta 오픈 소스 프로젝트에서 이미 했다면 더 이상 할 필요가 없습니다. 처음으로 풀 리퀘스트를 제출하는 경우, Meta GitHub Bot이 CLA 양식 링크로 응답할 것입니다. [여기에서 CLA를 완료](https://code.facebook.com/cla)할 수도 있습니다.

CLA에 서명한 후, CLA 봇이 자동으로 PR 상태를 업데이트할 것입니다. 새 PR을 열 필요가 없습니다.

**CLA는 풀 리퀘스트를 병합하기 위해 필요합니다.** 우리는 당신의 노력을 소중히 여기며, 풀 리퀘스트를 보낸 후 사용할 수 없게 된 경우에도 리뷰를 다룰 때까지 기다릴 의향이 있습니다. 그러나 병합할 준비가 되었지만 CLA가 없고 작성자로부터 응답이 없는 풀 리퀘스트는 **열린 후 2주 이내에 닫힐 것입니다**.

이용할 수 없었고 PR이 닫힌 경우, 준비가 되면 다시 열어주세요! 우리는 여전히 기쁘게 검토하고, 완료하는 것을 도우며, 결국 병합할 것입니다.

### 주요 변경사항

새로운 주요 변경사항을 추가할 때는 풀 리퀘스트에서 이 템플릿을 따르세요:

```md
### 여기에 새로운 주요 변경사항

- **영향을 받는 대상**:
- **마이그레이션 방법**:
- **이 주요 변경을 하는 이유**:
- **심각도(영향을 받는 사람 수 x 노력)**:
```

### 다음은 무엇인가요?

핵심 Docusaurus 팀이 풀 리퀘스트를 모니터링할 것입니다. 위의 가이드라인을 따라 풀 리퀘스트를 일관되게 유지하는 데 도움을 주세요.
