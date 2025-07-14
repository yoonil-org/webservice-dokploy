아래는 요청하신 웹 서비스 구현에 대한 기술 명세서입니다:

# 웹 서비스 구현 기술 명세서

## 1. 프로젝트 개요

**목표**: 간단한 샘플 웹사이트를 구현하고 Dokploy를 통해 자동 배포하여 HTTPS 도메인으로 서비스하는 웹 서비스 구축

**최종 접속 URL**: https://computeportal.net

## 2. 시스템 아키텍처

```
GitHub Repository → Dokploy (computeportal1.ddns.net) → HTTPS Service (computeportal.net)
```

## 3. 구현 단계별 명세

### 3.1 샘플 웹사이트 구현

#### 3.1.1 기술 스택
- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js + Express.js (또는 Python Flask/Django)
- **Database**: SQLite (선택사항)
- **패키징**: Docker

#### 3.1.2 프로젝트 구조
```
project-root/
├── src/
│   ├── index.html
│   ├── styles/
│   │   └── main.css
│   └── scripts/
│       └── main.js
├── server/
│   ├── app.js (Node.js) 또는 app.py (Python)
│   └── package.json (Node.js) 또는 requirements.txt (Python)
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .gitignore
└── README.md
```

#### 3.1.3 기본 기능 요구사항
- **홈페이지**: 간단한 랜딩 페이지
- **About 페이지**: 서비스 소개
- **Contact 페이지**: 연락처 정보
- **반응형 디자인**: 모바일/태블릿/데스크톱 지원
- **기본 SEO 설정**: Meta tags, OpenGraph

### 3.2 GitHub Repository 설정

#### 3.2.1 Repository 구성
- **Repository 이름**: `computeportal-website`
- **브랜치 전략**: 
  - `main`: 프로덕션 배포용
  - `develop`: 개발용 (선택사항)

#### 3.2.2 필수 파일
- `README.md`: 프로젝트 설명 및 설치 가이드
- `.gitignore`: Node.js/Python 환경에 맞는 설정
- `Dockerfile`: 컨테이너 빌드 설정
- `docker-compose.yml`: 로컬 개발 환경 설정

### 3.3 Dokploy 배포 설정

#### 3.3.1 Dokploy 서버 정보
- **서버 주소**: http://computeportal1.ddns.net
- **배포 방식**: GitHub Integration
- **컨테이너 런타임**: Docker

#### 3.3.2 Dokploy 프로젝트 설정
```yaml
# dokploy 설정 예시
name: computeportal-website
source:
  type: github
  repository: [GitHub Username]/computeportal-website
  branch: main
  
build:
  dockerfile: Dockerfile
  context: .
  
deployment:
  port: 3000 (또는 애플리케이션 포트)
  environment: production
```

### 3.4 도메인 및 SSL 인증서 설정

#### 3.4.1 도메인 설정
- **도메인**: computeportal.net
- **DNS 설정**: A 레코드로 Dokploy 서버 IP 연결
- **서브도메인**: www.computeportal.net (선택사항)

#### 3.4.2 SSL 인증서
- **인증서 타입**: Let's Encrypt (무료)
- **자동 갱신**: Dokploy 내장 기능 활용
- **리다이렉션**: HTTP → HTTPS 자동 전환

#### 3.4.3 Branding
- **Web page에 Logo 적용**: logo/PNG/*.png 파일을 이용하여 webpage branding


## 4. 개발 환경 요구사항

### 4.1 로컬 개발 환경
- **Node.js**: 18.x 이상 (Node.js 선택 시)
- **Python**: 3.9 이상 (Python 선택 시)
- **Docker**: 20.x 이상
- **Git**: 2.30 이상

### 4.2 서버 환경
- **OS**: Ubuntu 20.04 LTS 이상
- **Docker**: 20.x 이상
- **Dokploy**: 최신 버전
- **메모리**: 최소 2GB RAM
- **스토리지**: 최소 10GB

## 5. 보안 고려사항

### 5.1 애플리케이션 보안
- **입력 검증**: XSS, SQL Injection 방지
- **헤더 보안**: Security Headers 설정
- **환경 변수**: 민감한 정보 환경 변수 관리

### 5.2 서버 보안
- **HTTPS 강제**: HTTP → HTTPS 리다이렉션
- **방화벽**: 필요한 포트만 개방
- **정기 업데이트**: 보안 패치 적용

## 6. 모니터링 및 로깅

### 6.1 로그 관리
- **애플리케이션 로그**: 요청/응답 로그
- **에러 로그**: 오류 추적 및 디버깅
- **액세스 로그**: 트래픽 모니터링

### 6.2 성능 모니터링
- **응답 시간**: 페이지 로드 시간 측정
- **리소스 사용량**: CPU, 메모리 모니터링
- **가용성**: 서비스 업타임 확인

## 7. 배포 프로세스

### 7.1 자동 배포 워크플로우
1. **코드 푸시**: GitHub main 브랜치에 코드 푸시
2. **Dokploy 감지**: Webhook을 통한 변경사항 감지
3. **빌드 실행**: Docker 이미지 빌드
4. **배포 실행**: 새 컨테이너 배포
5. **헬스체크**: 서비스 정상 동작 확인

### 7.2 롤백 전략
- **이전 버전 복원**: Dokploy 내장 롤백 기능
- **데이터베이스 백업**: 배포 전 데이터 백업
- **빠른 복구**: 최소 다운타임 보장

## 8. 테스트 계획

### 8.1 로컬 테스트
- **유닛 테스트**: 개별 기능 테스트
- **통합 테스트**: 전체 워크플로우 테스트
- **브라우저 테스트**: 크로스 브라우저 호환성

### 8.2 배포 테스트
- **스테이징 환경**: 프로덕션 환경과 동일한 테스트 환경
- **부하 테스트**: 트래픽 처리 능력 확인
- **보안 테스트**: 취약점 스캔

## 9. 유지보수 계획

### 9.1 정기 작업
- **보안 업데이트**: 월 1회 의존성 업데이트
- **백업 확인**: 주 1회 백업 상태 점검
- **성능 최적화**: 분기별 성능 리뷰

### 9.2 장애 대응
- **모니터링 알림**: 실시간 장애 감지
- **응급 연락망**: 24시간 대응 체계
- **복구 절차**: 단계별 복구 매뉴얼

이 기술 명세서를 바탕으로 단계별로 구현을 진행하시면 됩니다. 각 단계에서 구체적인 구현 방법이나 설정에 대해 추가 질문이 있으시면 언제든지 말씀해 주세요.
