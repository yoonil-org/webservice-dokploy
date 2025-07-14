# Compute Portal Website

Compute Portal은 최신 컴퓨팅 기술을 활용한 효율적인 리소스 관리 솔루션을 제공하는 웹 서비스입니다.

## 🚀 프로젝트 개요

- **목표**: 간단한 샘플 웹사이트를 구현하고 Dokploy를 통해 자동 배포하여 HTTPS 도메인으로 서비스
- **최종 접속 URL**: https://computeportal.net
- **기술 스택**: Node.js, Express.js, HTML5, CSS3, JavaScript, Docker

## 📋 시스템 아키텍처

```
GitHub Repository → Dokploy (computeportal1.ddns.net) → HTTPS Service (computeportal.net)
```

## 🛠️ 개발 환경 요구사항

- **Node.js**: 18.x 이상
- **Docker**: 20.x 이상
- **Git**: 2.30 이상

## 📦 설치 및 실행

### 로컬 개발 환경

1. **저장소 클론**
   ```bash
   git clone https://github.com/[username]/computeportal-website.git
   cd computeportal-website
   ```

2. **의존성 설치**
   ```bash
   npm install
   ```

3. **개발 서버 실행**
   ```bash
   npm run dev
   ```

4. **브라우저에서 확인**
   ```
   http://localhost:3000
   ```

### Docker를 사용한 실행

1. **프로덕션 빌드 및 실행**
   ```bash
   docker-compose up --build
   ```

2. **개발 환경 실행 (hot reloading)**
   ```bash
   docker-compose --profile dev up --build
   ```

3. **개발 서버 접속**
   ```
   http://localhost:3001
   ```

## 🏗️ 프로젝트 구조

```
computeportal-website/
├── src/                    # 프론트엔드 소스 코드
│   ├── index.html         # 메인 페이지
│   ├── about.html         # 소개 페이지
│   ├── contact.html       # 연락처 페이지
│   ├── 404.html          # 404 에러 페이지
│   ├── styles/
│   │   └── main.css      # 메인 스타일시트
│   └── scripts/
│       └── main.js       # 메인 JavaScript
├── server/
│   └── app.js            # Express.js 서버
├── logo/                 # 브랜드 로고 파일들
├── package.json          # Node.js 의존성 및 스크립트
├── Dockerfile            # 프로덕션 Docker 설정
├── Dockerfile.dev        # 개발용 Docker 설정
├── docker-compose.yml    # Docker Compose 설정
├── .dockerignore         # Docker 빌드 제외 파일
├── .gitignore           # Git 제외 파일
└── README.md            # 프로젝트 문서
```

## 🎨 주요 기능

### 프론트엔드
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 지원
- **모던 UI/UX**: Compute Portal 브랜딩 적용
- **SEO 최적화**: Meta tags, OpenGraph 설정
- **접근성**: WCAG 가이드라인 준수

### 백엔드
- **Express.js 서버**: 안정적인 웹 서버
- **보안 미들웨어**: Helmet, CORS, Compression
- **로깅**: Morgan을 통한 요청 로깅
- **헬스체크**: `/api/health` 엔드포인트

### 페이지 구성
- **홈페이지**: 서비스 소개 및 주요 기능
- **소개 페이지**: 회사 비전, 서비스 영역, 기술 스택
- **연락처 페이지**: 문의 폼 및 연락처 정보
- **404 페이지**: 사용자 친화적 에러 페이지

## 🔧 개발 스크립트

```bash
npm start          # 프로덕션 서버 실행
npm run dev        # 개발 서버 실행 (nodemon)
npm test           # 테스트 실행
npm run build      # 빌드 실행
```

## 🐳 Docker 배포

### 프로덕션 빌드
```bash
# 이미지 빌드
docker build -t computeportal-website .

# 컨테이너 실행
docker run -p 3000:3000 computeportal-website
```

### 개발 환경
```bash
# 개발용 컨테이너 실행
docker-compose --profile dev up --build
```

## 🌐 Dokploy 배포 설정

### Dokploy 프로젝트 설정
```yaml
name: computeportal-website
source:
  type: github
  repository: [GitHub Username]/computeportal-website
  branch: main
  
build:
  dockerfile: Dockerfile
  context: .
  
deployment:
  port: 3000
  environment: production
```

### 도메인 설정
- **도메인**: computeportal.net
- **DNS**: A 레코드로 Dokploy 서버 IP 연결
- **SSL**: Let's Encrypt 자동 인증서

## 🔒 보안 고려사항

- **입력 검증**: XSS, SQL Injection 방지
- **보안 헤더**: Helmet 미들웨어 적용
- **HTTPS 강제**: HTTP → HTTPS 리다이렉션
- **환경 변수**: 민감한 정보 환경 변수 관리

## 📊 모니터링 및 로깅

- **애플리케이션 로그**: 요청/응답 로그
- **에러 로그**: 오류 추적 및 디버깅
- **성능 모니터링**: 응답 시간 측정
- **헬스체크**: `/api/health` 엔드포인트

## 🧪 테스트

```bash
# 테스트 실행
npm test

# 테스트 커버리지 확인
npm run test:coverage
```

## 📈 성능 최적화

- **이미지 최적화**: WebP 포맷 사용
- **코드 분할**: JavaScript 모듈화
- **캐싱**: 정적 파일 캐싱
- **압축**: Gzip 압축 적용

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처

- **이메일**: info@computeportal.net
- **전화**: 02-1234-5678
- **웹사이트**: https://computeportal.net

## 🙏 감사의 말

이 프로젝트는 다음 기술들을 사용합니다:
- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Dokploy](https://dokploy.com/)

---

**Compute Portal Team** © 2024 